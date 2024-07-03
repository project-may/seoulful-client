export const getNearbyEvent = async (geohash: string[]) => {
  const geohashString = geohash.join(',');
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/nearby?geohash=${geohashString}`
  );
  const data = await res.json();

  return data;
};
