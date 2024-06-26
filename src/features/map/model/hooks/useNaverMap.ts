import { useEffect, useRef } from 'react';
import { getGeoMarkers, getNaverMap } from '../util';
import type { Coordinates } from '../types';

export const useNaverMap = ({ latitude, longitude }: Coordinates) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  //TODO : 마커 중복 체크 로직 추가

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap({
        latitude,
        longitude,
      });

      if (map) {
        getGeoMarkers(latitude, longitude, map);
      }
      mapRef.current = map;
    }
  }, []);

  return { mapRef };
};
