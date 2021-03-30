import { useContext, useEffect, useState } from 'react';

import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';


const INITIAL_PAGES = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState();
  const [page, setPage] = useState(INITIAL_PAGES);
  const { gifs, setGifs } = useContext(GifsContext);
  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';
  useEffect(
    function () {
      setLoading(true);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );
  useEffect(() => {
    if (page === INITIAL_PAGES) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
};
