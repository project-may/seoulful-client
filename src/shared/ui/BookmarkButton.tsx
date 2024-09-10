'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import { ModalComponent, type BookmarkButtonPropsType } from '../index';
import { useModal } from '../model/hooks/useModal';
import { addBookmarkHandler, removeBookmarkHandler } from '@/features/bookmark';
import { useParams } from 'next/navigation';
import { getBookmarkListHandler } from '@/features/bookmark/model/util';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/features/auth/model/store';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { id: eventId } = useParams();
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();
  const userData = useAtomValue(userAtom);

  //event/:id 로 이동해야함.
  useEffect(() => {
    if (userData) {
      const { accessToken, userId, refreshToken } = userData;
      const fetchData = async () => {
        //북마크 리스트랑 로컬스토리지랑 맞는지 검증하는 로직이 필요.
        const bookmarkList = await getBookmarkListHandler({
          userId,
          accessToken,
          refreshToken,
        });
        if (Array.isArray(bookmarkList)) {
          const checkBookmark = bookmarkList.some(
            (bookmark) => bookmark.eventId === Number(eventId)
          );
          if (checkBookmark) {
            setIsBookmarked(checkBookmark);
          }
        }
      };
      fetchData();
    }
  }, []);

  const bookmarkHandler = async () => {
    if (userData) {
      const { userId, accessToken, refreshToken } = userData;
      try {
        if (!isBookmarked) {
          const bookmarkResult = await addBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });

          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(bookmarkResult);
          } else {
            setIsBookmarked((prev) => !prev);
          }
        } else if (isBookmarked && userData) {
          const bookmarkResult = await removeBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });
          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(bookmarkResult);
          } else {
            setIsBookmarked((prev) => !prev);
          }
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        className={`flex justify-center items-center ${buttonSize ?? 'w-[32px] h-[32px]'} bg-black-60 rounded-full ${hasBorder ? 'border-[1.5px] border-black-FFF' : ''}`}
        onClick={bookmarkHandler}
        whileTap={{ scale: 0.8 }}
      >
        <BookmarkIcon
          className={`${iconSize ?? 'w-[16px] h-[16px]'} ${isBookmarked ? 'fill-yellow-10' : 'fill-black-FFF'} pointer-events-none`}
        />
      </motion.button>
      {showModal && portalElement && (
        <ModalComponent
          link="auth"
          setShowModal={setShowModal}
          isUserLoggedIn={isUserLoggedIn}
          portalElement={portalElement}
        />
      )}
    </>
  );
};
