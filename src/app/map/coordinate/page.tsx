'use client';
import { useEventCoordinate } from '@/features/event';
import { GNB } from '@/features/GNB';
import { LocationBox, NaverMap } from '@/features/map';
import { Header } from '@/shared';
import React from 'react';

const CoordinatePage = () => {
  //Props를 내려주는 구조로 수정할 수 있음.
  useEventCoordinate();
  return (
    <div>
      <Header title="내 주위 행사" isBackButton={true} />
      <LocationBox />
      <NaverMap />
      <div className="absolute bottom-4 right-6">
        <GNB />
      </div>
    </div>
  );
};

export default CoordinatePage;
