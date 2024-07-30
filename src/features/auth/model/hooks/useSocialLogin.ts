'use client';
import { useEffect } from 'react';
import { fetchUserData } from '@/entities/auth';
import { usePathname, useRouter } from 'next/navigation';
export const useSocialLogin = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    if (code) {
      if (pathname.includes('kakao')) {
        const kakaoBody = {
          code: code,
        };
        fetchUserData('kakao', kakaoBody)
          .then((user) => {
            if (user.accessToken && user.refreshToken) {
              localStorage.setItem('accessToken', user.accessToken);
              localStorage.setItem('refreshToken', user.refreshToken);
              localStorage.setItem('userId', user.userId);
            }
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
              console.log(user, 'naverUser');
              if (user.accessToken && user.refreshToken) {
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('refreshToken', user.refreshToken);
                localStorage.setItem('userId', user.userId);
              }
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
