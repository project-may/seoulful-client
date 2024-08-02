'use client';
import type { UserDTO } from '@/features/auth';
import { useEffect, useState } from 'react';

export const useHomeCheckUser = () => {
  const [userData, setUserData] = useState<UserDTO | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const user = localStorage.getItem('user');

    if (user) {
      setUserData(JSON.parse(user) as UserDTO);
    }
  }, []);

  return { userData };
};
