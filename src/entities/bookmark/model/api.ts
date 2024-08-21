import { reissueToken } from '@/entities/auth/api/api';
import type {
  BookmarkChangeResponse,
  BookmarkEvent,
  BookmarkEventResponse,
} from './types';

export const getBookmarkList = async (
  userId: string,
  accessToken: string
): Promise<BookmarkEvent[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
    // 토큰 재발급을 위한 reissue;
    const newToken = await reissueToken(refreshToken);

    if (!(typeof newToken === 'number')) {
      const updatedUser = {
        ...JSON.parse(localStorage.getItem('user') as string),
        accessToken: newToken.accessToken,
        refreshToken: newToken.refreshToken,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));

      const retryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${newToken.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventSeq: eventSeq,
          }),
          method: 'PUT',
        }
      );

      if (retryResponse.ok) {
        const { data }: BookmarkChangeResponse = await retryResponse.json();
        return data;
      } else {
        console.error(
          'Failed to add bookmark after token refresh:',
          retryResponse.status
        );
        return null;
      }
    } else {
      console.error('Token reissue failed:', newToken);
      return null;
    }
  } else if (response.ok) {
    const { data }: BookmarkChangeResponse = await response.json();
    return data;
  } else {
    console.error('Failed to add bookmark:', response.status);
    return null;
  }
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
    // 토큰 재발급을 위한 reissue;
    const newToken = await reissueToken(refreshToken);

    if (!(typeof newToken === 'number')) {
      const updatedUser = {
        ...JSON.parse(localStorage.getItem('user') as string),
        accessToken: newToken.accessToken,
        refreshToken: newToken.refreshToken,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));

      const retryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${newToken.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventSeq: eventSeq,
          }),
          method: 'DELETE',
        }
      );

      if (retryResponse.ok) {
        const { data }: BookmarkChangeResponse = await retryResponse.json();
        return data;
      } else {
        console.error(
          'Failed to add bookmark after token refresh:',
          retryResponse.status
        );
        return null;
      }
    } else {
      console.error('Token reissue failed:', newToken);
      return null;
    }
  } else if (response.ok) {
    const { data }: BookmarkChangeResponse = await response.json();
    return data;
  } else {
    console.error('Failed to add bookmark:', response.status);
    return null;
  }
};
