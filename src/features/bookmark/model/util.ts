import { reissueToken } from '@/entities/auth/api/api';
import { addBookmark, removeBookmark } from '@/entities/bookmark';
import { setStorageValue } from '@/shared';
import type { HandleBookmarkRequest } from './types';

export const addBookmarkHandler = async ({
  userId,
  accessToken,
  eventId,
  refreshToken,
}: HandleBookmarkRequest) => {
  const bookmark = await addBookmark(userId, accessToken, eventId);
  //add bookmark에서 토큰이 만료된 경우.
  if (bookmark === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (!(typeof newUserToken === 'number')) {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        newUserToken;
      setStorageValue('accessToken', JSON.stringify(newAccessToken));
      setStorageValue('refreshToken', JSON.stringify(newRefreshToken));
      const bookmarkResult = await addBookmark(userId, newAccessToken, eventId);
      return bookmarkResult;
    }
  } else if (bookmark === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (bookmark === 404) {
    throw Error('유저가 탈퇴했거나, userId 값이 잘못되어 있습니다.');
  } else {
    //북마크가 성공한 경우.
    const { bookmarkList } = bookmark;
    return bookmarkList;
  }
};

export const removeBookmarkHandler = async ({
  userId,
  accessToken,
  eventId,
  refreshToken,
}: HandleBookmarkRequest) => {
  const bookmark = await removeBookmark(userId, accessToken, eventId);
  //remove bookmark에서 토큰이 만료된 경우.
  if (bookmark === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (!(typeof newUserToken === 'number')) {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        newUserToken;
      setStorageValue('accessToken', JSON.stringify(newAccessToken));
      setStorageValue('refreshToken', JSON.stringify(newRefreshToken));
      const bookmarkResult = await addBookmark(userId, newAccessToken, eventId);
      return bookmarkResult;
    }
  } else if (bookmark === 400) {
    throw Error('eventId가 존재하지 않습니다.');
  } else if (bookmark === 404) {
    throw Error('유저가 탈퇴했거나, userId 값이 잘못되어 있습니다. ');
  } else {
    //북마크가 삭제가 성공한 경우.
    const { bookmarkList } = bookmark;
    return bookmarkList;
  }
};
