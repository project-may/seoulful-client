import { useAtom } from 'jotai';
import {
  geoCurrentPosition,
  getGeoMarkers,
  mapCurrentPosition,
} from '../model/util';
import CurrentPositionIcon from '/public/assets/target-icon.svg';
import { locationAtom } from '../model/store';
import { getGeoCode } from '../api/api';
import type { NaverMapTypes } from '../model/types';

export const CurrentLocationButton = ({ map }: NaverMapTypes) => {
  const [, setCurrentLocation] = useAtom(locationAtom);
  const getCoords = async () => {
    const coords = await geoCurrentPosition();
    await getGeoCode(coords.latitude, coords.longitude).then((data) => {
      const address = data.documents[1].address_name;
      const latitude = data.documents[1].x;
      const longitude = data.documents[1].y;
      console.log(map, 'map');
      if (map) {
        getGeoMarkers(latitude, longitude, map);
        setCurrentLocation({
          address,
          latitude,
          longitude,
        });
        mapCurrentPosition(map, latitude, longitude);
      }
    });
  };

  // fetchLocation 이라는 함수에서 locationAtom을 업데이트한다.
  // 내가 원하는 것은 업데이트 되고, 움직이는 것.
  // 당연히 fetchLocation을 업데이트하면 locationBox는 업데이트 되지만,
  // mapCurrentPosition은 default location을 바라보고 있기 때문에 타이밍이 다른 것.
  // 현재는 map에서 null이 나옴 -> NaverMap을 렌더링 하기전에 이 버튼을 렌더링하기 때문에
  // map에서는 당연히 null이 나올 수 밖에 없다.

  return (
    <button
      className="w-[30px] h-[30px] bg-white border border-[#AAAAAA] grid place-items-center absolute bottom-[100px] right-[12px] z-50"
      type="button"
      onClick={() => getCoords()}
    >
      <CurrentPositionIcon />
    </button>
  );
};
