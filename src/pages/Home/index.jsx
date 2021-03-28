import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';
import '../../App.css';

const POPULAR_GIFS = ['Venezuela', 'Pandas', 'Morty', 'Rick'];

function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Navigate to other route
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif"
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <h3 className="App-title">Last Search</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Trending Gifs</h3>
      <ul>
        {POPULAR_GIFS.map((pg) => {
          return (
            <li key={pg}>
              <Link to={`/search/${pg}`}>{pg} Gifs</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
