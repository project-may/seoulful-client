import { atom } from 'jotai';
import { DEFAULT_GEOHASH, DEFAULT_LOCATION } from './constants';
import type { Location } from './types';

export const locationAtom = atom<Location>(DEFAULT_LOCATION);

export const geohashAtom = atom(DEFAULT_GEOHASH);
