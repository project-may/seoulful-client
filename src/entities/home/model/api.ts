import type { HomeEventResponseType } from '@/features/home/model/types';

export const getHomeEvent = async (
  limit: number,
  offset: number,
  isRandom: boolean,
  categorySeq?: number
): Promise<HomeEventResponseType> => {
  const randomNum = Math.floor(Math.random() * 15) + 1;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?limit=${limit}&offset=${offset}&categorySeq=${isRandom ? randomNum : categorySeq}`,
    {
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data;
};
