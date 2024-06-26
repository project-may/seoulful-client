import { CurrentLocationButton } from './CurrentLocationButton';
import { useNaverMap } from '../model/hooks/useNaverMap';
import { useAtom } from 'jotai';
import { locationAtom } from '../index';

export const NaverMap = () => {
  const [location] = useAtom(locationAtom);
  const { mapRef } = useNaverMap({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  return (
    <div className="w-full h-[720px]">
      <div id="map" style={{ width: '100%', height: '720px' }}></div>
      <CurrentLocationButton map={mapRef.current} />
    </div>
  );
};
