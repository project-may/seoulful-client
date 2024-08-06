import { HomeEventDTO } from '@/features/home/model/util';

export const getRandomEvent = async (): Promise<HomeEventDTO> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?limit=2&offset=0&categorySeq=1`
  );
  const data = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.data;
};
