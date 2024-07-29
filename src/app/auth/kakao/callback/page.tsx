'use client';
import { useSocialLogin } from '@/features/auth/model/hooks/useSocialLogin';
import React from 'react';

const CallbackPage = () => {
  useSocialLogin();
  return <div></div>;
};

export default CallbackPage;
