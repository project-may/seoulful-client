import { CurrentLocationButton } from './CurrentLocationButton';
import { useNaverMap } from '../model/hooks/useNaverMap';
import { useCheckAgent } from '@/shared';

export const NaverMap = () => {
  useNaverMap();
  const { userAgent } = useCheckAgent();
  const checkNaver = userAgent.toLowerCase().includes('naver');
  return (
    <div className={`w-full ${checkNaver ? 'h-[100dvh]' : 'h-[100vh]'}`}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <CurrentLocationButton />
    </div>
  );
};
