import React from 'react';
import BooksCategories from './BooksCategories';
import Books from './Books';

function Home() {
  return (
    <div className="container">
      <BooksCategories />
      <Books />
    </div>
  );
}

export default Home;
