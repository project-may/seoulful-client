import type { Dispatch, SetStateAction } from 'react';
import CloseIcon from '/public/assets/close-icon.svg';

export const CloseButton = ({
  setIsClickedCloseBtn,
}: {
  setIsClickedCloseBtn: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => setIsClickedCloseBtn(true);

  return (
    <button
      type="button"
      className="flex justify-center items-center w-[40px] h-[40px] rounded-full border-[2px] border-black-FFF"
      aria-label="닫기"
      onClick={handleClick}
    >
      <CloseIcon className="w-[14px] h-[14px] pointer-events-none" />
    </button>
  );
};
