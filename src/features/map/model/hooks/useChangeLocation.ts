import { useEffect } from 'react';
import { locationAtom } from '../store';
import { useAtom } from 'jotai';
import { NaverMapTypes } from '../types';

export const useChangeLocation = ({ map }: NaverMapTypes) => {
  const [, setLocation] = useAtom(locationAtom);

  useEffect(() => {
    if (map) {
      const center = map.getCenter();
      setLocation((prev) => ({
        ...prev,
        latitude: center.y,
        longitude: center.x,
      }));
    }
  }, [map]);
};
