'use client';
import Image from 'next/image';
import LoginBackground from '/public/assets/login-background.png';
import { LoginButton, useLoginCheck } from '@/features/auth';

export default function LoginPage() {
  useLoginCheck();
  return (
    <div className="relative h-screen flex flex-col bg-gradient-to-b from-[#30618C]/50 to-[#BF5E70]/70 ">
      <div className="absolute inset-0">
        <Image
          src={LoginBackground}
          alt="Login Background"
          fill
          quality={100}
          priority
          sizes="(min-width: 360px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#30618C]/50 to-[#BF5E70]/70"></div>
      </div>
      <div className="ml-[30px] mt-[160px] text-white z-10">
        <div className="text-inherit text-[25px]">간편하게</div>
        <div className="text-inherit text-[25px]">
          <strong className="text-inherit">소셜로그인</strong>으로
        </div>
        <div className="text-inherit text-[25px]">시작해볼까요?</div>
      </div>
      <div className="flex flex-col items-center mt-[230px] justify-center z-10">
        <LoginButton provider={'naver'} />
        <LoginButton provider={'kakao'} />
      </div>
    </div>
  );
}
