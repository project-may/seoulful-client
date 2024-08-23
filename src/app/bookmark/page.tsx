'use client';
import type { BookmarkEvent } from '@/entities/bookmark';
import { getBookmarkListHandler } from '@/features/bookmark/model/util';
import {
  getStorageValue,
  Header,
  ModalComponent,
  ThumbnailItem,
} from '@/shared';
import { useModal } from '@/shared/model/hooks/useModal';
import { useEffect, useState } from 'react';

const BookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState<BookmarkEvent[]>([]);
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = getStorageValue('user');
    const accessToken = getStorageValue('accessToken');
    const refreshToken = getStorageValue('refreshToken');

    if (user && accessToken && refreshToken) {
      const userObject = JSON.parse(user);
      const userId: string = userObject.userId;

      const fetchData = async () => {
        const data = await getBookmarkListHandler({
          userId,
          accessToken,
          refreshToken,
        });
        if (typeof data === 'number') {
          return '유저정보가 없거나, 토큰의 유효기간이 종료되었습니다.';
        } else if (typeof data === 'string') {
          setShowModal(true);
        } else if (data) {
          setBookmarkData(data);
        }
      };
      fetchData();
    } else {
      setShowModal(true);
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
      {portalElement && showModal && (
        <ModalComponent
          link="auth"
          isUserLoggedIn={isUserLoggedIn}
          portalElement={portalElement}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default BookmarkPage;
