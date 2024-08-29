'use client';
import { reissueToken } from '@/entities/auth/api/api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useLoginCheck = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const refreshToken = localStorage.getItem('refreshToken');
    const validateRefreshToken = async () => {
      if (refreshToken) {
        const newToken = await reissueToken(refreshToken);
        //refresh Token이 있으면서, reissueToken을 했을 때 401이 안나오는 경우에만 push 시켜줌.
        //401이 나오면 다시 로그인할 수 있게.
        if (!(typeof newToken === 'number')) {
          router.back();
        }
      }
    };
    validateRefreshToken();
  }, []);
};
