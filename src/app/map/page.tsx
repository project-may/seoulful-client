'use client';
import { GNB } from '@/features/GNB';
import { LocationBox, NaverMap } from '@/features/map';
import { Header } from '@/shared';
import React from 'react';

const mapPage = () => {
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

export default mapPage;
