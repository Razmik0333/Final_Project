import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentCategory } from '../../redux/ducks/bookDuck';
import './BookCategories.css';

const getCategories = (data) => data.reduce((acc, curr) => {
  curr.categories.forEach((item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
  });
  return acc;
}, []);
function BooksCategories({ data }) {
  const categories = getCategories(data);
  const dispatch = useDispatch();
  const handleCategoryId = (e) => {
    dispatch(currentCategory(e.target.dataset.category));
  };
  return (
    <aside>
      <h1>Categories</h1>
      <h1 className="all">All</h1>
      <p>Fiction & Literature</p>
      <ul className="categories">
        {
        categories.map((category) => (
          <li className="category">
            <NavLink to={`/category/${category}`} key={category.title} onClick={handleCategoryId} data-category={category}>{category}</NavLink>
          </li>
        ))
      }
      </ul>
    </aside>
  );
}

export default BooksCategories;
