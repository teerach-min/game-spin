'use client';

import { formatCurrency } from '@/helpers/string';
import { Reward, UserProfile } from './interface';

interface ProgressBarProps {
  rewards: Reward[];
  user: UserProfile | null;
  isLoading?: boolean;
  onRedeem?: (rewardId: string) => void;
}

export default function ProgressBar({
  rewards,
  user,
  isLoading = false,
  onRedeem,
}: ProgressBarProps) {
  if (isLoading || !rewards.length) {
    return null;
  }

  const sortedRewards = [...rewards].sort((a, b) => a.point - b.point);
  const lastReward = sortedRewards[sortedRewards.length - 1];
  const totalRange = lastReward.point;
  const currentPoint = user?.point || 0;

  // Calculate segments
  const segments = sortedRewards.map((reward, index) => {
    const prevReward = index === 0 ? { point: 0 } : sortedRewards[index - 1];
    const segmentStart = prevReward.point;
    const segmentEnd = reward.point;
    const segmentRange = segmentEnd - segmentStart;
    const segmentWidthPercent = (segmentRange / totalRange) * 100;

    let progressPercent = 0;
    let isComplete = false;

    if (currentPoint >= segmentEnd) {
      progressPercent = 100;
      isComplete = true;
    } else if (currentPoint > segmentStart) {
      progressPercent = ((currentPoint - segmentStart) / segmentRange) * 100;
      isComplete = false;
    } else {
      progressPercent = 0;
      isComplete = false;
    }

    return {
      reward,
      segmentStart,
      segmentEnd,
      segmentRange,
      segmentWidthPercent,
      progressPercent,
      isComplete,
    };
  });

  return (
    <div className="relative pb-2 pt-20">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-between items-start w-full">
          {sortedRewards.map((reward, index) => {
            const hasRedeemed = user?.redeemReward.some(
              (r) => r.rewardId === reward.id,
            );
            const hasEnoughPoints = user && user.point >= reward.point;
            const canRedeem = hasEnoughPoints && !hasRedeemed;
            const isLast = index === sortedRewards.length - 1;
            const segment = segments[index];

            return (
              <div key={reward.id} className="relative flex flex-col items-center flex-1">
                <p className="mb-2 text-xs text-gray-400">
                  ครบ {formatCurrency(reward.point)}
                </p>
                
                {/* Progress Bar Segment */}
                {index === 0 ? (
                  <div className="w-full mb-2">
                    <div className="h-2 w-full absolute top-[50%] left-0 translate-y-[-50%] bg-gray-200 rounded-l-full overflow-hidden">
                      <div className="w-1/2 h-full relative">
                        {currentPoint >= segment.segmentEnd ? (
                          <div className="h-full w-full bg-orange-400 rounded-l-full" />
                        ) : (
                          <div
                            className="h-full bg-orange-400 rounded-l-full"
                            style={{
                              width: `${(currentPoint / segment.segmentEnd) * 100}%`,
                            }}
                          />
                        )}
                      </div>
                      {sortedRewards.length > 1 && (
                        <div className="w-1/2 h-full absolute top-0 right-0">
                          {currentPoint >= segment.segmentEnd ? (
                            (() => {
                              const nextReward = sortedRewards[1];
                              const nextSegmentStart = segment.segmentEnd;
                              const nextSegmentEnd = nextReward.point;
                              const nextSegmentRange = nextSegmentEnd - nextSegmentStart;
                              
                              if (currentPoint >= nextSegmentEnd) {
                                return <div className="h-full w-full bg-orange-400" />;
                              } else {
                                // ถ้า user point < 1000 ให้คำนวณ progress
                                // คูณด้วย 2 เพราะ div นี้กว้างแค่ w-1/2 (50%) ของ progress bar ทั้งหมด
                                const progressPercent = ((currentPoint - nextSegmentStart) / nextSegmentRange) * 100 * 2;
                                return (
                                  <div
                                    className="h-full bg-orange-400"
                                    style={{
                                      width: `${Math.min(progressPercent, 100)}%`,
                                    }}
                                  />
                                );
                              }
                            })()
                          ) : (
                            // ถ้า user point < 500 ครึ่งหลังยังไม่แสดง
                            null
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : isLast ? (
                  // Index สุดท้าย: แสดง progress bar แบบเต็ม (ไม่แบ่งครึ่ง)
                  <div className="w-full mb-2">
                    <div className="h-2 w-full absolute top-[50%] left-0 translate-y-[-50%] bg-gray-200 rounded-r-full overflow-hidden">
                      {(() => {
                        // เช็คว่า currentPoint >= segmentStart แล้วค่อยแสดง
                        if (currentPoint >= segment.segmentStart) {
                          if (currentPoint >= segment.segmentEnd) {
                            // ถ้า user point >= segmentEnd ให้แสดง 100%
                            return <div className="h-full w-full bg-orange-400 rounded-r-full" />;
                          } else {
                            // ถ้า user point < segmentEnd ให้คำนวณ progress จาก segmentStart ไป currentPoint
                            const progressPercent = ((currentPoint - segment.segmentStart) / segment.segmentRange) * 100;
                            return (
                              <div
                                className="h-full bg-orange-400 rounded-r-full"
                                style={{
                                  width: `${progressPercent}%`,
                                }}
                              />
                            );
                          }
                        } else {
                          // ถ้า currentPoint < segmentStart ยังไม่แสดง
                          return null;
                        }
                      })()}
                    </div>
                  </div>
                ) : (
                  // Index กลาง: แสดง progress bar แบบแบ่งครึ่ง
                  <div className="w-full mb-2">
                    <div className="h-2 w-full absolute top-[50%] left-0 translate-y-[-50%] bg-gray-200 overflow-hidden">
                      {/* ครึ่งแรก: ต้องเช็คว่า currentPoint >= segmentStart แล้วค่อยคำนวณ progress */}
                      <div className="w-1/2 h-full relative">
                        {(() => {
                          // สำหรับ index 1: ครึ่งแรกคือ 500-1000 (เหมือนกับ index 0 ครึ่งหลัง)
                          // ต้องเริ่มแสดงเมื่อ currentPoint >= segmentStart (500)
                          if (currentPoint >= segment.segmentStart) {
                              // ถ้า user point < segmentEnd ให้คำนวณ progress จาก segmentStart ไป currentPoint
                              // คูณด้วย 2 เพราะ div นี้กว้างแค่ w-1/2 (50%) ของ progress bar ทั้งหมด
                              const progressPercent = ((currentPoint - segment.segmentStart) / segment.segmentRange) * 100;
                              return (
                                <div
                                  className="h-full bg-orange-400"
                                  style={{
                                    width: `${Math.min(progressPercent)}%`,
                                  }}
                                />
                              );
                          } else {
                            // ถ้า currentPoint < segmentStart ยังไม่แสดง
                            return null;
                          }
                        })()}
                      </div>
                      {/* ครึ่งหลัง: segmentEnd ถึง nextReward.point */}
                      {index < sortedRewards.length - 1 && (
                        <div className="w-1/2 h-full absolute top-0 right-0">
                          {currentPoint >= segment.segmentEnd ? (
                            // ถ้า user point >= segmentEnd ให้คำนวณ progress จาก segmentEnd ไป nextReward
                            (() => {
                              const nextReward = sortedRewards[index + 1];
                              const nextSegmentStart = segment.segmentEnd;
                              const nextSegmentEnd = nextReward.point;
                              const nextSegmentRange = nextSegmentEnd - nextSegmentStart;
                              
                              if (currentPoint >= nextSegmentEnd) {
                                // ถ้า user point >= nextSegmentEnd ให้แสดง 100%
                                return <div className="h-full w-full bg-orange-400" />;
                              } else {
                                // ถ้า user point < nextSegmentEnd ให้คำนวณ progress
                                const progressPercent = ((currentPoint - nextSegmentStart) / nextSegmentRange) * 100;
                                return (
                                  <div
                                    className="h-full bg-orange-400"
                                    style={{
                                      width: `${progressPercent}%`,
                                    }}
                                  />
                                );
                              }
                            })()
                          ) : (
                            // ถ้า user point < segmentEnd ครึ่งหลังยังไม่แสดง
                            null
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {isLast ? (
                  <div className="w-full mb-2 flex items-end justify-end z-10">
                    <img
                      src="/images/coin.png"
                      alt="Coin"
                      className="w-5"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-5 h-5 mb-2 text-xs z-10 rounded-full text-white flex items-center justify-center ${
                      hasRedeemed ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  >
                    ✓
                  </div>
                )}
                <button
                  className={`px-2 py-1 border rounded-full text-white text-xs ${
                    hasRedeemed
                      ? 'bg-red-300'
                      : canRedeem
                      ? 'bg-red-600'
                      : 'bg-gray-300'
                  }`}
                  disabled={!canRedeem || hasRedeemed}
                  onClick={() => {
                    if (onRedeem && canRedeem && !hasRedeemed) {
                      onRedeem(reward.id);
                    }
                  }}
                >
                  {hasRedeemed
                    ? `เคยรับแล้ว`
                    : `รับรางวัล ${index + 1}`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
