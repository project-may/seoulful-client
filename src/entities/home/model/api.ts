import type { HomeEventDTO } from '@/features/home/model/util';

export const getHomeEvent = async (
  isRandom: boolean,
  categorySeq?: number
): Promise<HomeEventDTO[]> => {
  const randomNum = Math.floor(Math.random() * 15) + 1;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?limit=2&offset=0&categorySeq=${isRandom ? randomNum : categorySeq}`
  );
  const data = await res.json();
  return data.data;
};
