export interface ProviderTypes {
  provider: 'kakao' | 'naver';
}

export interface LoginRequest {
  code: string;
  state?: string;
}
