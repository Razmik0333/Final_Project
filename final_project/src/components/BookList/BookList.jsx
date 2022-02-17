import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentBook } from '../../redux/ducks/bookDuck';

import './BookList.css';

function BookList({ data }) {
  const dispatch = useDispatch();
  const pageCount = Math.floor(+data.length / 15) + 1;
  const handleId = (e) => {
    // e.preventDefault();
    dispatch(currentBook(e.target.dataset.id));

    localStorage.setItem('bookId', e.target.dataset.id);
  };

  return (
    <div className="right-side">
      <nav className="filter-bar">
        <NavLink className="filter-items active-filter" to="/best_sellers">Best sellers</NavLink>
        <NavLink className="filter-items" to="/new_arrivals">New Arrivals</NavLink>
        <NavLink className="filter-items" to="/used_books">Used Books</NavLink>
        <NavLink className="filter-items" to="/special_offers">Special Offers</NavLink>
      </nav>
      <main className="book-list">
        <article>
          {
          data.map((item) => (
            <NavLink className="section-item" onClick={handleId} to={`book/${item.isbn}`}>
              <section>
                <img src={item.thumbnailUrl} data-id={item.isbn} alt="" />
                <p className="book-title">
                  <span>
                    {item.title}
                  </span>
                </p>
                <p className="book-cost">
                  {item.pageCount * 10}
                  &#1423;
                </p>
              </section>
            </NavLink>
          ))
          }

        </article>
        <nav className="pagination">
          <ul className="pages">
            {
              data.map((_, page) => (page < pageCount ? <li className="page"><NavLink to={`/page/${page + 1}`}>{page + 1}</NavLink></li> : false))
            }
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default BookList;
