'use client';

import Link from 'next/link';

export default function HomeError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">오류 발생</h1>
      <p className="text-lg text-gray-700 mb-8">
        로그인에 실패했습니다. 관리자에게 문의하세요.
      </p>
      <button
        className="text-blue-500 underline"
        onClick={() => {
          reset();
          localStorage.removeItem('user');
        }}
      >
        다시 시도하기
      </button>
      <Link className="text-blue-500 underline" href="/home">
        홈페이지로 돌아가기
      </Link>
    </div>
  );
}
