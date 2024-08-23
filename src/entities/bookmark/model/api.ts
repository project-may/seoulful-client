import type {
  BookmarkChangeResponse,
  BookmarkEvent,
  BookmarkEventResponse,
} from './types';

export const getBookmarkList = async (
  userId: string,
  accessToken: string
): Promise<BookmarkEvent[] | number> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (typeof response.status === 'number') {
    return response.status;
  } else {
    const { data }: BookmarkEventResponse = await response.json();

    return data;
  }
};

export const addBookmark = async (
  userId: string,
  accessToken: string,
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

  if (
    response.status === 401 ||
    response.status === 400 ||
    response.status === 404
  ) {
    return response.status;
  }

  const { data }: BookmarkChangeResponse = await response.json();
  return data;
};

export const removeBookmark = async (
  userId: string,
  accessToken: string,
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

  if (
    response.status === 401 ||
    response.status === 400 ||
    response.status === 404
  ) {
    return response.status;
  }
  const { data }: BookmarkChangeResponse = await response.json();
  return data;
};
