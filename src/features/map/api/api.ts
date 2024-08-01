export const getGeoCode = async (latitude: number, longitude: number) => {
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API}`,
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching geocode:', error);
    throw error;
  }
};
