import { useEffect, useRef } from 'react';
import { getGeoMarkers, getNaverMap, mapEventListener } from '../util';
import { useAtom } from 'jotai';
import { locationAtom, naverMapAtom, storedLocation } from '../store';
import { getGeoCode } from '../../api/api';

export const useNaverMap = () => {
  const [location, setLocation] = useAtom(locationAtom);
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
        mapEventListener(map, markerRef);
        setMapState(map);
        const initialLocation = storedLocation();
        if (initialLocation) {
          const center = new naver.maps.LatLng(
            initialLocation.latitude,
            initialLocation.longitude
          );
          map.setCenter(center);
        }
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

      const map = mapRef.current;
      map.addListener('idle', () => {
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
    }

    return () => {
      const markerMap = markerRef.current;
      markerMap.forEach((marker) => marker.setMap(null));
      markerMap.clear();
    };
  }, [location.latitude, location.longitude]);

  return { mapRef, markerRef };
};
