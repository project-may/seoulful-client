'use client';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import { ModalComponent, type BookmarkButtonPropsType } from '../index';
import { useModal } from '../model/hooks/useModal';
import { addBookmarkHandler, removeBookmarkHandler } from '@/features/bookmark';
import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { userAtom } from '@/features/auth/model/store';
import { useBookmarkCheck } from '@/features/bookmark/model/hooks/useBookmarkCheck';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const { id } = useParams();
  const { isBookmarked, setIsBookmarked } = useBookmarkCheck({
    eventId: id as string,
  });
  const { id: eventId } = useParams();
  const { isUserLoggedIn, portalElement, setShowModal, showModal } = useModal();
  const [userData, setUserData] = useAtom(userAtom);

  const bookmarkHandler = async () => {
    if (!(userData.accessToken.length === 0)) {
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
            setShowModal(bookmarkResult);
          } else {
            setIsBookmarked(true);

            const updatedBookmarkList = [...bookmarkResult.bookmarkList];
            setUserData({
              ...userData,
              bookmarkList: updatedBookmarkList,
            });
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
            setIsBookmarked(false);

            const updatedBookmarkList = [...bookmarkResult.bookmarkList];
            setUserData({
              ...userData,
              bookmarkList: updatedBookmarkList,
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(showModal, 'show');
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
