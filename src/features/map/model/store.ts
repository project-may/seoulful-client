import { atom } from 'jotai';
import { DEFAULT_LOCATION } from './constants';
import type { Location } from './types';

export const locationAtom = atom<Location>(DEFAULT_LOCATION);
