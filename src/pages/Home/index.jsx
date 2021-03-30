import React, { useCallback } from 'react';
// Hooks
import { useLocation } from 'wouter';
// Components
import ListOfCategories from 'components/ListOfCategories';
import ListOfResults from 'components/ListOfResults';
import SearchForm from 'components/SearchForm';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();

  // Navigate to other route.
  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <main className="App-main">
        <ListOfResults />
        <ListOfCategories />
      </main>
    </>
  );
}
