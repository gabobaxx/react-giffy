import { useEffect, useRef } from 'react';

export const useSEO = ({ title, description }) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute('content')
  );

  useEffect(() => {
    const previousTitle = prevTitle.current;

    if (title) {
      document.title = `${title} | Giffy`;
    }

    return () => (document.title = previousTitle);
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;
    console.log('Prev Desc:', prevDescription);
    console.log('Previous Desc:', previousDescription);

    if (description) {
      metaDescription.setAttribute('content', description);
    }

    return () => metaDescription.setAttribute('content', previousDescription);
  }, [description]);
};
