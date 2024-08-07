import { RefObject } from 'react';

export interface HomeEventDTO {
  eventId: number;
  categorySeq: number;
  eventName: string;
  period: string;
  mainImg: string;
  startDate: Date;
  endDate: Date;
  detailUrl: string;
}

export interface ObserverType {
  target: RefObject<HTMLLIElement>;
  callback: () => void;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}
