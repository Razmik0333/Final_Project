import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentCategory } from '../../redux/ducks/bookDuck';

function Categories({ categories }) {
  const dispatch = useDispatch();
  const handleCategoryId = (e) => {
    dispatch(currentCategory(e.target.dataset.category));
  };
  return (
    <ul className="categories">
      {
        categories.map((category) => (
          <li className="category">
            <NavLink to={`/category/${category}`} key={category.title} onClick={handleCategoryId} data-category={category}>{category}</NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default memo(Categories);
