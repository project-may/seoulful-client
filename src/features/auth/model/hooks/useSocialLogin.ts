'use client';
import { useEffect } from 'react';
import { fetchUserData } from '@/entities/auth';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
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
        fetchUserData('kakao', kakaoBody)
          .then((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            router.replace('/home');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } else {
        if (state) {
          const naverBody = {
            code,
            state,
          };
          fetchUserData('naver', naverBody)
            .then((user) => {
              localStorage.setItem('user', JSON.stringify(user));
              router.replace('/home');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      }
    }
  }, []);
};
