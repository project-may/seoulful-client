import Image from 'next/image';
import LoginBackground from '/public/assets/login-background.png';
import { LoginButton } from '@/features/auth';

export default function LoginPage() {
  return (
    <div className="relative h-screen flex flex-col bg-gradient-to-b from-[#30618C]/50 to-[#BF5E70]/70 ">
      <div className="absolute inset-0">
        <Image
          src={LoginBackground}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#30618C]/50 to-[#BF5E70]/70"></div>
      </div>
      <div className="mt-[165px] ml-[235px] z-10">
        <Image
          src="/assets/seoulful-logo.png"
          alt="seoulful logo"
          width={91}
          height={13}
          className=""
        ></Image>
      </div>
      <div className="ml-[30px] mt-[235px] text-white z-10">
        <div className="text-inherit text-[25px]">간편하게</div>
        <div className="text-inherit text-[25px]">
          <strong className="text-inherit">소셜로그인</strong>으로
        </div>
        <div className="text-inherit text-[25px]">시작해볼까요?</div>
      </div>
      <div className="flex mt-[34px] justify-center gap-20 z-10">
        <LoginButton provider={'naver'} />
        <LoginButton provider={'kakao'} />
      </div>
    </div>
  );
}
