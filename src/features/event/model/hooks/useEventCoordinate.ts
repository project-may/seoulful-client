'use client';
import { getGeoCode, locationAtom } from '@/features/map';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useEventCoordinate = () => {
  const searchParams = useSearchParams();
  const [location, setLocation] = useAtom(locationAtom);
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  useEffect(() => {
    const fetchAddress = async () => {
      if (latitude && longitude) {
        const data = await getGeoCode(
          parseFloat(latitude),
          parseFloat(longitude)
        );
        setLocation({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          address: data.documents[1]?.address_name || '',
        });
      }
    };

    fetchAddress();
  }, []);

  return { latitude, longitude, location };
};
