import { LoginRequest, ProviderTypes, UserDTO } from '@/features/auth';

export const loginUser = async ({ provider }: ProviderTypes) => {
  if (provider === 'kakao') {
    const kakaoRestApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
    const redirectUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}/auth/kakao/callback`;
    const kakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApi}&redirect_uri=${redirectUrl}&response_type=code&state=kakao`;
    window.location.href = kakaoLogin;
  } else {
    const naverClientID = process.env.NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID;
    const STATE = process.env.NEXT_PUBLIC_NAVER_STATE;
    const redirectUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}/auth/naver/callback`;
    const naverLogin = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientID}&state=${STATE}&redirect_uri=${redirectUrl}`;
    window.location.href = naverLogin;
  }
};

export const fetchUserData = async (
  state: string,
  kakaoBody: LoginRequest
): Promise<UserDTO> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/login/${state}`,
    {
      method: 'POST',
      body: JSON.stringify(kakaoBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data.data;
};
