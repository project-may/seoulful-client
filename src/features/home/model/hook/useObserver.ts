import { useEffect } from 'react';
import type { ObserverType } from '../types';

export const useObserver = ({
  target,
  callback,
  root = null,
  rootMargin = '0px',
  threshold = 1.0,
}: ObserverType) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(callback, {
        root,
        rootMargin,
        threshold,
      });

      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold]);
};
