import { Header } from '@/shared';
import React from 'react';
import { GNB } from '@/features/GNB';
import { UserImageBox, UserOptionStatusBox } from '@/features/mypage';

const Mypage = () => {
  return (
    <div>
      <Header title={'마이페이지'} isBackButton={true} />
      <div>
        <div className="flex flex-col items-center bg-white ">
          <UserImageBox />
          <UserOptionStatusBox />
        </div>
        <div className="absolute bottom-4 right-6">
          <GNB />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
