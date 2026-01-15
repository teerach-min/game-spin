'use client';

import { BASE_CONFIG } from '@/config/base_config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User } from './interface';


export default function LandingPage() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlay = async () => {
    if (!nickname.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_CONFIG.API_BASE_URL}/api/v1/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nickname.trim() }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user: User = await response.json();
            
      // Redirect to home page with user id
      router.push(`/home/${user.id}`);
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex flex-col  max-w-[375px] mx-auto bg-white min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-[16px]">
        <div className="w-full">
          {/* Title Section */}
          <div className="mb-5">
            <h1 className="text-[32px] font-[500]">
              Nextzy Test (Full Stack)
            </h1>
            <p className="text-sm text-gray-400">
              เกมสะสมคะแนน
            </p>
          </div>

          {/* Nickname Input Section */}
          <div className="mb-6 sm:mb-8">
            <label
              className="text-sm text-gray-400"
            >
              ชื่อสำหรับเล่น (Nickname)
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && nickname.trim() && !isLoading) {
                  handlePlay();
                }
              }}
              placeholder="Name"
              disabled={isLoading}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button Section */}
      <div className="h-[100px] rounded-lg p-[16px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.04)]">
        <button
          onClick={handlePlay}
          disabled={!nickname.trim() || isLoading}
          className="w-full rounded-full p-[16px] bg-yellow-400 text-white text-sm font-[500] cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าเล่น'}
        </button>
      </div>
    </div>
    </div>
  );
}
