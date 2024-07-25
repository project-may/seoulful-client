import { useEffect, useRef } from 'react';
import { getGeoHash, getGeoMarkers, getNaverMap } from '../util';
import { useAtom, useSetAtom } from 'jotai';
import { locationAtom, naverMapAtom, storedLocation } from '../store';
import { getGeoCode } from '../../api/api';

export const useNaverMap = () => {
  const [location, setLocation] = useAtom(locationAtom);
  const setMapState = useSetAtom(naverMapAtom);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<Map<string, naver.maps.Marker>>(new Map());
  const geohashRef = useRef<string>();

  useEffect(() => {
    if (!(window && window.naver)) return;
    const map = getNaverMap({
      latitude: location.latitude,
      longitude: location.longitude,
    });
    const { hash } = getGeoHash(location.latitude, location.longitude);
    geohashRef.current = hash;
    mapRef.current = map;
    setMapState(map);
    const initialLocation = storedLocation();
    if (initialLocation) {
      const center = new naver.maps.LatLng(
        initialLocation.latitude,
        initialLocation.longitude
      );
      map.setCenter(center);
    }

    const markerListener = naver.maps.Event.addListener(
      mapRef.current,
      'idle',
      () => {
        getGeoMarkers(map, markersRef, geohashRef);
      }
    );

    const locationListener = map.addListener('idle', () => {
      const newLatitude = map.getCenter().y;
      const newLongitude = map.getCenter().x;
      console.log(newLatitude, newLongitude, 'new');
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
      naver.maps.Event.removeListener(markerListener);
      naver.maps.Event.removeListener(locationListener);
    };
  }, []);
};
