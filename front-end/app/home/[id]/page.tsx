'use client';

import { BASE_CONFIG } from '@/config/base_config';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  PaginatedRewardHistoryResponse, 
  PaginatedRedeemRewardHistoryResponse,
  Reward, 
  RewardHistory, 
  RedeemRewardHistory,
  UserProfile 
} from './interface';
import { formatCurrency } from '@/helpers/string';
import ProgressBar from './ProgressBar';

export default function HomePage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;
  const [activeTab, setActiveTab] = useState('global');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // History states
  const [historyData, setHistoryData] = useState<RewardHistory[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle redeem reward
  const handleRedeemReward = async (rewardId: string) => {
    if (!userId) {
      console.log('ไม่พบข้อมูลผู้ใช้');
      return;
    }

    try {
      const response = await fetch(
        `${BASE_CONFIG.API_BASE_URL}/api/v1/rewards/${rewardId}/redeem`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'ไม่สามารถรับรางวัลได้');
      }

      // Refresh user data to update points and redeem status
      const userResponse = await fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/users/${userId}`);
      if (userResponse.ok) {
        const updatedUser = await userResponse.json();
        setUser(updatedUser);
      }

      console.log('รับรางวัลสำเร็จ!');
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'เกิดข้อผิดพลาดในการรับรางวัล');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        const [userResponse, rewardsResponse] = await Promise.all([
          fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/users/${userId}`),
          fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/rewards`),
        ]);

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user');
        }

        if (!rewardsResponse.ok) {
          throw new Error('Failed to fetch rewards');
        }

        const userData: UserProfile = await userResponse.json();
        const rewardsData: Reward[] = await rewardsResponse.json();

        setUser(userData);
        setRewards(rewardsData);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Fetch history data
  const fetchHistory = useCallback(async (page: number, reset: boolean = false) => {
    setIsLoadingHistory(true);
    try {
      let url: string;
      if (activeTab === 'global') {
        // ประวัติทั่วโลก: GET /api/v1/rewards/histories
        url = `${BASE_CONFIG.API_BASE_URL}/api/v1/rewards/histories?page=${page}&limit=20`;
      } else if (activeTab === 'my') {
        // ประวัติของฉัน: GET /api/v1/rewards/histories/:userId
        url = `${BASE_CONFIG.API_BASE_URL}/api/v1/rewards/histories/${userId}?page=${page}&limit=20`;
      } else if (activeTab === 'rewards') {
        // ประวัติการรับรางวัล: GET /api/v1/rewards/:userId/redeem-history
        url = `${BASE_CONFIG.API_BASE_URL}/api/v1/rewards/${userId}/redeem-history?page=${page}&limit=20`;
      } else {
        setIsLoadingHistory(false);
        return;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch history');
      }

      if (activeTab === 'rewards') {
        const data: PaginatedRedeemRewardHistoryResponse = await response.json();
        
        if (reset) {
          setHistoryData(data.data as any);
        } else {
          setHistoryData((prev) => [...prev, ...(data.data as any)]);
        }
        
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
        setHasMore(data.page < data.totalPages);
      } else {
        const data: PaginatedRewardHistoryResponse = await response.json();
        
        if (reset) {
          setHistoryData(data.data);
        } else {
          setHistoryData((prev) => [...prev, ...data.data]);
        }
        
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
        setHasMore(data.page < data.totalPages);
      }
    } catch (err) {
      console.error('Fetch history error:', err);
      setError('เกิดข้อผิดพลาดในการโหลดประวัติ');
    } finally {
      setIsLoadingHistory(false);
    }
  }, [activeTab, userId]);

  // Reset and fetch when tab changes
  useEffect(() => {
    if (activeTab === 'global' || activeTab === 'my' || activeTab === 'rewards') {
      setHistoryData([]);
      setCurrentPage(1);
      setTotalPages(1);
      setHasMore(true);
      setIsLoadingHistory(false);
      fetchHistory(1, true);
    }
  }, [activeTab, fetchHistory]);

  // Handle scroll for infinite scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || (activeTab !== 'global' && activeTab !== 'my' && activeTab !== 'rewards')) return;

    const handleScroll = () => {
      if (isLoadingHistory || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;

      if (isNearBottom && currentPage < totalPages) {
        fetchHistory(currentPage + 1, false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isLoadingHistory, hasMore, currentPage, totalPages, activeTab, fetchHistory]);

  const handlePlayGame = () => {
    router.push(`/game-spin/${userId}`);
  };

  return (
    <div className="max-h-screen">
      <div className="container max-w-[375px] mx-auto">
        {/* Top Card Section - Score Summary */}
        <div className="p-4 mb-4 border bg-gray-300">
          {/* Top Bar */}
          <div className="bg-white p-[16px] rounded-lg border border-solid border-black">
            <div className="relative">
                <div className="px-2 py-1  bg-red-700 text-white absolute top-0 left-[-17px] rounded-r-full text-xs">
                แชร์คะแนน
                </div>
            </div>
            <div className="mb-4 relative text-right" >
                <h2 className="text-sm font-bold">สะสมคะแนน</h2>
                <div className="w-[60px]"></div>
                {/* Goal Text */}
                <p className="mb-2 text-sm">
                    คะแนนครบ 10,000 รับของขวัญ 1 รายการ
                </p>
                {/* Score Display */}
                <div className="mb-4 text-[24px] font-bold text-red-500">
                    <h1>
                    {isLoading ? (
                      'กำลังโหลด...'
                    ) : user ? (
                      `${formatCurrency(user.point)}/10,000`
                    ) : (
                      '0/10,000'
                    )}
                    </h1>
                </div>
            </div>



          {/* Progress Bar with Milestones */}
          <ProgressBar 
            rewards={rewards} 
            user={user} 
            isLoading={isLoading}
            onRedeem={handleRedeemReward}
          />
        </div>

        </div>

        {/* Tab Navigation Section */}
        <div className="flex gap-2 px-2 pb-2 border-b border-gray-100">
          <button
            onClick={() => setActiveTab('global')}
            className={`flex-1 px-1 py-2 border rounded-full text-xs ${
              activeTab === 'global'
                ? 'border-red-600 text-red-600'
                : 'border-gray-500 text-gray-500'
            }`}
          >
            ประวัติทั่วโลก
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`flex-1 px-1 py-2 border rounded-full text-xs ${
              activeTab === 'my'
                ? 'border-red-600 text-red-600'
                : 'border-gray-500 text-gray-500'
            }`}
          >
            ประวัติของฉัน
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`flex-1 px-1 py-2 border rounded-full text-xs ${
              activeTab === 'rewards'
                ? 'border-red-600 text-red-600'
                : 'border-gray-500 text-gray-500'
            }`}
          >
            ประวัติรางวัลของฉัน
          </button>
        </div>

        {/* Game History List Section */}
        <div 
          ref={scrollContainerRef}
          className="px-4 overflow-y-auto h-[49vh]"
        >
          {activeTab === 'global' || activeTab === 'my' ? (
            <>
              {historyData.length === 0 && isLoadingHistory ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  กำลังโหลด...
                </div>
              ) : historyData.length === 0 && !isLoadingHistory ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  ไม่มีข้อมูลประวัติ
                </div>
              ) : (
                <>
                  {historyData.map((item) => {
                    const date = new Date(item.createdAt);
                    const formattedDate = date.toLocaleDateString('th-TH', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    });
                    const formattedTime = date.toLocaleTimeString('th-TH', {
                      hour: '2-digit',
                      minute: '2-digit',
                    });
                    
                    const rewardPoint = item.rewardPoint || 0;

                    return (
                      <div key={item.id} className="flex items-center gap-3 py-3 border-b">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                          {item.userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 text-sm font-bold">
                            {item.userName || '-'}
                          </div>
                          <div className="text-xs text-gray-400">
                            รางวัล: {formatCurrency(rewardPoint)} | เล่นเมื่อ {formattedDate} {formattedTime} น.
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {isLoadingHistory && historyData.length > 0 && (
                    <div className="text-center py-4 text-gray-400 text-sm">
                      กำลังโหลด...
                    </div>
                  )}
                  

                </>
              )}
            </>
          ) : activeTab === 'rewards' ? (
            <>
              {historyData.length === 0 && isLoadingHistory ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  กำลังโหลด...
                </div>
              ) : historyData.length === 0 && !isLoadingHistory ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  ไม่มีข้อมูลประวัติการรับรางวัล
                </div>
              ) : (
                <>
                  {historyData.map((item: any) => {
                    const date = new Date(item.createdAt);
                    const formattedDate = date.toLocaleDateString('th-TH', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    });
                    const formattedTime = date.toLocaleTimeString('th-TH', {
                      hour: '2-digit',
                      minute: '2-digit',
                    });

                    return (
                      <div key={item.id} className="flex items-center gap-3 py-3 border-b">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                          {item.userName?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 text-sm font-bold">
                            {item.rewardName || '-'}
                          </div>
                          <div className="text-xs text-gray-400">
                            รับเมื่อ {formattedDate} {formattedTime} น.
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {isLoadingHistory && historyData.length > 0 && (
                    <div className="text-center py-4 text-gray-400 text-sm">
                      กำลังโหลด...
                    </div>
                  )}
                </>
              )}
            </>
          ) : null}
        </div>

        {/* Bottom Floating Action Button */}
        <div className="bg-white w-full p-4 rounded-lg p-[16px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.04)]">
          <button 
          onClick={handlePlayGame}
          className="w-full rounded-full p-[16px] bg-yellow-400 text-white text-sm font-[500] cursor-pointer"
          >
            ไปเล่นเกม
          </button>
        </div>
      </div>
    </div>
  );
}
