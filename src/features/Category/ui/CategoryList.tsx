import { CategoryItem } from '@/shared';
import { CategoryName, CategoryUrl, CategoryIcons } from '../index';

export const CategoryList = () => {
  const categoryKeys = Object.keys(CategoryName) as Array<
    keyof typeof CategoryName
  >;

  return (
    <ul className="flex gap-x-[15px] overflow-x-auto">
      {categoryKeys.map((key) => {
        const url = CategoryUrl[key];
        const name = CategoryName[key];
        const Icon = CategoryIcons[url];
        return (
          <CategoryItem
            key={`category-${key}`}
            Icon={Icon}
            url={`/home/${url}`}
            title={name}
          />
        );
      })}
    </ul>
  );
};
