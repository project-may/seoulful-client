import { getHomeEvent } from '@/entities/home';
import { CategoryList } from '@/features/Category';
import { GNB } from '@/features/GNB';
import { LoginStatusBox, ThumbnailList } from '@/features/home';
import { SearchInput } from '@/shared';
import Link from 'next/link';

const HomePage = async () => {
  const { data: recommendData } = await getHomeEvent(2, 0, true);
  const { data: musicalData } = await getHomeEvent(2, 0, false, 5);

  return (
    <div className="relative flex flex-col gap-y-[20px] p-[30px] overflow-y-scroll">
      <div className="flex justify-between items-start">
        <LoginStatusBox />
      </div>
      <div className="flex justify-between items-center gap-x-[10px]">
        <SearchInput isHome={true} icon placeholder="행사명을 입력하세요" />
        <Link
          href="/home/search"
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
