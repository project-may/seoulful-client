import React from 'react';
import LocationIcon from '/public/assets/current-location-icon.svg';

export const EventTitle = ({
  categoryName,
  eventName,
  guName,
  page,
}: {
  categoryName: string;
  eventName: string;
  guName: string;
  page: string;
}) => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <span
        className={`${page === 'ad' ? 'text-[14px]' : 'text-[13px] text-black-777'}`}
      >
        {categoryName}
      </span>
      <h2
        className={`leading-none ${page === 'ad' ? 'text-[35px]' : 'text-[21px] text-black-444'} font-semibold`}
      >
        {eventName}
      </h2>
      <div className="flex items-center gap-x-[3px]">
        <LocationIcon className={` ${page === 'ad' ? '' : 'fill-black-888'}`} />
        <span
          className={`text-[12px] ${page === 'ad' ? '' : 'text-black-888'}`}
        >
          {guName}
        </span>
      </div>
    </div>
  );
};
