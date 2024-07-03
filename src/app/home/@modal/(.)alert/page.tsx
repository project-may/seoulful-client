'use client';
import { usePathname } from 'next/navigation';
import { THUMBNAIL_CONSTANT } from '@/features/Thumbnail';
import {
  getCategoryTitleFromPathname,
  Header,
  SearchInput,
  ThumbnailItem,
} from '@/shared';
import SortIcon from '/public/assets/sort-icon.svg';

const CategoryPage = () => {
  const pathname = usePathname();

  const title = getCategoryTitleFromPathname(pathname.split('/')[2]);

  return (
    <div>
      <Header title={title!} isBackButton />
      <div className="px-[30px] pt-[20px]">
        <SearchInput icon placeholder="행사명을 입력하세요." />
        <div className="flex justify-between my-[15px]">
          <p className="text-[11px] text-black-999">
            전체{' '}
            <strong className="font-semibold">
              {THUMBNAIL_CONSTANT.length}
            </strong>
            개
          </p>
          <button type="button" className="flex items-center">
            <SortIcon />
            <span className="ml-[3px] text-[11px] text-black-777">
              오름차순
            </span>
          </button>
        </div>
        <ul className="flex flex-wrap gap-[15px]">
          {THUMBNAIL_CONSTANT.map((data, i) => (
            <ThumbnailItem key={`data-${i}`} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
