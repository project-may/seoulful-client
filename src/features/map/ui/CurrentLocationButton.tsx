import { useAtomValue, useSetAtom } from 'jotai';
import { geoCurrentPosition, mapCurrentPosition } from '../model/util';
import CurrentPositionIcon from '/public/assets/target-icon.svg';
import { locationAtom, naverMapAtom } from '../model/store';
import { getGeoCode } from '../api/api';

export const CurrentLocationButton = () => {
  const setCurrentLocation = useSetAtom(locationAtom);
  const map = useAtomValue(naverMapAtom);

  const getCoords = async () => {
    const coords = await geoCurrentPosition();
    const coordsData = await getGeoCode(coords.latitude, coords.longitude);
    const address = coordsData.documents[1].address_name;
    const latitude = coordsData.documents[1].y;
    const longitude = coordsData.documents[1].x;
    if (map) {
      setCurrentLocation({
        address,
        latitude,
        longitude,
      });
      mapCurrentPosition(map, latitude, longitude);
    }
  };

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
