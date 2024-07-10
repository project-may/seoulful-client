import { useEffect, useRef } from 'react';
import { getGeoMarkers, getNaverMap, mapEventListener } from '../util';
import { useAtom } from 'jotai';
import { locationAtom } from '../store';

export const useNaverMap = () => {
  const [location] = useAtom(locationAtom);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef(new Map());

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap({
        latitude: location.latitude,
        longitude: location.longitude,
      });

      if (map) {
        getGeoMarkers(location.latitude, location.longitude, map, markerRef);
        mapEventListener(map, location, markerRef);
      }
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      getGeoMarkers(
        location.latitude,
        location.longitude,
        mapRef.current,
        markerRef
      );
    }

    return () => {
      const markerMap = markerRef.current;
      markerMap.forEach((marker) => marker.setMap(null));
      markerMap.clear();
    };
  }, [location.latitude, location.longitude]);

  return { mapRef, markerRef };
};
