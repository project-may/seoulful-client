import { atom } from 'jotai';
import { DEFAULT_GEOHASH, DEFAULT_LOCATION } from './constants';
import type { Location } from './types';
import { atomWithStorage } from 'jotai/utils';

export const locationAtom = atomWithStorage<Location>(
  'location',
  DEFAULT_LOCATION
);
export const storedLocation = (): Location => {
  if (typeof localStorage !== 'undefined') {
    const item = localStorage.getItem('location');
    if (item) {
      return JSON.parse(item) as Location;
    }
  }
  return DEFAULT_LOCATION;
};
export const naverMapAtom = atom<naver.maps.Map | null>(null);
export const geohashAtom = atom(DEFAULT_GEOHASH);
