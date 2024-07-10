import { useAtom } from 'jotai';
import {
  geoCurrentPosition,
  getGeoMarkers,
  mapCurrentPosition,
} from '../model/util';
import CurrentPositionIcon from '/public/assets/target-icon.svg';
import { locationAtom } from '../model/store';
import { getGeoCode } from '../api/api';
import type { MarkerRefTypes, NaverMapTypes } from '../model/types';

export const CurrentLocationButton = ({
  map,
  marker,
}: NaverMapTypes & MarkerRefTypes) => {
  const [, setCurrentLocation] = useAtom(locationAtom);
  const getCoords = async () => {
    const coords = await geoCurrentPosition();
    await getGeoCode(coords.latitude, coords.longitude).then((data) => {
      const address = data.documents[1].address_name;
      const latitude = data.documents[1].y;
      const longitude = data.documents[1].x;
      if (map) {
        getGeoMarkers(latitude, longitude, map, marker);
        setCurrentLocation({
          address,
          latitude,
          longitude,
        });
        mapCurrentPosition(map, latitude, longitude);
      }
    });
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
