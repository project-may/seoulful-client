import ThemeIcon from '/public/assets/filter-icon.svg';
import PeriodIcon from '/public/assets/calendar-icon.svg';
import LocationIcon from '/public/assets/location-icon.svg';
import TicketIcon from '/public/assets/ticket-icon.svg';
import TargetIcon from '/public/assets/user-icon.svg';
import CastIcon from '/public/assets/plus-person-icon.svg';
import ProgramIcon from '/public/assets/book-icon.svg';
import ContentIcon from '/public/assets/document-icon.svg';

export const EventIcon = {
  theme: ThemeIcon,
  period: PeriodIcon,
  place: LocationIcon,
  ticketPrice: TicketIcon,
  useTarget: TargetIcon,
  player: CastIcon,
  describe: ProgramIcon,
  etcDesc: ContentIcon,
};

export enum EventKorName {
  theme = '테마분류',
  period = '기간',
  place = '장소',
  ticketPrice = '이용요금',
  useTarget = '이용대상',
  player = '출연자 정보',
  describe = '프로그램 소개',
  etcDesc = '기타내용',
}
