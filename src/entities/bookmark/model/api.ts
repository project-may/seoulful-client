export const getBookmarkList = async (userId: string, accessToken: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response;
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
        eventSeq,
      }),
      method: 'PUT',
    }
  );

  return response;
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

  return response;
};
