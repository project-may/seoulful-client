'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useLoginCheck = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkUser = localStorage.getItem('user');
    if (checkUser) {
      router.push('/home');
    } else {
      router.push('/auth');
    }
  }, []);
};
