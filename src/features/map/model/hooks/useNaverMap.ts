import { useEffect, useRef } from 'react';
import { getGeoMarkers, getNaverMap, mapEventListener } from '../util';
import { useAtom } from 'jotai';
import { locationAtom, naverMapAtom } from '../store';

export const useNaverMap = () => {
  const [location] = useAtom(locationAtom);
  const [, setMapState] = useAtom(naverMapAtom);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef(new Map());

  useEffect(() => {
    if (window && window.naver) {
      const map = getNaverMap({
        latitude: location.latitude,
        longitude: location.longitude,
      });

      if (map) {
        mapRef.current = map;
        getGeoMarkers(location.latitude, location.longitude, map, markerRef);
        mapEventListener(map, location, markerRef);
        setMapState(map);
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
