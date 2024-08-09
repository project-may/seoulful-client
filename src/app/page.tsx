'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AD_CONTENT,
  FullpageBackground,
  FullpageContents,
  FullpageHeader,
} from '@/features/FullpageAd';
import { LoadingComponent, NavigationButton } from '@/shared';
import { getHomeEvent } from '@/entities/home';
import { getEventDetail } from '@/entities/event';
import type { EventDetailResponse } from '@/features/event/model/types';

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [recommendData, setRecommendData] = useState<
    EventDetailResponse[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getHomeEvent(5, 0, true);
      const detailPromises = data.map((event) => getEventDetail(event.eventId));
      const detailData = await Promise.all(detailPromises);
      setRecommendData(detailData);
    };
    fetchData();
  }, []);

  if (!recommendData) {
    return <LoadingComponent />;
  }

  return (
    <main className="relative w-full h-full bg-gradient-red-to-blue text-black-FFF">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full"
        >
          <FullpageBackground
            imageUrl={recommendData[currentIdx]?.data.mainImg}
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative flex flex-col justify-between p-[30px] w-full h-full z-[1000]">
        <FullpageHeader />
        <div>
          <AnimatePresence initial={false} mode="wait">
            <FullpageContents data={recommendData[currentIdx]?.data} />
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
              disabled={currentIdx === AD_CONTENT.length - 1}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
