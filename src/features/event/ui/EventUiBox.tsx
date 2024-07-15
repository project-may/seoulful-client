'use client';
import React from 'react';
import Image from 'next/image';
import { EventTitle } from './EventTitle';
import TmpPoster from '/public/assets/tmp-poster.jpg';
import Link from 'next/link';
import HomeIcon from '/public/assets/home-icon.svg';
import LocationIcon from '/public/assets/location-icon.svg';
import { DUMMY_CONTENT, EventIcon, EventKorName } from '../model/constants';
import { EventTitleContentBox } from './EventTitleContentBox';
import { useEventDetail } from '../model/hooks/useEventDetail';

export const EventUiBox = () => {
  const { eventData } = useEventDetail();
  console.log(eventData);

  return (
    <div>
      <div className="sticky top-0 mt-[-40px] w-full aspect-w-16 aspect-h-9">
        <Image src={TmpPoster} alt="포스터" objectFit="cover" />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-red-to-blue" />
      </div>
      <div className="relative bg-black-FFF z-3 px-[30px] py-[50px]">
        <div className="flex justify-between items-center mb-[25px]">
          <EventTitle
            categoryName="클래식"
            guName="종로구"
            eventName="한여름의 메시아"
            page="event"
          />
          <div className="flex gap-x-[15px]">
            <Link href="#" className="flex flex-col items-center gap-y-[3px]">
              <HomeIcon className="w-[23px] fill-purple-10" />
              <span className="text-black-888 text-[11px]">홈페이지</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-y-[3px]">
              <LocationIcon className="w-[21px] fill-purple-10" />
              <span className="text-black-888 text-[11px]">지도보기</span>
            </Link>
          </div>
        </div>
        <div className="divide-y divide-black-10">
          {(Object.keys(DUMMY_CONTENT) as (keyof typeof DUMMY_CONTENT)[]).map(
            (key) => {
              const Icon = EventIcon[key];
              const title = EventKorName[key];
              const content = DUMMY_CONTENT[key];

              return (
                <EventTitleContentBox
                  key={key}
                  Icon={Icon}
                  title={title}
                  content={content}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
