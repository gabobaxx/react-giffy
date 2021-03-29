import React from 'react';
import Category from 'components/Category';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';

const ListOfCategories = () => {
  return (
    <main className="App-category">
      <TrendingSearches />
      <Category
        name="Random"
        options={['Matrix', 'Venezuela', 'Morty', 'Rick']}
      />
      <Category name="Pets" options={['Perros', 'Gatos', 'Hamster']} />
    </main>
  );
};

export default ListOfCategories;
