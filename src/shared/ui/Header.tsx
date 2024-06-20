'use client';
import { useRouter } from 'next/navigation';
import BackIcon from '/public/assets/arrow-icon.svg';

export const Header = ({
  title,
  isBackButton,
}: {
  title: string;
  isBackButton?: boolean;
}) => {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <header className="flex items-end justify-center relative pb-[10px] w-full h-[70px] bg-black-FFF border-b boxShadow-header">
      {isBackButton && (
        <button
          type="button"
          aria-label="뒤로가기"
          className="absolute bottom-[11px] left-[30px] w-[25px] h-[25px]"
          onClick={handleBackButton}
        >
          <BackIcon className="rotate-180 stroke-black-777" />
        </button>
      )}
      <h1 className="text-black-555 text-[17px] font-semibold">{title}</h1>
    </header>
  );
};
