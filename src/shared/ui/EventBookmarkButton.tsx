'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import type { EventBookmarkButtonPropsType } from '../index';

export const EventBookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
  // isClicked,
  // setIsClicked,
}: EventBookmarkButtonPropsType) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <motion.button
      type="button"
      className={`absolute top-[8px] right-[8px] flex justify-center items-center ${buttonSize ?? 'w-[32px] h-[32px]'} bg-black-60 rounded-full ${hasBorder ? 'border-[1.5px] border-black-FFF' : ''}`}
      onClick={handleClick}
      whileTap={{ scale: 0.8 }}
    >
      <BookmarkIcon
        className={`${iconSize ?? 'w-[16px] h-[16px]'} ${isClicked ? 'fill-yellow-10' : 'fill-black-FFF'} pointer-events-none`}
      />
    </motion.button>
  );
};
