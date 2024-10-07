import * as qs from 'qs';
import { formatDate } from '@/shared';
import type { HomeQueryType, SearchQueryType } from './types';

export const makeSearchQuery = (params: Partial<SearchQueryType>) => {
  const { limit, offset, eventName, categorySeq, startDate, endDate, guSeq } =
    params;

  const queryParams: Partial<SearchQueryType> = {
    ...(eventName && { eventName }),
    ...(categorySeq && { categorySeq }),
    ...(startDate && { startDate: formatDate(startDate) }),
    ...(endDate && { endDate: formatDate(endDate) }),
    ...(guSeq && { guSeq }),
    ...(limit !== undefined && { limit }),
    ...(offset !== undefined && { offset }),
  };
  const obj = qs.stringify(queryParams);

  return obj;
};

export const makeHomeQuery = (params: HomeQueryType) => {
  const { limit, offset, categorySeq } = params;
  const queryParams: Partial<HomeQueryType> = {
    ...(limit !== undefined && { limit }),
    ...(offset !== undefined && { offset }),
    ...(categorySeq && { categorySeq }),
  };

  const obj = qs.stringify(queryParams);
  return obj;
};
