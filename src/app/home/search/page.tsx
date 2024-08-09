'use client';
import { CategoryName } from '@/features/Category';
import {
  AccordionMenu,
  CustomCalendar,
  Header,
  SearchInput,
  GuName,
  Selectbox,
} from '@/shared';

const AdvancedSearch = () => {
  const categoryValueArr = Object.values(CategoryName);
  const guNameArr = Object.values(GuName);

  return (
    <div>
      <Header isBackButton title="상세 검색" />
      <form className="flex flex-col px-[30px] pt-[20px] divide-y divide-black-DDD">
        <AccordionMenu title="행사명">
          <SearchInput
            placeholder="행사명을 입력해주세요"
            placeholderAlign="text-center"
            borderRadius="rounded-[5px]"
          />
        </AccordionMenu>
        <AccordionMenu title="기간">
          <CustomCalendar
            className="detailSearchCalendar"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </AccordionMenu>
        <AccordionMenu title="카테고리">
          <Selectbox
            optionData={categoryValueArr}
            placeholder="카테고리를 선택해주세요."
          />
        </AccordionMenu>
        <AccordionMenu title="지역">
          <Selectbox
            optionData={guNameArr}
            placeholder="지역을 선택해주세요."
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
