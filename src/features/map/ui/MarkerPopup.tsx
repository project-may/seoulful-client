import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { renderToString } from 'react-dom/server';
import { EventPopup } from '../model/types';

export const MarkerPopup = ({
  eventId,
  eventName,
  period,
  mainImg,
}: EventPopup) => {
  return (
    <Link href={`/event/${eventId}`}>
      <div className="relative w-[120px] h-[207px] rounded-md bg-white p-[10px] after:content-[''] after:absolute after:right-[50px] after:bottom-[-20px] after:border-[13px] after:border-transparent after:border-t-[10px] after:border-t-[#FFFFFF] shadow-dialog">
        {/*
         */}
        <div className="relative w-[100px] h-[140px] p-0">
          <Image src={mainImg} alt="행사이미지" fill />
        </div>

        <div className="text-black-555 font-semibold text-[16px] truncate">
          {eventName}
        </div>
        <div className="text-black-999 font-regular text-[10px] whitespace-nowrap">
          {period}
        </div>
      </div>
    </Link>
  );
};

export const PopupString = ({
  eventId,
  eventName,
  period,
  mainImg,
}: EventPopup) => {
  const popUp = renderToString(
    <MarkerPopup
      mainImg={mainImg}
      eventId={eventId}
      eventName={eventName}
      period={period}
    />
  );
  return popUp;
};
