import { UserTokenType } from '@/shared';
import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage<UserTokenType>('user', {
  bookmarkList: [],
  loginMethod: 'kakao',
  nickname: ' ',
  userId: '',
  accessToken: '',
  refreshToken: '',
});
