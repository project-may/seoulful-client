'use client';
import { useLoginCheck } from '@/features/auth';
import { useSocialLogin } from '@/features/auth/model/hooks/useSocialLogin';
import { LoadingComponent } from '@/shared';
import React, { Suspense } from 'react';

const CallbackPage = () => {
  useSocialLogin();
  useLoginCheck();
  return (
    <Suspense>
      <LoadingComponent />
    </Suspense>
  );
};

export default CallbackPage;
