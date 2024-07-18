import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-[#30618C]/50 to-[#BF5E70]/70 h-screen flex flex-col">
      <div className="mt-[165px] ml-[235px]">
        <Image
          src="/assets/seoulful-logo.png"
          alt="seoulful logo"
          width={91}
          height={13}
          className=""
        ></Image>
      </div>
      <div className="ml-[30px] mt-[235px] text-white  ">
        <div className="text-inherit text-[25px]">간편하게</div>
        <div className="text-inherit text-[25px]">
          <strong className="text-inherit">소셜로그인</strong>으로
        </div>
        <div className="text-inherit text-[25px]">시작해볼까요?</div>
      </div>
      <div className="flex mt-[34px] justify-center gap-20">
        <Image
          src="/assets/naver-logo.png"
          alt="google logo"
          width={66}
          height={66}
          className="mr-[10px]"
        ></Image>
        <Image
          src="/assets/kakao-logo.png"
          alt="google logo"
          width={66}
          height={66}
          className="mr-[10px]"
        ></Image>
      </div>
    </div>
  );
}
