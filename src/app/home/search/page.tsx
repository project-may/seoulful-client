'use client';
import { CategoryName } from '@/features/Category';
import { useForm, Controller } from 'react-hook-form';
import {
  SearchTitle,
  CustomCalendar,
  Header,
  SearchInput,
  GuName,
  Selectbox,
} from '@/shared';
import { useRouter } from 'next/navigation';
import { makeSearchQuery } from '@/features/home/model/util';
import { SearchQueryType } from '@/features/home';

const AdvancedSearch = () => {
  const { register, handleSubmit, control } = useForm();
  const categoryValueArr = Object.values(CategoryName);
  const guNameArr = Object.values(GuName);
  const router = useRouter();

  const onSubmit = ({
    eventName,
    categorySeq,
    startDate,
    endDate,
    guSeq,
  }: Omit<SearchQueryType, 'limit' | 'offset'>) => {
    const query = makeSearchQuery({
      eventName,
      categorySeq,
      startDate,
      endDate,
      guSeq,
    });

    router.push(`/home/search/result?${query}`);
  };
  return (
    <div>
      <Header isBackButton title="상세 검색" />
      <form
        onSubmit={handleSubmit(
          ({ eventName, categorySeq, dateRange, guSeq }) => {
            onSubmit({
              eventName,
              categorySeq,
              startDate: dateRange?.[0],
              endDate: dateRange?.[1],
              guSeq,
            });
          }
        )}
        className="flex flex-col px-[30px] pt-[20px] divide-y divide-black-DDD"
      >
        <SearchTitle title="행사명">
          <SearchInput
            register={register}
            placeholder="행사명을 입력해주세요"
            placeholderAlign="text-center"
            borderRadius="rounded-[5px]"
          />
        </SearchTitle>
        <SearchTitle title="기간">
          <Controller
            name="dateRange"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomCalendar
                className="detailSearchCalendar"
                onChange={(date) => {
                  onChange(date);
                }}
                value={value}
              />
            )}
          />
        </SearchTitle>
        <SearchTitle title="카테고리">
          <Selectbox
            seqType="categorySeq"
            optionData={categoryValueArr}
            placeholder="카테고리를 선택해주세요."
            register={register}
          />
        </SearchTitle>
        <SearchTitle title="지역">
          <Selectbox
            seqType="guSeq"
            optionData={guNameArr}
            placeholder="지역을 선택해주세요."
            register={register}
          />
        </SearchTitle>
        <button
          type="submit"
          className="my-[50px] w-full h-[35px] bg-blue-10 text-[14px] font-semibold text-black-FFF rounded-full"
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
