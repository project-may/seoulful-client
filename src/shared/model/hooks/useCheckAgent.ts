'use client';
import { useEffect, useState } from 'react';

export const useCheckAgent = () => {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    const agent = navigator.userAgent;
    setUserAgent(agent);
  }, []);

  return { userAgent };
};
