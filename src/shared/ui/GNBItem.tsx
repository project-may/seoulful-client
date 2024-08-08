'use client';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ModalComponent } from './ModalComponent';
import { useModal } from '../model/hooks/useModal';

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
  const router = useRouter();
  const pathname = usePathname();
  const { showModal, isUserLoggedIn, portalElement, setShowModal } = useModal();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((link === '/mypage' || link === '/bookmark') && !isUserLoggedIn) {
      e.preventDefault();
      setShowModal(true);
    } else {
      router.push(link);
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
    >
      <button
        aria-label={ariaLabel}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <Icon
          className={`${className ?? ''} ${ariaLabel === '북마크' ? 'w-[20px] h-[20px] fill-black-FFF' : ''} pointer-events-none`}
        />
      </button>
      {showModal && portalElement ? (
        <ModalComponent
          isUserLoggedIn={isUserLoggedIn}
          setShowModal={setShowModal}
          link={'auth'}
          portalElement={portalElement}
        />
      ) : null}
    </motion.div>
  );
};
