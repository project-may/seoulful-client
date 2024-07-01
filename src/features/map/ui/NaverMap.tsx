import { CurrentLocationButton } from './CurrentLocationButton';
import { useNaverMap } from '../model/hooks/useNaverMap';
import { useChangeLocation } from '../index';

export const NaverMap = () => {
  const { mapRef } = useNaverMap();
  useChangeLocation({ map: mapRef.current });

  return (
    <div className="w-full h-[720px]">
      <div id="map" style={{ width: '100%', height: '720px' }}></div>
      <CurrentLocationButton map={mapRef.current} />
    </div>
  );
};
