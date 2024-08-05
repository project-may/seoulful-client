import { useEffect, useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkUser = localStorage.getItem('user');
      if (checkUser) {
        setIsUserLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [showModal]);

  return { showModal, setShowModal, isUserLoggedIn, portalElement };
};
