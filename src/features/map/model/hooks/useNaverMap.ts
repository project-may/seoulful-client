import { useEffect, useRef } from 'react';
import { getGeoMarkers, getNaverMap, mapEventListener } from '../util';
import { useAtom } from 'jotai';
import { locationAtom } from '../store';

export const useNaverMap = () => {
  const [location] = useAtom(locationAtom);
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap({
        latitude: location.latitude,
        longitude: location.longitude,
      });

      if (map) {
        getGeoMarkers(location.latitude, location.longitude, map);
        mapEventListener(map, location);
      }
      mapRef.current = map;
    }

    return () => {};
  }, [location.latitude, location.longitude]);

  return { mapRef };
};
