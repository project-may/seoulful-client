import { reissueToken } from '@/entities/auth/api/api';
import type {
  BookmarkChangeResponse,
  BookmarkEvent,
  BookmarkEventResponse,
} from './types';

export const getBookmarkList = async (
  userId: string,
  accesToken: string
): Promise<BookmarkEvent[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accesToken}`,
      },
    }
  );

  const { data }: BookmarkEventResponse = await response.json();
  return data;
};

export const addBookmark = async (
  userId: string,
  accessToken: string,
  refreshToken: string,
  eventSeq: number
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
    const newToken = await reissueToken(refreshToken);

    if (typeof newToken === 'number') {
      //reissueToken의 status code
      return newToken;
    } else {
      const retryReponse = await response;
      const { data }: BookmarkChangeResponse = await retryReponse.json();
      return data;
    }
  }
  const { data }: BookmarkChangeResponse = await response.json();

  return data;
};

export const removeBookmark = async (
  userId: string,
  accessToken: string,
  refreshToken: string,
  eventSeq: number
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
    const newToken = await reissueToken(refreshToken);
    if (typeof newToken === 'number') {
      const retryResponse = await response;
      const { data }: BookmarkChangeResponse = await retryResponse.json();
      return data;
    }
  }
  const { data }: BookmarkChangeResponse = await response.json();
  return data;
};
