import React, { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
// Components
import Spinner from 'components/Spinner';
import ListOfGifs from 'components/ListOfGifs';
// Hooks
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import { useSEO } from 'hooks/useSEO';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const externalRef = useRef();
  const { loading, gifs, setPage } = useGifs({ keyword });
  const title = gifs ? `${gifs.length} results of ${keyword}` : '';

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  useSEO({ title, description: 'Gif Searcher' });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
