import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentPage } from '../../redux/ducks/bookDuck';

function Pagination({ data, pageCount }) {
  const dispatch = useDispatch();
  const handlePage = (e) => {
    e.preventDefault();
    dispatch(currentPage(e.target.dataset.page));
  };
  return (
    <nav className="pagination">
      <ul className="pages">
        {
          data.map((_, page) => ((page > 0 && page <= pageCount) ? <li className="page"><NavLink onClick={handlePage} data-page={page} to={`/page/${page}`}>{page}</NavLink></li> : false))
          }
      </ul>
    </nav>
  );
}
export default Pagination;
