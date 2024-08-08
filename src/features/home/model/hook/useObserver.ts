import { useEffect } from 'react';
import { ObserverType } from '../types';

export const useObserver = ({
  target,
  callback,
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
}: ObserverType) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    if (target && target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, root, rootMargin, threshold, callback]);
};
