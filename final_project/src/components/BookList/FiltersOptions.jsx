import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentFilter } from '../../redux/ducks/bookDuck';

function FiltersOptions({ filters }) {
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(currentFilter(e.target.dataset.filter));
  return (
    <nav className="filter-bar">
      {
          filters.map((filter) => <NavLink className="filter-items active-filter" onClick={handleFilter} data-filter={`${filter.alias}`} to={`/filter/${filter.alias}`}>{filter.arm}</NavLink>)
        }
    </nav>
  );
}

export default FiltersOptions;
