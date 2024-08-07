import { MutableRefObject } from 'react';

export interface HomeEventType {
  eventId: number;
  categorySeq: number;
  eventName: string;
  period: string;
  mainImg: string;
  startDate: Date;
  endDate: Date;
  detailUrl: string;
}

export interface HomeEventResponseType {
  data: HomeEventType[];
  totalCount: number;
}

export interface ObserverType {
  target: MutableRefObject<HTMLDivElement | null>;
  callback: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}
