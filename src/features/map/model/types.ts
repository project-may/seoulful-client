import { MutableRefObject } from 'react';

export interface NaverMapTypes {
  map: naver.maps.Map | null;
}

export interface MarkerRefTypes {
  marker: MutableRefObject<Map<string, naver.maps.Marker>>;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface MarkerTypes {
  map: NaverMapTypes;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
}

export interface MapInfo extends Coordinates {
  map: naver.maps.Map | null;
}

export interface ImageIcon {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
}

export interface Location extends Coordinates {
  address: string;
}

export interface Event {
  categorySeq: number;
  detailUrl: string;
  endDate: string;
  eventId: number;
  eventName: string;
  geohash: string;
  latitude: number;
  longitude: number;
  mainImg: string;
  period: string;
  startDate: string;
}

export interface EventData {
  [key: string]: Event[];
}

export interface EventPopup {
  eventId: number;
  eventName: string;
  period: string;
  mainImg: string;
}
