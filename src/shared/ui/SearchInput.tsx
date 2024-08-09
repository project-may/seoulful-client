import Link from 'next/link';
import SearchIcon from '/public/assets/search-icon.svg';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export const SearchInput = ({
  icon,
  inputWidth,
  placeholder,
  placeholderAlign,
  borderRadius,
  isHome,
  register,
}: {
  icon?: boolean;
  inputWidth?: string;
  placeholder: string;
  placeholderAlign?: string;
  borderRadius?: string;
  isHome?: boolean;
  register?: UseFormRegister<FieldValues>;
}) => {
  return isHome ? (
    <Link href={'/home/search'} className="relative">
      {icon && (
        <div className="absolute top-[2px] left-[3px] flex justify-center items-center w-[31px] h-[31px] rounded-full bg-black-10">
          <SearchIcon />
        </div>
      )}
      <div
        className={`${borderRadius ?? 'rounded-full'} flex items-center w-[250px] pb-[1px] h-[35px] text-[14px] text-black-60 bg-black-10 ${placeholderAlign ?? 'pl-[37px]'} placeholder:text-black-999 placeholder:text-[13px] focus:outline-none`}
      >
        행사명을 입력하세요
      </div>
    </Link>
  ) : (
    <div className="relative">
      {icon && (
        <button
          type="submit"
          aria-label="검색"
          className="absolute top-[2px] left-[3px] flex justify-center items-center w-[31px] h-[31px] rounded-full bg-black-10"
        >
          <SearchIcon />
        </button>
      )}
      <input
        type="text"
        className={`${borderRadius ?? 'rounded-full'} ${inputWidth ?? 'w-full'} pb-[1px] h-[35px] text-[14px] text-black-60 bg-black-10 ${placeholderAlign ?? 'pl-[37px]'} placeholder:text-black-999 placeholder:text-[13px] focus:outline-none`}
        placeholder={placeholder}
        {...(register?.('eventName') ?? {})}
      />
    </div>
  );
};
