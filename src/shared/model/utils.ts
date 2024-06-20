import { CategoryName, CategorySeq, CategoryUrl } from '@/features/Category';
import { GuName, GuSeq } from './constants';

export const getCategoryTitleFromPathname = (path: string) => {
  const categoryKey = Object.keys(CategoryUrl).find(
    (key) => CategoryUrl[key as keyof typeof CategoryUrl] === path
  );
  if (categoryKey) {
    return CategoryName[categoryKey as keyof typeof CategoryName];
  }
  return undefined;
};

export const getCategoryNameFromCategorySeq = (seq: number) => {
  const categoryKey = CategorySeq[seq] as keyof typeof CategoryName;
  return CategoryName[categoryKey] || 'Unknown Category';
};

export const getGuNameFromGuSeq = (seq: number) => {
  const guKey = GuSeq[seq] as keyof typeof GuName;
  return GuName[guKey] || 'Unknown Gu';
};
