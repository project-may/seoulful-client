'use client';
import { useLoginCheck } from '@/features/auth';
import { useSocialLogin } from '@/features/auth/model/hooks/useSocialLogin';
import React from 'react';

const CallbackPage = () => {
  useSocialLogin();
  useLoginCheck();
  return <div></div>;
};

export default CallbackPage;
