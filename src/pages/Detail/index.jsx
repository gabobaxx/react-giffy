import React from 'react';
import Gif from '../../components/Gif';
import {useGlobalGifs} from '../../hooks/useGlobalGifs';

function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((g) => g.id === params.id);

  return <Gif {...gif} />;
}

export default Detail;
