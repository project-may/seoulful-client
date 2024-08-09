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
import { useRouter } from 'next/navigation';

const AdvancedSearch = () => {
  const { register, handleSubmit, control } = useForm();
  const categoryValueArr = Object.values(CategoryName);
  const guNameArr = Object.values(GuName);
  const router = useRouter();
  const onSubmit = ({
    eventName,
    categorySeq,
    dateRange,
    guSeq,
  }: {
    eventName: string;
    categorySeq?: string;
    dateRange?: [string | null, string | null];
    guSeq: string;
  }) => {
    const params = new URLSearchParams();

    // eventName은 필수
    if (eventName) {
      params.append('eventName', eventName);
    }

    // 선택사항들
    if (categorySeq) {
      params.append(
        'categorySeq',
        getCategorySeqByName(categorySeq).toString()
      );
    }
    if (dateRange?.[0]) {
      params.append('startDate', dateRange[0]);
    }
    if (dateRange?.[1]) {
      params.append('endDate', dateRange[1]);
    }
    if (guSeq) {
      params.append('guSeq', getGuSeqByName(guSeq).toString());
    }

    console.log(params.toString(), 'param');
    // router.push(`/home/search/result?${params.toString()}`);
  };
  return (
    <div>
      <Header isBackButton title="상세 검색" />
      <form
        onSubmit={handleSubmit(({ eventName, categorySeq, dateRange, guSeq }) =>
          onSubmit({ eventName, categorySeq, dateRange, guSeq })
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
