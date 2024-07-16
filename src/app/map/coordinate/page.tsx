'use client';
import { useEventCoordinate } from '@/features/event';
import { GNB } from '@/features/GNB';
import {
  LocationBox,
  mapCurrentPosition,
  NaverMap,
  naverMapAtom,
} from '@/features/map';
import { Header } from '@/shared';
import React from 'react';
import { useAtom } from 'jotai';
import { currentEventAtom } from '@/features/event/model/store';
import { EventDetail } from '@/features/event/model/types';
import { createMarkerPopup } from '@/features/map/model/util';

const CoordinatePage = () => {
  const { latitude, longitude } = useEventCoordinate();
  const [mapState] = useAtom(naverMapAtom);
  const [{ eventId, eventName, period, mainImg }] =
    useAtom<EventDetail>(currentEventAtom);

  if (latitude && longitude && mapState) {
    const marker = mapCurrentPosition(
      mapState,
      parseFloat(latitude),
      parseFloat(longitude)
    );
    if (marker) {
      createMarkerPopup(mapState, marker, eventId, eventName, period, mainImg);
    }
  }

  return (
    <div>
      <Header title="내 주위 행사" isBackButton={true} />
      <LocationBox />
      <NaverMap />
      <div className="absolute bottom-4 right-6">
        <GNB />
      </div>
    </div>
  );
};

export default CoordinatePage;
