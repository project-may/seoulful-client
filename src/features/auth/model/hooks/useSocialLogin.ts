'use client';
import { useEffect } from 'react';

export const useSocialLogin = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    if (code) {
      const kakaoBody = JSON.stringify({
        code: code,
      });

      const fetchData = async () => {
        const signIn = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}auth/login/${state}`,
          {
            method: 'POST',
            body: kakaoBody,
          }
        );
      };
      fetchData().then((res) => console.log(res));
    }
  }, []);
};
