'use client';
import React from 'react';
import Image from 'next/image';
import { ProviderTypes } from '../model/types';
import { loginUser } from '@/entities/auth/api/api';

export const LoginButton = ({ provider }: ProviderTypes) => {
  return (
    <>
      {provider === 'naver' ? (
        <button className="w-[230px] h-[61px] rounded-[12px] text-[20px] flex items-center bg-[#02C759] text-white mb-4">
          <Image
            className="ml-4 mr-6"
            src={`/assets/naver-logo.png`}
            alt={`${provider} login`}
            width={34}
            height={70}
            style={{ width: 'auto', height: 'auto' }}
            onClick={() => {
              loginUser({ provider });
            }}
          />
          네이버 로그인
        </button>
      ) : (
        <button className="w-[230px] h-[61px] rounded-[12px] text-[20px] flex items-center bg-[#FEE500]">
          <Image
            className="ml-6 mr-8"
            src={`/assets/kakao-logo.png`}
            alt={`${provider} login`}
            width={30}
            height={76}
            style={{ width: 'auto', height: 'auto' }}
            onClick={() => {
              loginUser({ provider });
            }}
          />
          카카오 로그인
        </button>
      )}
    </>
  );
};
