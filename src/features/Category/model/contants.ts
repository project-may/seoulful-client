import EducationIcon from '/public/assets/education-icon.svg';
import KoreanMusicIcon from '/public/assets/korean-music-icon.svg';
import SoloPerformanceIcon from '/public/assets/solo-performance-icon.svg';
import DanceIcon from '/public/assets/dance-icon.svg';
import MusicalIcon from '/public/assets/musical-icon.svg';
import PlayIcon from '/public/assets/play-icon.svg';
import MovieIcon from '/public/assets/movie-icon.svg';
import ExhibitionIcon from '/public/assets/exhibition-icon.svg';
import FestivalIcon from '/public/assets/festival-icon.svg';
import ConcertIcon from '/public/assets/concert-icon.svg';
import ClassicIcon from '/public/assets/classic-icon.svg';
import OtherIcon from '/public/assets/other-icon.svg';

export enum CategorySeq {
  EDUCATION_EXPERIENCE = 1,
  KOREAN_MUSIC,
  SOLO_PERFORMANCE,
  DANCE,
  MUSICAL_OPERA,
  PLAY,
  MOVIE,
  EXHIBITION_ART,
  FESTIVAL_OTHER,
  FESTIVAL_CULTURE_ART,
  FESTIVAL_CITIZEN_HARMONY,
  FESTIVAL_NATURE_SCENERY,
  FESTIVAL_TRADITION_HISTORY,
  CONCERT,
  CLASSIC,
  OTHER,
}

export enum CategoryName {
  EDUCATION_EXPERIENCE = '교육/체험',
  KOREAN_MUSIC = '국악',
  SOLO_PERFORMANCE = '독주/독창회',
  DANCE = '무용',
  MUSICAL_OPERA = '뮤지컬/오페라',
  PLAY = '연극',
  MOVIE = '영화',
  EXHIBITION_ART = '전시/미술',
  FESTIVAL_OTHER = '축제-기타',
  FESTIVAL_CULTURE_ART = '축제-문화/예술',
  FESTIVAL_CITIZEN_HARMONY = '축제-시민화합',
  FESTIVAL_NATURE_SCENERY = '축제-자연/경관',
  FESTIVAL_TRADITION_HISTORY = '축제-전통/역사',
  CONCERT = '콘서트',
  CLASSIC = '클래식',
  OTHER = '기타',
}

export enum CategoryUrl {
  EDUCATION_EXPERIENCE = 'education-experience',
  KOREAN_MUSIC = 'korean-music',
  SOLO_PERFORMANCE = 'solo-performance',
  DANCE = 'dance',
  MUSICAL_OPERA = 'musical-opera',
  PLAY = 'play',
  MOVIE = 'movie',
  EXHIBITION_ART = 'exhibition-art',
  FESTIVAL_OTHER = 'festival-other',
  FESTIVAL_CULTURE_ART = 'festival-culture-art',
  FESTIVAL_CITIZEN_HARMONY = 'festival-citizen-harmony',
  FESTIVAL_NATURE_SCENERY = 'festival-nature-scenery',
  FESTIVAL_TRADITION_HISTORY = 'festival-tradition-history',
  CONCERT = 'concert',
  CLASSIC = 'classic',
  OTHER = 'other',
}

export const CategoryIcons = {
  [CategoryUrl.EDUCATION_EXPERIENCE]: EducationIcon,
  [CategoryUrl.KOREAN_MUSIC]: KoreanMusicIcon,
  [CategoryUrl.SOLO_PERFORMANCE]: SoloPerformanceIcon,
  [CategoryUrl.DANCE]: DanceIcon,
  [CategoryUrl.MUSICAL_OPERA]: MusicalIcon,
  [CategoryUrl.PLAY]: PlayIcon,
  [CategoryUrl.MOVIE]: MovieIcon,
  [CategoryUrl.EXHIBITION_ART]: ExhibitionIcon,
  [CategoryUrl.FESTIVAL_OTHER]: FestivalIcon,
  [CategoryUrl.FESTIVAL_CULTURE_ART]: FestivalIcon,
  [CategoryUrl.FESTIVAL_CITIZEN_HARMONY]: FestivalIcon,
  [CategoryUrl.FESTIVAL_NATURE_SCENERY]: FestivalIcon,
  [CategoryUrl.FESTIVAL_TRADITION_HISTORY]: FestivalIcon,
  [CategoryUrl.CONCERT]: ConcertIcon,
  [CategoryUrl.CLASSIC]: ClassicIcon,
  [CategoryUrl.OTHER]: OtherIcon,
};
