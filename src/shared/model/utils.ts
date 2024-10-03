import { CategoryName, CategorySeq, CategoryUrl } from '@/features/Category';
import { GuName, GuSeq } from './constants';
import dayjs from 'dayjs';

export const formatDate = (inputString: string) => {
  const parsedDate = dayjs(inputString);
  const formattedDate = parsedDate.format('YYYY.M.D HH:MM');

  return formattedDate;
};

export const getCategoryTitleFromPathname = (path: string) => {
  const categoryKey = Object.keys(CategoryUrl).find(
    (key) => CategoryUrl[key as keyof typeof CategoryUrl] === path
  );
  if (categoryKey) {
    return CategoryName[categoryKey as keyof typeof CategoryName];
  }
  return undefined;
};

export const getCategorySeqFromPathname = (path: string) => {
  const categoryKey = Object.keys(CategoryUrl).find(
    (key) => CategoryUrl[key as keyof typeof CategoryUrl] === path
  );
  if (categoryKey) {
    return CategorySeq[categoryKey as keyof typeof CategorySeq];
  }
  return undefined;
};

export const getCategoryNameFromCategorySeq = (seq: number) => {
  const categoryKey = CategorySeq[seq] as keyof typeof CategoryName;
  return CategoryName[categoryKey] || '정보를 불러오고 있습니다';
};

export const getCategoryUrlFromCategorySeq = (seq: number) => {
  const categoryKey = CategorySeq[seq] as keyof typeof CategoryUrl;
  return CategoryUrl[categoryKey] || '정보를 불러오고 있습니다';
};

export const getGuNameFromGuSeq = (seq: number | null) => {
  if (seq) {
    const guKey = GuSeq[seq] as keyof typeof GuName;
    return GuName[guKey];
  } else return '정보를 불러오고 있습니다';
};

export const getCategorySeqByName = (categoryName: string) => {
  const categoryMap = Object.keys(CategoryName).reduce(
    (acc, key) => {
      const value = CategoryName[key as keyof typeof CategoryName];
      acc[value] = CategorySeq[key as keyof typeof CategorySeq];
      return acc;
    },
    {} as Record<string, number>
  );
  return categoryMap[categoryName];
};

export const getGuSeqByName = (guName: string) => {
  const guMap = Object.keys(GuName).reduce(
    (acc, key) => {
      const value = GuName[key as keyof typeof GuName];
      acc[value] = GuSeq[key as keyof typeof GuSeq];
      return acc;
    },
    {} as Record<string, number>
  );
  return guMap[guName];
};

export const filterParams = <T extends Record<string, unknown>>(
  params: T
): Record<string, string> => {
  return Object.keys(params).reduce(
    (acc, key) => {
      const value = params[key];
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    },
    {} as Record<string, string>
  );
};
