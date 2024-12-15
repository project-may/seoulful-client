import { useEffect, useState } from 'react';
import { reissueToken } from '@/entities/auth/api/api';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/features/auth/model/store';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  const { refreshToken } = useAtomValue(userAtom);
  useEffect(() => {
    if (!refreshToken) return setIsUserLoggedIn(false);

    const validateToken = async () => {
      const newToken = await reissueToken(refreshToken);
      if (typeof newToken === 'number') {
        setIsUserLoggedIn(false);
      } else {
        setIsUserLoggedIn(true);
      }
    };
    validateToken();
  }, [refreshToken]);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [showModal]);

  return { showModal, setShowModal, isUserLoggedIn, portalElement };
};
