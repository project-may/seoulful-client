'use client';
import React from 'react';
import { useHomeCheckUser } from '../model/hook/useHomeCheckUser';

export const LoginStatusBox = () => {
  const { userData } = useHomeCheckUser();
  return (
    <div>
      {userData ? (
        <p className="text-black-555 leading-tight">
          날씨가 너무 좋아요,{' '}
          <span className="font-bold text-[20px]">{userData?.nickname}</span>
          <br />
          어디로 갈까요?
        </p>
      ) : (
        <p className="text-black-555 leading-tight">
          로그인하고 가고싶은{' '}
          <span className="font-bold text-[20px]">서울</span>
          의
          <br /> 행사들을 저장해보세요!
        </p>
      )}
    </div>
  );
};
