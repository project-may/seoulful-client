'use client';
import type { BookmarkEvent } from '@/entities/bookmark';
import { userAtom } from '@/features/auth/model/store';
import { getBookmarkListHandler } from '@/features/bookmark/model/util';
import { Header, ModalComponent, ThumbnailItem } from '@/shared';
import { useModal } from '@/shared/model/hooks/useModal';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

const BookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState<BookmarkEvent[]>([]);
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();
  const userData = useAtomValue(userAtom);

  useEffect(() => {
    if (userData.accessToken.length > 0) {
      const { userId, accessToken, refreshToken } = userData;
      const fetchData = async () => {
        const bookmarkList = await getBookmarkListHandler({
          userId,
          accessToken,
          refreshToken,
        });
        const isBookmarkEvent = Array.isArray(bookmarkList);
        if (
          typeof bookmarkList === 'boolean' ||
          userData.accessToken.length === 0
        ) {
          setShowModal(true);
        } else if (isBookmarkEvent) {
          setBookmarkData(bookmarkList);
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
