import CloseIcon from '/public/assets/close-icon.svg';
import Link from 'next/link';

export const CloseButton = () => {
  return (
    <Link
      href={'/home'}
      className="flex justify-center items-center w-[40px] h-[40px] rounded-full border-[2px] border-black-FFF"
      aria-label="닫기"
    >
      <CloseIcon className="w-[14px] h-[14px] pointer-events-none" />
    </Link>
  );
};
