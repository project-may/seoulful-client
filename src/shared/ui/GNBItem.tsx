'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { ModalComponent } from './ModalComponent';

export const GNBItem = ({
  ariaLabel,
  Icon,
  link,
  className,
}: {
  ariaLabel: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsUserLoggedIn(!!localStorage.getItem('user'));
    }
  }, []);

  const handleClick = (e: MouseEvent) => {
    if (!isUserLoggedIn) {
      e.preventDefault();
      setShowModal(true);
    } else {
      window.location.href = link;
    }
  };
  return (
    <motion.div
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{
        backgroundColor:
          pathname === link ? 'rgba(217, 217, 217, 0.25)' : 'rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="flex items-center justify-center w-[40px] h-[40px] rounded-full"
      onClick={() => handleClick}
    >
      <Link href={link} aria-label={ariaLabel}>
        <Icon
          className={`${className ?? ''} ${ariaLabel === '북마크' ? 'w-[20px] h-[20px] fill-black-FFF' : ''} pointer-events-none`}
        />
      </Link>
      {showModal && createPortal(<ModalComponent />, document.body)}
    </motion.div>
  );
};
