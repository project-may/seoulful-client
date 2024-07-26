'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { useEventDetail } from '../model/hooks/useEventDetail';
import { EventDetailBottomSheet } from './EventDetailBottomSheet';
import { LoadingComponent } from '@/shared';
import WhitePage from '/public/assets/white-page.png';

export const EventUiBox = () => {
  const { eventDetailData } = useEventDetail();

  return (
    <div>
      {
        <Suspense fallback={<LoadingComponent />}>
          <div className="sticky top-0 mt-[-40px] w-full aspect-w-16 aspect-h-9">
            <Image
              src={eventDetailData.mainImg || WhitePage}
              width={360}
              height={910}
              alt={eventDetailData.eventName + ' 포스터'}
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-red-to-blue" />
          </div>
          <EventDetailBottomSheet eventDetailData={eventDetailData} />
        </Suspense>
      }
    </div>
  );
};
