import dayjs from 'dayjs';
import { atom } from 'jotai';
import type { CalendarDateType } from './types';

const thisMonth = dayjs(new Date()).format('YYYY-MM');

export const clickedCalendarDate = atom<CalendarDateType>(new Date());
export const changeCalendarMonth = atom<string>(thisMonth);
