import {
  addBookmark,
  getBookmarkList,
  removeBookmark,
} from '@/entities/bookmark';
import type { HandleBookmarkRequest } from './types';
import { reissueToken } from '@/entities/auth/api/api';

export const addBookmarkHandler = async ({
  userId,
  accessToken,
  eventId,
  refreshToken,
}: HandleBookmarkRequest) => {
  const response = await addBookmark(
    userId,
    accessToken,
    eventId,
    refreshToken
  );

  if (response.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (typeof newUserToken === 'number') {
      return true;
    } else {
      return newUserToken;
    }
  } else if (response.status === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  const data = await response.json();
  return data;
};

export const removeBookmarkHandler = async ({
  userId,
  accessToken,
  eventId,
  refreshToken,
}: HandleBookmarkRequest) => {
  const response = await removeBookmark(
    userId,
    accessToken,
    eventId,
    refreshToken
  );

  if (response.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (typeof newUserToken === 'number') {
      return true;
    } else {
      return newUserToken;
    }
  } else if (response.status === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  const data = await response.json();
  return data;
};

export const getBookmarkListHandler = async ({
  userId,
  accessToken,
  refreshToken,
}: Omit<HandleBookmarkRequest, 'eventId'>) => {
  const bookmarkResponse = await getBookmarkList(
    userId,
    accessToken,
    refreshToken
  );
  const isUserDTO =
    bookmarkResponse &&
    typeof bookmarkResponse === 'object' &&
    'userId' in bookmarkResponse;

  if (bookmarkResponse === 401) {
    return true;
    //토큰 재발급에 성공한 경우.
  } else if (isUserDTO) {
    return bookmarkResponse;
  } else {
    return bookmarkResponse;
  }
};
