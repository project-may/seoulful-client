import { atom } from 'jotai';
import { EventDetail } from './types';
import { DEFAULT_CURRENT_EVENT } from './constants';

export const currentEventAtom = atom<EventDetail>(DEFAULT_CURRENT_EVENT);
