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

export interface LoginRequest {
  code: string;
  state?: string;
}
