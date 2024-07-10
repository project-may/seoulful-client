'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import type { BookmarkButtonPropsType } from '../index';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
  // isClicked,
  // setIsClicked,
}: BookmarkButtonPropsType) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <motion.button
      type="button"
      className={`flex justify-center items-center ${buttonSize ?? 'w-[32px] h-[32px]'} bg-black-60 rounded-full ${hasBorder ? 'border-[1.5px] border-black-FFF' : ''}`}
      onClick={handleClick}
      whileTap={{ scale: 0.8 }}
    >
      <BookmarkIcon
        className={`${iconSize ?? 'w-[16px] h-[16px]'} ${isClicked ? 'fill-yellow-10' : 'fill-black-FFF'} pointer-events-none`}
      />
    </motion.button>
  );
};
