'use client';
import { useEffect } from 'react';
import { fetchUserData } from '@/entities/auth';
import { useRouter } from 'next/navigation';
export const useSocialLogin = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    if (code && state) {
      const kakaoBody = {
        code: code,
      };
      fetchUserData(state, kakaoBody)
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
    }
  }, []);
};
