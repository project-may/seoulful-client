'use client';
import React from 'react';
import Image from 'next/image';
import TmpPoster from '/public/assets/tmp-poster.jpg';
import { useEventDetail } from '../model/hooks/useEventDetail';
import { EventDetailBottomSheet } from './EventDetailBottomSheet';

export const EventUiBox = () => {
  const { eventData } = useEventDetail();

  return (
    <div>
      {eventData ? (
        <>
          <div className="sticky top-0 mt-[-40px] w-full aspect-w-16 aspect-h-9">
            <Image
              src={eventData.mainImg || TmpPoster}
              width={360}
              height={910}
              alt={eventData.eventName + '포스터'}
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-red-to-blue" />
          </div>
          <EventDetailBottomSheet eventData={eventData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
