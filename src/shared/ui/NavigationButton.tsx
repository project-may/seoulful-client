'use client';
import { motion } from 'framer-motion';
import ArrowIcon from '/public/assets/arrow-icon.svg';
import type { Dispatch, SetStateAction } from 'react';

export const NavigationButton = ({
  direction,
  disabled,
  setCurrentIdx,
}: {
  direction: 'prev' | 'next';
  disabled?: boolean;
  setCurrentIdx: Dispatch<SetStateAction<number>>;
}) => {
  const handleClick = () => {
    if (direction === 'prev') setCurrentIdx((prev) => prev - 1);
    else setCurrentIdx((prev) => prev + 1);
  };

  return (
    <motion.button
      type="button"
      className={`flex justify-center items-center w-[42px] h-[42px] rounded-full ${disabled ? 'bg-black-FFF/50' : 'bg-black-FFF/90'}`}
      whileTap={{ scale: 0.8 }}
      aria-label={`${direction === 'prev' ? '이전 페이지' : '다음 페이지'}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <ArrowIcon
        className={`${disabled ? 'stroke-black-555/50' : 'stroke-black-555'} ${direction === 'prev' ? 'rotate-180 ml-[-4px]' : ''}`}
      />
    </motion.button>
  );
};
