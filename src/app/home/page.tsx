import { CategoryList } from '@/features/Category';
import { GNB } from '@/features/GNB';
import { THUMBNAIL_CONSTANT, ThumbnailList } from '@/features/Thumbnail';
import { AlertButton, SearchInput } from '@/shared';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="relative flex flex-col gap-y-[20px] p-[30px]">
      <div className="flex justify-between items-start">
        <p className="text-black-555 leading-tight">
          날씨가 너무 좋아요, <span className="font-bold text-[20px]">릿!</span>
          <br />
          어디로 갈까요?
        </p>
        <AlertButton link="/home/alert" hasAlert />
      </div>
      <div className="flex justify-between items-center gap-x-[10px]">
        <SearchInput icon placeholder="행사명을 입력하세요" />
        <Link
          href="/home/advanced-search"
          className="text-[14px] text-black-777 font-medium"
        >
          상세검색
        </Link>
      </div>
      <CategoryList />
      <ThumbnailList title="뮤지컬/오페라" url="#" data={THUMBNAIL_CONSTANT} />
      <ThumbnailList title="추천행사" url="#" data={THUMBNAIL_CONSTANT} />
      <GNB />
    </div>
  );
};

export default HomePage;
