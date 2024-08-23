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

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState<UserTokenType | null>(null);
  const { id: eventId } = useParams();
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user) as UserTokenType;
      setUserData(userObject);
      setIsClicked((prev) =>
        userObject.bookmarkList.includes(Number(eventId)) ? !prev : prev
      );
      console.log(userObject.bookmarkList.includes(Number(eventId)), 'result');
      console.log(isClicked);
      console.log(eventId, 'eventId');
    }
  }, []);

  const bookmarkHandler = async () => {
    if (userData) {
      const { userId, bookmarkList } = userData;
      try {
        let updatedBookmarkList = [...(bookmarkList || [])];
        const accessToken = getStorageValue('accessToken');
        const refreshToken = getStorageValue('refreshToken');
        if (!isClicked && accessToken && refreshToken) {
          const bookmarkResult = await addBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });
          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(true);
          }
        } else if (isClicked && accessToken && refreshToken) {
          const bookmarkResult = await removeBookmarkHandler({
            userId,
            accessToken,
            eventId: Number(eventId),
            refreshToken,
          });
          if (typeof bookmarkResult === 'boolean') {
            return setShowModal(true);
          }
          updatedBookmarkList = updatedBookmarkList.filter(
            (id) => id !== Number(eventId)
          );
        }

        const updatedUserData = {
          ...userData,
          bookmarkList: updatedBookmarkList,
        };

        setUserData(updatedUserData);
        setIsClicked((prev) => !prev);
      } catch (err) {
        console.error(err);
      }
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
          className={`${iconSize ?? 'w-[16px] h-[16px]'} ${isClicked ? 'fill-yellow-10' : 'fill-black-FFF'} pointer-events-none`}
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
