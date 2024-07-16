'use client';
import { getEventDetail } from '@/entities/event/api/api';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { EventDetail } from '../types';
import { useAtom } from 'jotai';
import { currentEventAtom } from '../store';

export const useEventDetail = () => {
  const [eventData, setEventData] = useAtom<EventDetail>(currentEventAtom);
  const pathname = usePathname();
  const formattedUrl = pathname.split('/').pop() || '';
  useEffect(() => {
    getEventDetail(Number(formattedUrl)).then((data) => {
      setEventData(data.data);
    });
  }, []);

  return { eventData };
};
