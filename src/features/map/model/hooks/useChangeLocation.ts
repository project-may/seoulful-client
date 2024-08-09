import { useEffect } from 'react';
import { locationAtom } from '../store';
import { useSetAtom } from 'jotai';
import { getGeoCode, NaverMapTypes } from '../..';

export const useChangeLocation = ({ map }: NaverMapTypes) => {
  const setLocation = useSetAtom(locationAtom);
  // 나누니까 map이 무조건 null이 나옴.
  //map이 로딩되는 타이밍이 다르기 때문
  useEffect(() => {
    if (!map) return;
    const listener = map.addListener('idle', () => {
      const newLatitude = map.getCenter().y;
      const newLongitude = map.getCenter().x;
      const fetchAddress = async () => {
        const data = await getGeoCode(newLatitude, newLongitude);
        setLocation({
          latitude: newLatitude,
          longitude: newLongitude,
          address: data.documents[1]?.address_name || '',
        });
      };
      fetchAddress();
    });

    return () => {
      naver.maps.Event.removeListener(listener);
    };
  }, []);
};
