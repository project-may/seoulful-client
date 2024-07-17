import React from 'react';
import LoadingImage from '/public/assets/loading.gif';
import Image from 'next/image';

export const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Image
        src={LoadingImage}
        width={400}
        height={400}
        alt="로딩중입니다."
        className="max-w-full max-h-full"
      />
      <div className="text-white">데이터를 불러오고 있어요!</div>
    </div>
  );
};
