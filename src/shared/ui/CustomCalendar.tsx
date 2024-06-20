'use client';

import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';

import './customCalendar.css';
import 'react-calendar/dist/Calendar.css';
import ArrowIcon from '/public/assets/arrow-icon.svg';
import { changeCalendarMonth } from '../index';
import type { CalendarPropsType } from '../index';

export const CustomCalendar = ({
  className,
  minDetail,
  ...rest
}: CalendarPropsType) => {
  const [changeMonth, setChangeMonth] = useAtom(changeCalendarMonth);

  const isSaturday = (date: Date) => date.getDay() === 6;

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && isSaturday(date)) {
      return 'saturday';
    }
    return null;
  };

  return (
    <>
      <Calendar
        className={className}
        locale="en"
        calendarType="gregory"
        selectRange={true}
        minDetail={minDetail ?? 'month'}
        formatMonthYear={(_, date) => dayjs(date).format('YYYY.M')}
        formatDay={(_, date) => dayjs(date).format('D')}
        prevLabel={
          <span className="flex pl-[12px]">
            <ArrowIcon className="rotate-180 stroke-black-999" />
          </span>
        }
        nextLabel={
          <span className="flex justify-end pr-[4px] stroke-black-999">
            <ArrowIcon />
          </span>
        }
        prev2Label={null}
        next2Label={null}
        onActiveStartDateChange={({ activeStartDate }) =>
          setChangeMonth(dayjs(activeStartDate).format('YYYY-MM'))
        }
        tileClassName={tileClassName}
        activeStartDate={new Date(dayjs(changeMonth).format('YYYY-MM-DD'))}
        {...rest}
      />
    </>
  );
};
