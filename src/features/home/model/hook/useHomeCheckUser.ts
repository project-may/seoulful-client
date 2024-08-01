import type { UserDTO } from '@/features/auth';
import { useEffect, useState } from 'react';

export const useHomeCheckUser = () => {
  const [userData, setUserData] = useState<UserDTO>();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = localStorage.getItem('user');
    if (user) {
      setUserData(userData);
    }
  }, []);
  return { userData };
};
