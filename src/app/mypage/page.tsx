import { Header } from '@/shared';
import React from 'react';
import Image from 'next/image';
import { GNB } from '@/features/GNB';
import AlertIcon from '/public/assets/alert-icon.svg';
import LocationIcon from '/public/assets/location-mypage.svg';
import DarkModeIcon from '/public/assets/darkmode-icon.svg';

const Mypage = () => {
  return (
    <div>
      <Header title={'마이페이지'} isBackButton={true} />
      <div>
        <div className="flex flex-col items-center bg-white ">
          <div className="relative w-full h-[300px]">
            <Image
              src="/assets/kakao-logo.png"
              alt="background"
              layout="fill"
              objectFit="cover"
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
          <div className="flex flex-col items-start w-full mt-10 pr-[50px] pl-[50px]">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="flex items-center m-2">
                <LocationIcon className="w-[18px] h-[18px] mr-2"></LocationIcon>
                <span> 알림설정</span>
              </span>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <span className="flex items-center m-2">
                <AlertIcon className="w-[18px] h-[18px mr-2"></AlertIcon>
                <span> 위치정보제공 동의</span>
              </span>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <span className="flex items-center m-2">
                <DarkModeIcon className="w-[18px] h-[18px mr-2"></DarkModeIcon>
                <span> 다크모드</span>
              </span>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-6">
          <GNB />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
