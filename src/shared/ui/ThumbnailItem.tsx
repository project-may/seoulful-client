import Image from 'next/image';
import Link from 'next/link';
import { BookmarkButton } from '../index';
import { HomeEventDTO } from '@/features/home/model/util';

export const ThumbnailItem = ({
  data,
  page,
}: {
  data: HomeEventDTO;
  page?: string;
}) => {
  return (
    <li className="flex-shrink-0 list-none w-[calc(50%-7.5px)]">
      <div className="relative">
        <Link href={`event/${data.eventId}`}>
          <Image
            src={data.mainImg}
            className="w-full h-auto rounded-[7px]"
            width={100}
            height={100}
            alt={data.eventName}
          />
          <div className="flex flex-col mt-[8px]">
            <p className="font-semibold text-black-555 text-[13px]">
              {data.eventName}
            </p>
            <span className="mt-[-3px] text-black-999 text-[10px]">
              {data.period}
            </span>
          </div>
        </Link>
        {page === 'favorite' && <BookmarkButton hasBorder />}
      </div>
    </li>
  );
};
