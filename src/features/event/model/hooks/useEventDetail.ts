import { getEventDetail } from '@/entities/event/api/api';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useEventDetail = () => {
  const [eventData, setEventData] = useState();
  const pathname = usePathname();
  const formattedUrl = pathname.split('/').pop() || '';
  console.log(formattedUrl, 'url');
  useEffect(() => {
    getEventDetail(parseInt(formattedUrl)).then((data) => {
      setEventData(data);
    });
  }, []);

  return { eventData };
};
