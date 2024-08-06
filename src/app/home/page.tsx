import { getHomeEvent } from '@/entities/home';
import { CategoryList } from '@/features/Category';
import { GNB } from '@/features/GNB';
import { LoginStatusBox, ThumbnailList } from '@/features/home';
import { AlertButton, SearchInput } from '@/shared';
import Link from 'next/link';

const HomePage = async () => {
  const recommendData = await getHomeEvent(true);
  const musicalData = await getHomeEvent(false, 2);

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
      <ThumbnailList
        title="뮤지컬/오페라"
        url="/home/musical-opera"
        data={musicalData}
      />
      <ThumbnailList title="추천행사" url="#" data={recommendData} />
      <GNB />
    </div>
  );
};

export default HomePage;
