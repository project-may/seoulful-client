import React from 'react';
import AlertIcon from '/public/assets/alert-icon.svg';
import LocationIcon from '/public/assets/location-mypage.svg';
import DarkModeIcon from '/public/assets/darkmode-icon.svg';

export const UserOptionStatusBox = () => {
  return (
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
  );
};
