'use client';
import React from 'react';
import { EventDetail, EventBottomSheetType } from '../model/types';
import { EventTitle } from './EventTitle';
import Link from 'next/link';
import HomeIcon from '/public/assets/home-icon.svg';
import LocationIcon from '/public/assets/location-icon.svg';
import { getCategoryNameFromCategorySeq, getGuNameFromGuSeq } from '@/shared';
import { EventIcon, EventKorName } from '../model/constants';
import { EventTitleContentBox } from './EventTitleContentBox';

export const EventDetailBottomSheet = ({
  eventData,
}: {
  eventData: EventDetail;
}) => {
  const eventBottomSheetData: EventBottomSheetType = {
    theme: eventData.theme,
    period: eventData.period,
    place: eventData.place,
    ticketPrice: eventData.ticketPrice ?? '',
    useTarget: eventData.useTarget,
    player: eventData.player ?? '',
    describe: eventData.describe ?? '',
    etcDesc: eventData.etcDesc ?? '',
  };
  return (
    <div className="relative bg-black-FFF z-3 px-[30px] py-[50px]">
      <div className="flex justify-between items-center mb-[25px]">
        <EventTitle
          categoryName={getCategoryNameFromCategorySeq(eventData.categorySeq)}
          guName={getGuNameFromGuSeq(eventData.guSeq)}
          eventName={eventData.eventName}
          page="event"
        />
        <div className="flex gap-x-[15px]">
          <Link
            href={eventData.homepageLink}
            className="flex flex-col items-center gap-y-[3px]"
          >
            <HomeIcon className="w-[23px] fill-purple-10" />
            <span className="text-black-888 text-[11px]">홈페이지</span>
          </Link>
          {/* 링크 컴포넌트로 쿼리전달*/}
          <Link href="#" className="flex flex-col items-center gap-y-[3px]">
            <LocationIcon className="w-[21px] fill-purple-10" />
            <span className="text-black-888 text-[11px]">지도보기</span>
          </Link>
        </div>
      </div>
      <div className="divide-y divide-black-10">
        {(
          Object.keys(
            eventBottomSheetData
          ) as (keyof typeof eventBottomSheetData)[]
        ).map((key) => {
          const Icon = EventIcon[key];
          const title = EventKorName[key];
          const content = eventBottomSheetData[key];

          return (
            <EventTitleContentBox
              key={key}
              Icon={Icon}
              title={title}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};
