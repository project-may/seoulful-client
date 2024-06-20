import Link from 'next/link';
import TailArrowIcon from '/public/assets/tail-arrow-icon.svg';

export const DetailPageButton = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="flex justify-center items-center gap-x-[5px] w-[90px] h-[24px] bg-black-60/80 rounded-full"
    >
      <span className="mt-[1px] text-black-FFF text-[11px]">상세페이지</span>
      <TailArrowIcon />
    </Link>
  );
};
