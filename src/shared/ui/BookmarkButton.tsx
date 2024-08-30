'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import {
  getStorageValue,
  ModalComponent,
  UserTokenType,
  type BookmarkButtonPropsType,
} from '../index';
import { useModal } from '../model/hooks/useModal';
import { addBookmarkHandler, removeBookmarkHandler } from '@/features/bookmark';
import { useParams } from 'next/navigation';
import { getBookmarkListHandler } from '@/features/bookmark/model/util';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userData, setUserData] = useState<UserTokenType | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const { id: eventId } = useParams();
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = getStorageValue('user');
    const getAccessToken = getStorageValue('accessToken');
    const getRefreshToken = getStorageValue('refreshToken');
    if (user && getAccessToken && getRefreshToken) {
      const userObject = JSON.parse(user) as UserTokenType;
      setUserData(userObject);
      setAccessToken(getAccessToken);
      setRefreshToken(getRefreshToken);
      const fetchData = async () => {
        const bookmarkList = await getBookmarkListHandler({
          userId: userObject.userId,
          accessToken: getAccessToken,
          refreshToken: getRefreshToken,
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
      const { userId } = userData;
      try {
        if (!isBookmarked && accessToken && refreshToken) {
          const bookmarkResult = await addBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });
          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(true);
          }
        } else if (isBookmarked && accessToken && refreshToken) {
          const bookmarkResult = await removeBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });
          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(true);
          }
        }
        setIsBookmarked((prev) => !prev);
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
