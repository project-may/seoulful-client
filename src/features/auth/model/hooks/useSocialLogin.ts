'use client';
import { useEffect } from 'react';
import { fetchUserData } from '@/entities/auth';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { setStorageValue } from '@/shared';
export const useSocialLogin = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const redirectUrl = isProduction
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : process.env.NEXT_PUBLIC_LOCAL_HOST;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (code) {
      if (pathname.includes('kakao')) {
        const kakaoBody = {
          code: code,
          redirectUrl: `${redirectUrl}/auth/kakao/callback`,
        };
        const fetchData = async () => {
          const { accessToken, nickname, loginMethod, refreshToken, userId } =
            await fetchUserData('kakao', kakaoBody);
          setStorageValue(
            'user',
            JSON.stringify({ nickname, loginMethod, userId })
          );
          setStorageValue('refreshToken', refreshToken);
          setStorageValue('accessToken', accessToken);
          router.replace('/home');
        };

        fetchData();
      } else {
        if (state) {
          const naverBody = {
            code,
            state,
          };
          const fetchData = async () => {
            const { accessToken, email, loginMethod, refreshToken, userId } =
              await fetchUserData('naver', naverBody);
            setStorageValue(
              'user',
              JSON.stringify({ email, loginMethod, userId })
            );
            setStorageValue('refreshToken', refreshToken);
            setStorageValue('accessToken', accessToken);
            router.replace('/home');
          };

          fetchData();
        }
      }
    }
  }, []);
};
