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

export interface MapEvent {
  eventId: number;
  eventName: string;
  period: string;
  geohash: string;
  mainImg: string;
}

export interface EventData {
  [key: string]: MapEvent[];
}

export interface EventPopup {
  eventId: number;
  eventName: string;
  period: string;
  mainImg: string;
}
