import { getRandomEvent } from '@/entities/home';
import { CategoryList } from '@/features/Category';
import { GNB } from '@/features/GNB';
import { LoginStatusBox } from '@/features/home';
import { AlertButton, SearchInput, ThumbnailList } from '@/shared';
import Link from 'next/link';

const HomePage = async () => {
  const eventData = await getRandomEvent();

  return (
    <div className="relative flex flex-col gap-y-[20px] p-[30px] overflow-y-scroll">
      <div className="flex justify-between items-start">
        <LoginStatusBox />
        <AlertButton link="/home/alert" hasAlert />
      </div>
      <div className="flex justify-between items-center gap-x-[10px]">
        <SearchInput icon placeholder="행사명을 입력하세요" />
        <Link
          href="/home/advanced-search"
          className="text-[14px] text-black-777 font-medium whitespace-nowrap"
        >
          상세검색
        </Link>
      </div>
      <CategoryList />
      <ThumbnailList />
      <GNB />
    </div>
  );
};

export default HomePage;
