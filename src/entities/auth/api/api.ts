import { ProviderTypes } from '@/features/auth';

export const loginUser = async ({ provider }: ProviderTypes) => {
  if (provider === 'kakao') {
    const kakaoRestApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
    const redirectUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}/auth/kakao/callback`;
    const kakaoData = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApi}&redirect_uri=${redirectUrl}&response_type=code&state=kakao`;
    window.location.href = kakaoData;
  }
};
