'use client';
import { useEffect } from 'react';
import { fetchUserData } from '@/entities/auth';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { userAtom } from '../store';
export const useSocialLogin = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const redirectUrl = isProduction
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : process.env.NEXT_PUBLIC_LOCAL_HOST;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setUserValue = useSetAtom(userAtom);

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
          const userData = await fetchUserData('kakao', kakaoBody);
          if (userData) {
            setUserValue(userData);
          }
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
            const userData = await fetchUserData('naver', naverBody);
            if (userData) {
              setUserValue(userData);
            }
            router.replace('/home');
          };

          fetchData();
        }
      }
    }
  }, []);
};
