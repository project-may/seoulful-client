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

export const DUMMY_CONTENT = {
  theme: '기타',
  period: '2024-08-08~2024-08-09',
  place: '세종문화회관 세종체임버홀',
  ticketPrice:
    'SUITE석 140,000원 / VIP석 120,000원 / R석 100,000원 / S석 80,000원 / A석 50,000원 / B석 30,000원',
  useTarget: '7세 이상 관람 가능(2017년생부터 관람 가능)',
  player:
    '서동갑, 손성호, 김현, 장재호, 곽지숙, 김시영, 심민섭, 홍철희, 김형준, 김다임, 강민지',
  describe:
    '한강의 기적, 그 이면에 묻혀있던 개인의 서사  우리의 삶을 세밀하게 들여다보기 위해 과거를 소환하는 연극',
  etcDesc:
    '작/연출 김지수, 조연출 이송연, 기술총괄 유재민, 그래픽디자인 이한슬',
};
