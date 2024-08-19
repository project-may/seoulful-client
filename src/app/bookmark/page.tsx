'use client';
import { getBookmarkList, type BookmarkEvent } from '@/entities/bookmark';
import { Header, ThumbnailItem } from '@/shared';
import { useEffect, useState } from 'react';

const BookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState<BookmarkEvent[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user);
      const userId = userObject.userId;
      const token = userObject.accessToken;
      const fetchData = async () => {
        const data = await getBookmarkList(userId, token);
        setBookmarkData(data);
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <Header title={'북마크'} isBackButton />
      <div className="px-[30px] pt-[20px]">
        <ul className="flex flex-wrap gap-[15px]">
          {!bookmarkData || bookmarkData.length === 0 ? (
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
