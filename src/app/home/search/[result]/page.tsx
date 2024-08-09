'use client';
import { useSearchParams } from 'next/navigation';
import { Header, SearchInput, ThumbnailItem } from '@/shared';
import SortIcon from '/public/assets/sort-icon.svg';
import { useRef, useState, useCallback } from 'react';
import type { HomeEventType } from '@/features/home/model/types';
import { useObserver } from '@/features/home/model/hook/useObserver';
import { getSearchResult } from '@/entities/home/model/api';

const CategoryPage = () => {
  const [eventData, setEventData] = useState<HomeEventType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);

  const eventName = useSearchParams().get('eventName') || '';
  const startDate = useSearchParams().get('startDate') || undefined;
  const endDate = useSearchParams().get('endDate') || undefined;
  const categorySeq = Number(useSearchParams().get('categorySeq'));
  const guSeq = Number(useSearchParams().get('guSeq'));

  const fetchData = async (offset: number) => {
    setIsLoading(true);
    const { data, totalCount: count } = await getSearchResult(
      10,
      offset,
      eventName,
      startDate,
      endDate,
      categorySeq,
      guSeq
    );
    if (data.length < 10) {
      setHasMoreData(false);
    }
    if (offset === 0) {
      setTotalCount(count);
    }
    setEventData((prevData) => [...prevData, ...data]);
    setIsLoading(false);
  };

  const onIntersect = useCallback<IntersectionObserverCallback>(
    async (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMoreData) {
        await fetchData(pageOffset);
        setPageOffset((prevOffset) => prevOffset + 10);
        observer.unobserve(entry.target);
      }
    },
    [pageOffset, hasMoreData]
  );

  useObserver({
    target: bottom,
    callback: onIntersect,
  });

  return (
    <div>
      <Header title={'검색결과'} isBackButton />
      <div className="px-[30px] pt-[20px]">
        <SearchInput isHome={true} icon placeholder="행사명을 입력하세요." />
        <div className="flex justify-between my-[15px]">
          <p className="text-[11px] text-black-999">
            전체 <strong className="font-semibold">{totalCount}</strong>개
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
        <div className="h-1" id="bottom" ref={bottom}></div>
        {isLoading && (
          <div className="text-center mt-4 text-gray-500">로딩 중...</div>
        )}
        {!hasMoreData && !isLoading && (
          <div className="text-center mt-4 text-gray-500">
            더 이상 불러올 데이터가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
