'use client';
import React from 'react';
import Image from 'next/image';
import { ProviderTypes } from '../model/types';
import { loginUser } from '@/entities/auth/api/api';

export const LoginButton = ({ provider }: ProviderTypes) => {
  return (
    <Image
      src={`/assets/${provider}-logo.png`}
      alt={`${provider} logo`}
      width={66}
      height={66}
      className="mr-[10px]"
      onClick={() => {
        loginUser({ provider });
      }}
    ></Image>
  );
};
