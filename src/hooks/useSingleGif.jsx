import { useGifs } from 'hooks/useGifs';
import { useEffect, useState } from 'react';
import getSingleGif from 'services/getSingleGif';

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      // call service if there are not gif.
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(true);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
};
