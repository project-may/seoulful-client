'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FullpageBackground,
  FullpageContents,
  FullpageHeader,
} from '@/features/FullpageAd';
import { LoadingComponent, NavigationButton } from '@/shared';
import type { EventDetail } from '@/features/event/model/types';

const FullpageBox = ({ recommendData }: { recommendData: EventDetail[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!recommendData) {
    return <LoadingComponent />;
  }
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full"
        >
          <FullpageBackground imageUrl={recommendData[currentIdx]?.mainImg} />
        </motion.div>
      </AnimatePresence>
      <div className="relative flex flex-col justify-between p-[30px] w-full h-full z-[1000]">
        <FullpageHeader />
        <div>
          <AnimatePresence initial={false} mode="wait">
            <FullpageContents data={recommendData[currentIdx]} />
          </AnimatePresence>
          <div className="flex gap-x-[12px]">
            <NavigationButton
              direction="prev"
              setCurrentIdx={setCurrentIdx}
              disabled={currentIdx === 0}
            />
            <NavigationButton
              direction="next"
              setCurrentIdx={setCurrentIdx}
              disabled={currentIdx === recommendData.length - 1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullpageBox;
