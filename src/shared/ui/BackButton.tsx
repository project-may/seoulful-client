'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      className="bg-black-60 hover:text-yellow-10 font-bold w-[40px] h-[40px] rounded-full flex justify-center items-center "
      onClick={handleGoBack}
    >
      <Image src="/assets/back-icon.svg" alt="arrow" width={9} height={16} />
    </button>
  );
};
