import { EventDetailResponse } from '@/features/event/model/types';

export const getEventDetail = async (
  eventId: number
): Promise<EventDetailResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/detail/${eventId}`
  );
  const data = response.json();
  return data;
};

export const getEventList = async () => {};
