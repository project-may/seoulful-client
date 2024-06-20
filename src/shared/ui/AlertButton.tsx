'use client';

import Link from 'next/link';
import AlertIcon from '/public/assets/alert-icon.svg';

export const AlertButton = ({
  link,
  hasAlert,
}: {
  link: string;
  hasAlert?: boolean;
}) => {
  return (
    <Link href={link} aria-label="알림" className="relative">
      <AlertIcon />
      {hasAlert && (
        <div className="absolute top-0 right-0 w-[8px] h-[8px] border-[1.5px] border-black-FFF rounded-full bg-pink-20" />
      )}
    </Link>
  );
};
