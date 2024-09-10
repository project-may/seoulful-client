import { reissueToken } from '@/entities/auth/api/api';
import type { BookmarkEvent, BookmarkEventResponse } from './types';
import { UserDTO } from '@/features/auth';

export const getBookmarkList = async (
  userId: string,
  accessToken: string,
  refreshToken: string
): Promise<BookmarkEvent[] | number | UserDTO> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    const reissueUser = await reissueToken(refreshToken);
    return reissueUser;
  } else if (response.status === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  const { data }: BookmarkEventResponse = await response.json();

  return data;
};

export const addBookmark = async (
  userId: string,
  accessToken: string,
  eventSeq: number,
  refreshToken: string
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventSeq: eventSeq,
      }),
      method: 'PUT',
    }
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

  const { data } = await response.json();
  return data;
};

export const removeBookmark = async (
  userId: string,
  accessToken: string,
  eventSeq: number,
  refreshToken: string
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventSeq: eventSeq,
      }),
      method: 'DELETE',
    }
  );

  if (response.status === 401) {
    const newUserToken = await reissueToken(refreshToken);
    return newUserToken;
  } else if (response.status === 400) {
    throw Error('이미 북마크된 요청이거나, eventID가 담기지 않았습니다.');
  } else if (response.status === 404) {
    throw Error('해당 유저를 찾을 수 없습니다.');
  }

  const { data } = await response.json();
  return data;
};
