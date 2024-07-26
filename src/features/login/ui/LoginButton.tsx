import React from 'react';
import Image from 'next/image';

export const LoginButton = ({
  loginType,
}: {
  loginType: 'naver' | 'kakao';
}) => {
  return (
    <Image
      src={`/assets/${loginType}-logo.png`}
      alt={`${loginType} logo`}
      width={66}
      height={66}
      className="mr-[10px]"
    ></Image>
  );
};
