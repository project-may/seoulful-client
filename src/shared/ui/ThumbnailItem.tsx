import Image from 'next/image';
import Link from 'next/link';
import { BookmarkButton } from '../index';
import type { HomeEventType } from '@/features/home/model/types';

export const ThumbnailItem = ({
  data,
  page,
}: {
  data: HomeEventType;
  page?: string;
}) => {
  return (
    <li className="flex-shrink-0 list-none w-[calc(50%-7.5px)]">
      <div className="relative">
        <Link href={`/event/${data.eventId}`}>
          <div className="relative w-[150px] h-[220px]">
            <Image
              src={data.mainImg}
              className="w-full h-full rounded-[7px] object-cover"
              fill
              sizes="(min-width: 150px) 50vw, 100vw"
              alt={data.eventName}
              priority
            />
          </div>
        </Link>
        <div className="flex flex-col mt-[8px]">
          <p className="font-semibold text-black-555 text-[13px]">
            {data.eventName}
          </p>
          <span className="mt-[-3px] text-black-999 text-[10px]">
            {data.period}
          </span>
        </div>
        {page === 'bookmark' && <BookmarkButton hasBorder />}
      </div>
    </li>
  );
};
