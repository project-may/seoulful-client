'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowIcon from '/public/assets/arrow-icon.svg';

export const AccordionMenu = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`appearance-none pt-[15px] ${isOpen ? 'pb-[15px]' : 'pb-[8px]'}`}
    >
      <div
        className="flex justify-between items-center pb-[7px] list-none"
        onClick={handleToggle}
      >
        <span className="text-[14px] text-black-777 font-semibold">
          {title}
        </span>
        <div
          className={`mr-[10px] ${isOpen ? 'rotate-90' : 'rotate-[-90deg]'}`}
        >
          <ArrowIcon className={`stroke-black-AAA`} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
