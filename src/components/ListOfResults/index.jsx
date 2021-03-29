import React from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

const ListOfResults = () => {
  const { gifs } = useGifs();
  return (
    <main className="App-results">
      <h3 className="App-title">Last Search</h3>
      <ListOfGifs gifs={gifs} />
    </main>
  );
};

export default ListOfResults;
