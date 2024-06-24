import type { Dispatch, SetStateAction } from 'react';

import { CloseButton } from '@/shared';
import Logo from '/public/assets/logo.svg';

export const FullpageHeader = ({
  setIsClickedCloseBtn,
}: {
  setIsClickedCloseBtn: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1>
        <Logo className="w-[91px] h-[15px]" />
        <span className="text-[15px]">추천행사</span>
      </h1>
      <CloseButton setIsClickedCloseBtn={setIsClickedCloseBtn} />
    </div>
  );
};
