import { useEffect, useRef, useState } from 'react';

export function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    let observer;
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      observer.observe(elementRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef: elementRef };
}
