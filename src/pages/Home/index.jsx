import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs/';
import Category from '../../components/Category';
import TrendingSearches from '../../components/TrendingSearches';

const POPULAR_GIFS = ['Matrix', 'Venezuela', 'Pandas', 'Morty', 'Rick'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  console.log(path, loading);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navigate to other route
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Last Search</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
          <Category name="Random" options={POPULAR_GIFS} />
          <Category name="Pets" options={['Perros', 'Gatos', 'Hamster']} />
        </div>
      </div>
    </>
  );
}
