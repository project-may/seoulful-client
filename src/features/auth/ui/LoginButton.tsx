'use client';
import React from 'react';
import Image from 'next/image';
import { ProviderTypes } from '../model/types';
import { loginUser } from '@/entities/auth/api/api';

export const LoginButton = ({ provider }: ProviderTypes) => {
  return (
    <>
      {provider === 'naver' ? (
        <Image
          className="mt-20 mb-4 cursor-pointer"
          src={`/assets/${provider}-logo.png`}
          alt={`${provider} login`}
          width={230}
          height={76}
          onClick={() => {
            loginUser({ provider });
          }}
        />
      ) : (
        <button className="w-[230px] h-[61px] rounded-[12px] text-[20px] flex items-center bg-[#FEE500]">
          <Image
            className="ml-4 mr-8"
            src={`/assets/kakao-logo.png`}
            alt={`${provider} login`}
            width={30}
            height={76}
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
