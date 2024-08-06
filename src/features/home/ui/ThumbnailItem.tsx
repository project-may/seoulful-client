import Image from 'next/image';
import Link from 'next/link';
import { BookmarkButton, type ThumbnailItemType } from '../../../shared/index';

export const ThumbnailItem = ({
  data,
  page,
}: {
  data: ThumbnailItemType;
  page?: string;
}) => {
  return (
    <li className="flex-shrink-0 list-none w-[calc(50%-7.5px)]">
      <div className="relative">
        <Link href={data.url}>
          <Image
            src={data.image}
            className="w-full h-auto rounded-[7px]"
            priority
            alt={data.title}
          />
          <div className="flex flex-col mt-[8px]">
            <p className="font-semibold text-black-555 text-[13px]">
              {data.title}
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
