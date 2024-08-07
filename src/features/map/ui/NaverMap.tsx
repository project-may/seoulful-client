import { CurrentLocationButton } from './CurrentLocationButton';
import { useNaverMap } from '../model/hooks/useNaverMap';

export const NaverMap = () => {
  useNaverMap();
  return (
    <div className="w-full h-[720px]">
      <div id="map" style={{ width: '100%', height: '100dvh' }}></div>
      <CurrentLocationButton />
    </div>
  );
};
