export const getEventDetail = async (eventId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/detail/${eventId}`
  );
  const data = response.json();
  return data;
};
