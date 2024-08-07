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
  eventDetailData,
}: {
  eventDetailData: EventDetail;
}) => {
  const eventBottomSheetData: EventBottomSheetType = {
    theme: eventDetailData.theme,
    period: eventDetailData.period,
    place: eventDetailData.place,
    ticketPrice: eventDetailData.ticketPrice ?? '정보가 없습니다.',
    useTarget: eventDetailData.useTarget,
    player: eventDetailData.player ?? '정보가 없습니다.',
    describe: eventDetailData.describe ?? '정보가 없습니다.',
    etcDesc: eventDetailData.etcDesc ?? '정보가 없습니다.',
  };

  const coordinateQuery = `coordinate?latitude=${eventDetailData.latitude}&longitude=${eventDetailData.longitude}`;

  return (
    <div className="relative bg-black-FFF z-3 px-[30px] py-[50px]">
      <div className="flex justify-between items-center mb-[25px]">
        <EventTitle
          categoryName={getCategoryNameFromCategorySeq(
            eventDetailData.categorySeq
          )}
          guName={getGuNameFromGuSeq(eventDetailData.guSeq)}
          eventName={eventDetailData.eventName}
          page="event"
        />
        <div className="flex gap-x-[15px]">
          <Link
            href={eventDetailData.homepageLink}
            className="flex flex-col items-center gap-y-[3px]"
          >
            <HomeIcon className="w-[23px] fill-purple-10" />
            <span className="text-black-888 text-[11px] whitespace-nowrap">
              홈페이지
            </span>
          </Link>
          <Link
            href={`/map/${coordinateQuery}`}
            className="flex flex-col items-center gap-y-[3px]"
          >
            <LocationIcon className="w-[21px] fill-purple-10" />
            <span className="text-black-888 text-[11px] whitespace-nowrap">
              지도보기
            </span>
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
