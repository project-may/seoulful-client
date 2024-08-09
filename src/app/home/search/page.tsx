'use client';
import { CategoryName } from '@/features/Category';
import { useForm, Controller } from 'react-hook-form';
import {
  AccordionMenu,
  CustomCalendar,
  Header,
  SearchInput,
  GuName,
  Selectbox,
  getCategorySeqByName,
  getGuSeqByName,
} from '@/shared';

const AdvancedSearch = () => {
  const { register, handleSubmit, control } = useForm();
  const categoryValueArr = Object.values(CategoryName);
  const guNameArr = Object.values(GuName);

  return (
    <div>
      <Header isBackButton title="상세 검색" />
      <form
        onSubmit={handleSubmit(({ eventName, categorySeq, dateRange, guSeq }) =>
          console.log(
            JSON.stringify({
              eventName,
              categorySeq: getCategorySeqByName(categorySeq),
              dateRange,
              guSeq: getGuSeqByName(guSeq),
            })
          )
        )}
        className="flex flex-col px-[30px] pt-[20px] divide-y divide-black-DDD"
      >
        <AccordionMenu title="행사명">
          <SearchInput
            register={register}
            placeholder="행사명을 입력해주세요"
            placeholderAlign="text-center"
            borderRadius="rounded-[5px]"
          />
        </AccordionMenu>
        <AccordionMenu title="기간">
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
        </AccordionMenu>
        <AccordionMenu title="카테고리">
          <Selectbox
            seq="categorySeq"
            optionData={categoryValueArr}
            placeholder="카테고리를 선택해주세요."
            register={register}
            // setValue={setValue}
          />
        </AccordionMenu>
        <AccordionMenu title="지역">
          <Selectbox
            seq="guSeq"
            optionData={guNameArr}
            placeholder="지역을 선택해주세요."
            register={register}
            // setValue={setValue}
          />
        </AccordionMenu>
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
