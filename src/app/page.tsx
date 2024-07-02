'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import {
  AD_CONTENT,
  FullpageBackground,
  FullpageContents,
  FullpageHeader,
} from '@/features/FullpageAd';
import { NavigationButton } from '@/shared';

export default function Home() {
  const router = useRouter();
  const [isClickedCloseBtn, setIsClickedCloseBtn] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (isClickedCloseBtn) router.push('/home');
  }, [isClickedCloseBtn, router]);

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
          <FullpageBackground imageUrl={AD_CONTENT[currentIdx].mainImg} />
        </motion.div>
      </AnimatePresence>
      <div className="relative flex flex-col justify-between p-[30px] w-full h-full z-[1000]">
        <FullpageHeader setIsClickedCloseBtn={setIsClickedCloseBtn} />
        <div>
          <AnimatePresence initial={false} mode="wait">
            <FullpageContents data={AD_CONTENT[currentIdx]} />
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
