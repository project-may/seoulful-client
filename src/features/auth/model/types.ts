export interface ProviderTypes {
  provider: 'kakao' | 'naver';
}

export interface UserDTO {
  userId: string;
  loginMethod: 'naver' | 'kakao';
  nickname: string;
  email: string | null;
  profileImg: string | null;
  bookmarkList: number[];
  accessToken: string | null;
  refreshToken: string | null;
  createdAt: Date;
}

export interface UserResponseDTO {
  data: UserDTO;
}

export interface NaverPayload {
  code: string;
  state: string;
}

export interface KakaoPayload {
  code: string;
  redirectUrl: string;
}
