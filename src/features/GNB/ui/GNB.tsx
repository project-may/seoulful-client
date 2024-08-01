'use client';

import { GNBItem } from '@/shared';
import { GNB_CONTENT } from '../index';

export const GNB = () => {
  return (
    <nav className="sticky bottom-[15px] left-0 right-0 m-auto">
      <ul className="flex justify-center items-center gap-x-[18px] w-[300px] h-[65px] rounded-full bg-black-60">
        {GNB_CONTENT.map((gnb, i) => (
          <GNBItem
            key={`GNB-${i}`}
            ariaLabel={gnb.ariaLabel}
            Icon={gnb.icon}
            link={gnb.link}
          />
        ))}
      </ul>
    </nav>
  );
};
