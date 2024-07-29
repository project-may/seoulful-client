import { ProviderTypes } from '@/features/login';

export const loginUser = async ({ provider }: ProviderTypes) => {
  if (provider === 'kakao') {
    const kakaoRestApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
    const redirectUrl = `${process.env.NEXT_PUBLIC_LOCAL_HOST}/login/auth/callback`;
    const kakaoData = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApi}&redirect_uri=${redirectUrl}&response_type=code`;
    window.location.href = kakaoData;
    const code = new URL(window.location.href).searchParams.get('code');
    const kakaoBody = JSON.stringify({
      code: code,
      state: '',
    });
    const signIn = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}auth/login/${provider}`,
      {
        method: 'POST',

        body: kakaoBody,
      }
    );

    console.log(signIn);
  }
};
