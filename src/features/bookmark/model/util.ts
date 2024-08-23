import { reissueToken } from '@/entities/auth/api/api';
import {
  addBookmark,
  getBookmarkList,
  removeBookmark,
} from '@/entities/bookmark';
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
    } else {
      //refresh 토큰이 만료되어 재발급이 필요해 로그인 해야되는 경우
      return false;
    }
  } else if (bookmark === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (bookmark === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
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
    } else {
      //refresh 토큰이 만료되어 재발급이 필요해 로그인 해야되는 경우
      return false;
    }
  } else if (bookmark === 400) {
    throw Error('eventId가 존재하지 않습니다.');
  } else if (bookmark === 404) {
    throw Error('해당 유저를 찾을 수 없습니다. ');
  } else {
    //북마크가 삭제가 성공한 경우.
    const { bookmarkList } = bookmark;
    return bookmarkList;
  }
};

export const getBookmarkListHandler = async ({
  userId,
  accessToken,
  refreshToken,
}: Omit<HandleBookmarkRequest, 'eventId'>) => {
  const bookmarkReponse = await getBookmarkList(userId, accessToken);
  if (bookmarkReponse === 404) {
    throw new Error('해당 유저를 찾을 수 없습니다. ');
  } else if (bookmarkReponse === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (newUserToken === 401) {
      return '리프레쉬 토큰이 만료되었습니다. 다시 로그인하세요';
    } else if (!(typeof newUserToken === 'number')) {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        newUserToken;
      setStorageValue('accessToken', JSON.stringify(newAccessToken));
      setStorageValue('refreshToken', JSON.stringify(newRefreshToken));
      //재요청
      const bookmarkResult = await getBookmarkList(userId, newAccessToken);
      return bookmarkResult;
    }
  } else {
    return bookmarkReponse;
  }
};
