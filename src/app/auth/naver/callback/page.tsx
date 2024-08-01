'use client';
import { useLoginCheck } from '@/features/auth';
import { useSocialLogin } from '@/features/auth/model/hooks/useSocialLogin';
import { LoadingComponent } from '@/shared';
import React, { Suspense } from 'react';

const CallbackComponent = () => {
  useSocialLogin();
  useLoginCheck();
  return null;
};
const CallbackPage = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <CallbackComponent />
    </Suspense>
  );
};

export default CallbackPage;
