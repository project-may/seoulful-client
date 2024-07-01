'use client';
import React from 'react';
import LocationIcon from '/public/assets/location-icon.svg';
import { useAtom } from 'jotai';
import { locationAtom } from '../model/store';

export const LocationBox = () => {
  const [address] = useAtom(locationAtom);
  return (
    <div className="flex justify-center items-center mt-[10px] ml-[80px] absolute z-30 bg-white">
      <div className="w-[190px] h-[40px] shadow-dialog rounded">
        <div className="text-black-999 text-[10px] text-center">현재위치</div>
        <div className="flex items-center justify-center">
          <LocationIcon className="w-[16px] h-[16px]" />
          <div className="text-black-50 whitespace-nowrap text-[13px] text-center font-semibold">
            {address.address}
          </div>
        </div>
      </div>
    </div>
  );
};
