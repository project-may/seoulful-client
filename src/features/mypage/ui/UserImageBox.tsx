import React from 'react';
import Image from 'next/image';

export const UserImageBox = () => {
  return (
    <div className="relative w-full h-[300px]">
      <Image
        src="/assets/kakao-logo.png"
        alt="background"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 
        (max-width: 1200px) 50vw, 
        33vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <Image
          src="/assets/kakao-logo.png"
          alt="profile"
          width={80}
          height={80}
          className="rounded-full border-4 border-white"
        />
        <h2 className="text-xl font-bold mt-2">
          유저 닉네임 / 수정 기능 개발 예정
        </h2>
        <p className="text-sm mt-2">
          본인 설명 적을 수 있는 칸으로 만들던가 빼던가 해야될듯
        </p>
      </div>
    </div>
  );
};
