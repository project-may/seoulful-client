'use client';
import { getBookmarkList, type BookmarkEvent } from '@/entities/bookmark';
import { getStorageValue, Header, ThumbnailItem } from '@/shared';
import { useEffect, useState } from 'react';

const BookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState<BookmarkEvent[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = getStorageValue('user');
    const accessToken = getStorageValue('accessToken');
    if (user) {
      const userObject = JSON.parse(user);
      const userId = userObject.userId;

      const fetchData = async () => {
        const data = await getBookmarkList(userId, accessToken);
        if (typeof data === 'number') {
          return '유저정보가 없거나, 토큰의 유효기간이 종료되었습니다.';
        } else {
          setBookmarkData(data);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <Header title={'북마크'} isBackButton />
      <div className="px-[30px] pt-[20px]">
        <ul className="flex flex-wrap gap-[15px]">
          {!bookmarkData?.length ? (
            <div>북마크한 데이터가 없습니다.</div>
          ) : (
            bookmarkData?.map((data, i) => (
              <ThumbnailItem key={`data-${i}`} data={data} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookmarkPage;
