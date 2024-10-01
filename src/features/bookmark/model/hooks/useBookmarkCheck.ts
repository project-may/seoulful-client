import { userAtom } from '@/features/auth/model/store';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { getBookmarkListHandler } from '../util';

export const useBookmarkCheck = ({ eventId }: { eventId: string }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userData = useAtomValue(userAtom);

  useEffect(() => {
    if (userData) {
      const { accessToken, userId, refreshToken } = userData;
      const fetchData = async () => {
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

  return { setIsBookmarked, isBookmarked };
};
