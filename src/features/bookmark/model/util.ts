import {
  addBookmark,
  BookmarkChangeResponse,
  BookmarkEventResponse,
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
  const response = await addBookmark(userId, accessToken, eventId);
  const { data }: BookmarkChangeResponse = await response.json();

  if (response.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (typeof newUserToken === 'number') {
      return true;
    } else {
      const { accessToken: newAccessToken } = newUserToken;
      const retryResponse = await addBookmark(userId, newAccessToken, eventId);
      const { data: retryData }: BookmarkChangeResponse =
        await retryResponse.json();

      return retryData;
    }
  } else if (response.status === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  return data;
};

export const removeBookmarkHandler = async ({
  userId,
  accessToken,
  eventId,
  refreshToken,
}: HandleBookmarkRequest) => {
  const response = await removeBookmark(userId, accessToken, eventId);
  const { data }: BookmarkChangeResponse = await response.json();

  if (response.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (typeof newUserToken === 'number') {
      return true;
    } else {
      const { accessToken: newAccessToken } = newUserToken;
      const retryResponse = await removeBookmark(
        userId,
        newAccessToken,
        eventId
      );
      const { data: retryData }: BookmarkChangeResponse =
        await retryResponse.json();

      return retryData;
    }
  } else if (response.status === 400) {
    throw Error('eventSeq가 존재하지않음.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  return data;
};

export const getBookmarkListHandler = async ({
  userId,
  accessToken,
  refreshToken,
}: Omit<HandleBookmarkRequest, 'eventId'>) => {
  const bookmarkResponse = await getBookmarkList(userId, accessToken);
  const { data }: BookmarkEventResponse = await bookmarkResponse.json();

  if (bookmarkResponse.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    if (typeof newUserToken === 'number') {
      return true;
    } else {
      const { accessToken: newAccessToken } = newUserToken;
      const retryResponse = await getBookmarkList(userId, newAccessToken);
      const { data: retryData }: BookmarkEventResponse =
        await retryResponse.json();

      return retryData;
    }
  } else if (bookmarkResponse.status === 400) {
    throw Error('limit 혹은 offset 값이 없거나 유효하지 않습니다.');
  }

  return data;
};
