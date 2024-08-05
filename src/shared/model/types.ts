import type { StaticImageData } from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import type { CalendarProps } from 'react-calendar';

export interface ThumbnailItemType {
  url: string;
  image: StaticImageData;
  title: string;
  period: string;
}

export interface EventBookmarkButtonPropsType {
  buttonSize: string;
  iconSize: string;
  hasBorder: boolean;
}

export interface ModalType {
  link: 'auth' | 'bookmark';
  setShowModal: Dispatch<SetStateAction<boolean>>;
  isUserLoggedIn: boolean;
  eventName?: string;
}

export interface CategoryItemType {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  src: string;
}

export interface CalendarPropsType extends CalendarProps {
  className?: string;
}

export type ClickDateType = Date | null;
export type CalendarDateType = ClickDateType | [ClickDateType, ClickDateType];

export interface AlertModalPropsType {
  title: string;
  src: StaticImageData;
  schedule: string;
}

export interface BookmarkButtonPropsType {
  buttonSize?: string;
  iconSize?: string;
  hasBorder?: boolean;
  isClicked?: boolean;
  setIsClicked?: Dispatch<SetStateAction<boolean>>;
}

export interface EventDetailResType {
  eventId: number;
  categorySeq: number;
  guSeq: number | null;
  eventName: string;
  period: string;
  place: string;
  orgName: string;
  useTarget: string;
  ticketPrice: string | null;
  player: string | null;
  describe: string | null;
  etcDesc: string | null;
  homepageLink: string;
  mainImg: string;
  regDate: string;
  isPublic: boolean;
  startDate: string;
  endDate: string;
  theme: string | null;
  latitude: number;
  longitude: number;
  isFree: boolean;
  detailUrl: string;
}
