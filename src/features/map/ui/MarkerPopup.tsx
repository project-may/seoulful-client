import React from 'react';
import Image from 'next/image';
import Poster from '/public/assets/tmp-poster.jpg';
import Link from 'next/link';
import { renderToString } from 'react-dom/server';
import { EventPopup } from '../model/types';

export const MarkerPopup = ({ eventId, eventName, period }: EventPopup) => {
  return (
    <Link href={`/event/${eventId}`}>
      <div className="relative w-[120px] h-[207px] rounded-md bg-white p-[10px] after:content-[''] after:absolute after:right-[50px] after:bottom-[-20px] after:border-[13px] after:border-transparent after:border-t-[10px] after:border-t-[#FFFFFF] shadow-dialog">
        <Image src={Poster} alt="행사이미지" width={100} height={140} />
        <div className="text-black-555 font-semibold text-[16px]">
          {eventName}
        </div>
        <div className="text-black-999 font-regular text-[10px]">{period}</div>
      </div>
    </Link>
  );
};

export const PopupString = ({ eventId, eventName, period }: EventPopup) => {
  const popUp = renderToString(
    <MarkerPopup eventId={eventId} eventName={eventName} period={period} />
  );
  return popUp;
};
