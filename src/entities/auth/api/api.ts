import { LoginRequest, ProviderTypes, UserDTO } from '@/features/auth';

export const loginUser = async ({ provider }: ProviderTypes) => {
  if (provider === 'kakao') {
    const kakaoRestApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
    const redirectUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}/auth/kakao/callback`;
    const kakaoData = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApi}&redirect_uri=${redirectUrl}&response_type=code&state=kakao`;
    window.location.href = kakaoData;
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
