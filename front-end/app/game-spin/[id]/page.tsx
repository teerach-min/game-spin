'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { BASE_CONFIG } from '@/config/base_config';
import { formatCurrency } from '@/helpers/string';
import { GameSpin, SpinResult, User } from './interface';
import Modal from '@/commons/components/Modal';

const Wheel = dynamic(
  () => import('react-custom-roulette').then((mod) => mod.Wheel),
  { ssr: false }
);

export default function GameSpinPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [gameSpins, setGameSpins] = useState<GameSpin[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinningGame, setIsSpinningGame] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [wonPoint, setWonPoint] = useState<number | null>(null);
  const [pendingSpinResult, setPendingSpinResult] = useState<SpinResult | null>(null);

  // Fetch game spins and user data
  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        const [spinsResponse, userResponse] = await Promise.all([
          fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/game-spins`),
          fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/users/${userId}`),
        ]);

        if (!spinsResponse.ok) {
          throw new Error('Failed to fetch game spins');
        }

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user');
        }

        const spinsData: GameSpin[] = await spinsResponse.json();
        const userData: User = await userResponse.json();

        setGameSpins(spinsData);
        setUser(userData);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Create wheel data from game spins
  const wheelData = gameSpins.map((spin) => ({
    option: formatCurrency(spin.point),
  }));

  const handleSpinClick = async () => {
    if (!mustSpin && !isSpinningGame && userId) {
      setIsSpinningGame(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/game-spins`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Failed to spin');
        }

        const result: SpinResult = await response.json();

        const winningIndex = gameSpins.findIndex((spin) => spin.id === result.spin.id);
        
        if (winningIndex === -1) {
          throw new Error('Winning spin not found');
        }

        setWonPoint(result.spin.point);
        setPendingSpinResult(result);

        setIsSpinning(true);
        setPrizeNumber(winningIndex);
        setMustSpin(true);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการหมุนวงล้อ');
        console.error('Spin error:', err);
        setIsSpinningGame(false);
      }
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setIsSpinning(false);
    setIsSpinningGame(false);

    if (pendingSpinResult) {
      setUser(pendingSpinResult.user);
      setShowResultModal(true);
      setPendingSpinResult(null);
    } else if (wonPoint !== null) {
      setShowResultModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowResultModal(false);
    setWonPoint(null);
  };

  const handleReturnHome = () => {
    if (userId) {
      router.push(`/home/${userId}`);
    } else {
      router.push('/home');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">กำลังโหลด...</div>
        </div>
      </div>
    );
  }

  if (error && !gameSpins.length) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-red-600">{error}</div>
          <button
            onClick={handleReturnHome}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="container max-w-[375px] mx-auto min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-orange-100">
        {/* Top Section - Score Display */}
        <div className="text-center py-4 text-lg font-[500]">
          <div>
            <span>คะแนนสะสม { user ? formatCurrency(user.point) : '0' }/10,000</span>
          </div>
          {error && (
            <div className="text-sm text-red-600 mt-2">{error}</div>
          )}
        </div>

        {/* Middle Section - Spin Wheel Game */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Spin Wheel */}
          <div className="relative w-full flex justify-center mb-6">
            <div className="relative wheel-container transform rotate-[-45deg]">
              {gameSpins.length > 0 ? (
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={wheelData}
                  backgroundColors={['#8B0000']}
                  textColors={['#FFFFFF']}
                  onStopSpinning={handleStopSpinning}
                  outerBorderColor="#000000"
                  outerBorderWidth={4}
                  innerRadius={2}
                  innerBorderColor="#000000"
                  innerBorderWidth={2}
                  radiusLineColor="#000000"
                  radiusLineWidth={2}
                  fontSize={26}
                  textDistance={70}
                />
              ) : (
                <div className="w-64 h-64 rounded-full border-4 border-black bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">ไม่มีข้อมูลวงล้อ</div>
                </div>
              )}
              {/* Center Icon - Coin */}
              <div className="absolute top-1/2 left-1/2 transform rotate-[45deg] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center pointer-events-none z-10">
                <img src="/images/coin.png" alt="coin" className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Action Button - Stop/Spin */}
          <button
            onClick={handleSpinClick}
            disabled={mustSpin || isSpinningGame || !userId}
            className="px-7 py-2 rounded-lg bg-red-600 z-[10] text-white text-sm font-[500] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSpinningGame ? 'กำลังโหลด...' : isSpinning ? 'หยุด' : 'หมุน'}
          </button>
        </div>

        {/* Bottom Section - Navigation */}
        <div 
          className="bg-white w-full p-4 rounded-lg p-[16px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.04)]"
        >
          <button
            onClick={handleReturnHome}
            className="w-full rounded-full p-[16px] bg-yellow-400 text-white text-sm font-[500] cursor-pointer"
          >
            กลับหน้าหลัก
          </button>
        </div>

      </div>

      {/* Result Modal */}
      <Modal
        isOpen={showResultModal}
        onClose={handleCloseModal}
      >
        <div className="text-center py-4">
          <div className="mb-4">
            <div className="text-lg text-gray-600">ได้รับ</div>
          </div>
          {user && (
            <div className="text-sm text-gray-500 mb-4">
               +{wonPoint !== null ? formatCurrency(wonPoint) : '0'} คะแนน
            </div>
          )}
          <button
            onClick={handleCloseModal}
            className="px-20 py-2 bg-yellow-400 rounded-full text-white font-medium transition-colors"
          >
            ตกลง
          </button>
        </div>
      </Modal>
    </div>
  );
}
