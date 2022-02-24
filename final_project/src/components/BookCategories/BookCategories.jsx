// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bookSelector } from '../../helpers/reduxSelectors';
// import { fetchBooks } from '../../redux/ducks/bookDuck';
import './BookCategories.css';
import Categories from './Categories';

const getCategories = (data) => data.reduce((acc, curr) => {
  curr.categories.forEach((item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);
function BooksCategories() {
  const data = useSelector(bookSelector);
  const categories = getCategories(data);

  return (
    <aside>
      <h1>Categories</h1>
      <NavLink to="/"><h1 className="all">All</h1></NavLink>
      <p>Fiction & Literature</p>
      <Categories categories={categories} />
    </aside>
  );
}

export default BooksCategories;
