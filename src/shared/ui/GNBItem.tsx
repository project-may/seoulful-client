'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      <Link href={link} aria-label={ariaLabel}>
        <Icon
          className={`${className ?? ''} ${ariaLabel === '북마크' ? 'w-[20px] h-[20px] fill-black-FFF' : ''} pointer-events-none`}
        />
      </Link>
    </motion.div>
  );
};
