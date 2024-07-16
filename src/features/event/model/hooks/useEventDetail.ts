'use client';
import { getEventDetail } from '@/entities/event/api/api';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EventDetail } from '../types';

export const useEventDetail = () => {
  const [eventData, setEventData] = useState<EventDetail>();
  const pathname = usePathname();
  const formattedUrl = pathname.split('/').pop() || '';
  useEffect(() => {
    getEventDetail(Number(formattedUrl)).then((data) => {
      setEventData(data.data);
    });
  }, []);

  return { eventData };
};
