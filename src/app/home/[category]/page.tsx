'use client';
import { usePathname } from 'next/navigation';
import {
  getCategoryTitleFromPathname,
  Header,
  SearchInput,
  ThumbnailItem,
} from '@/shared';
import SortIcon from '/public/assets/sort-icon.svg';
import { getCategorySeqFromPathname } from '@/shared/model/utils';
import { getHomeEvent } from '@/entities/home';
import { useEffect, useState } from 'react';
import { HomeEventDTO } from '@/features/home/model/util';

const CategoryPage = () => {
  const [eventData, setEventData] = useState<HomeEventDTO[]>();
  const pathname = usePathname();
  const title = getCategoryTitleFromPathname(pathname.split('/')[2]);
  const categorySeq = getCategorySeqFromPathname(pathname.split('/')[2]);
  useEffect(() => {
    const fetchData = async () => {
      const getEventData = await getHomeEvent(10, 0, false, categorySeq);
      setEventData(getEventData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header title={title!} isBackButton />
      <div className="px-[30px] pt-[20px]">
        <SearchInput icon placeholder="행사명을 입력하세요." />
        <div className="flex justify-between my-[15px]">
          <p className="text-[11px] text-black-999">
            전체 <strong className="font-semibold">{eventData?.length}</strong>
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
          {eventData?.map((data, i) => (
            <ThumbnailItem key={`data-${i}`} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
