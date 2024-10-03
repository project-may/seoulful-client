export interface ProviderTypes {
  provider: 'kakao' | 'naver';
}

export interface UserDTO {
  userId: string;
  loginMethod: 'naver' | 'kakao';
  nickname: string;
  profileImg: string | null;
  bookmarkList: number[];
  accessToken: string;
  refreshToken: string;
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

export interface ValidateTokenType {
  statusCode: number;
  message: string;
  timestamp: number;
}

export interface ValidateTokenDTO {
  userId: string;
  accessToken: string;
  refreshToken: string;
  eventId: number;
}
