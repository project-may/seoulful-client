'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import { ModalComponent, type BookmarkButtonPropsType } from '../index';
import type { UserDTO } from '@/features/auth';
import { useAtom } from 'jotai';
import { eventDetailAtom } from '@/features/event/model/store';
import { useModal } from '../model/hooks/useModal';
import { addBookmarkHandler, removeBookmarkHandler } from '@/features/bookmark';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState<UserDTO | null>(null);
  const [{ eventId }] = useAtom(eventDetailAtom);
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user) as UserDTO;
      setUserData(userObject);
      setIsClicked(userObject.bookmarkList?.includes(eventId) ?? false);
    }
  }, [eventId]);

  const handleClick = async () => {
    if (userData) {
      const { userId, accessToken, refreshToken } = userData;
      try {
        let updatedBookmarkList = [...(userData.bookmarkList || [])];

        if (!isClicked) {
          await addBookmarkHandler({
            userId,
            accessToken,
            eventId,
            refreshToken,
          });
        } else {
          await removeBookmarkHandler({
            userId,
            accessToken,
            eventId,
            refreshToken,
          });
          updatedBookmarkList = updatedBookmarkList.filter(
            (id) => id !== eventId
          );
        }

        const updatedUserData = {
          ...userData,
          bookmarkList: updatedBookmarkList,
        };

        setUserData(updatedUserData);
        setIsClicked((prev) => !prev);
        localStorage.setItem('user', JSON.stringify(updatedUserData));
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
        onClick={handleClick}
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
