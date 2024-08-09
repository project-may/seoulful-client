import { motion } from 'framer-motion';
import {
  DetailPageButton,
  getCategoryNameFromCategorySeq,
  getGuNameFromGuSeq,
} from '@/shared';
import LocationIcon from '/public/assets/current-location-icon.svg';
import type { EventDetail } from '@/features/event/model/types';

export const FullpageContents = ({ data }: { data: EventDetail }) => {
  if (!data) {
    return null;
  }

  const guName =
    data.guSeq === undefined ? '업데이트' : getGuNameFromGuSeq(data.guSeq);
  const categoryName = getCategoryNameFromCategorySeq(data.categorySeq);

  return (
    <motion.div className="mb-[60px]">
      <div className="flex flex-col gap-y-[2px]">
        <span className="text-[14px]">{categoryName}</span>
        <h2 className="leading-none	text-[35px] font-semibold">
          {data.eventName}
        </h2>
        <div className="flex items-center gap-x-[3px]">
          <LocationIcon className="mt-[4px]" />
          <span className="text-[10px]">{guName}</span>
        </div>
      </div>
      <div className="mt-[3px]">
        <span className="text-[13px]">{data.period}</span>
      </div>
      <div>
        <p className="my-[20px]">{data.describe}</p>
      </div>
      <DetailPageButton url={`/event/${data.eventId}`} />
    </motion.div>
  );
};
