import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currentBook, currentPage } from '../../redux/ducks/bookDuck';
import noImg from '../../images/no-image.png';
import './BookList.css';
import { currentCategorySelector, currentPageSelector } from '../../helpers/reduxSelectors';
import { COUNT_BOOKS } from '../../helpers/constants';

const getArrayCategories = (data, current) => data.reduce((acc, curr) => {
  if (curr.categories.includes(current)) {
    acc.push(curr);
  }
  return acc;
}, []);
const getPages = (data) => Math.ceil(+data.length / 15);
const getStart = (count, page) => count * (page - 1);

const getFinal = (count, curr, total) => (count * curr < total ? curr * count - 1 : total - 1);
const arrayStartPage = (data, first, last) => data.filter((_, pos) => pos >= first && pos <= last);

function BookList({ data }) {
  const total = data.length;
  console.log('🚀 ~ file: BookList.jsx ~ line 24 ~ BookList ~ total', total);
  const dispatch = useDispatch();
  const handlePage = (e) => {
    e.preventDefault();
    dispatch(currentPage(e.target.dataset.page));
  };
  const handleBookId = (e) => {
    dispatch(currentBook(e.target.dataset.id));
  };

  const currCategory = useSelector(currentCategorySelector);

  const curPage = useSelector(currentPageSelector);

  const start = getStart(COUNT_BOOKS, curPage);

  const finish = getFinal(COUNT_BOOKS, curPage, total);

  const [booksData, setBooksData] = useState(data);
  console.log('🚀 ~ file: BookList.jsx ~ line 42 ~ BookList ~ booksData', booksData);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const arr = arrayStartPage(data, start, finish);
      setBooksData(arr);
      setPageCount(getPages(data));
    }, 400);
    return () => {
      clearTimeout(id);
    };
  }, [data.length]);
  useEffect(() => {
    const id = setTimeout(() => {
      const changeArray = currCategory === null ? data : getArrayCategories(data, currCategory);
      const arr = arrayStartPage(changeArray, start, finish);
      setPageCount(getPages(changeArray));
      setBooksData(arr);
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [curPage]);

  useEffect(() => {
    const id = setTimeout(() => {
      const filterByCategory = getArrayCategories(data, currCategory);
      dispatch(currentPage(1));
      setBooksData(arrayStartPage(filterByCategory, start, finish));
      setPageCount(getPages(filterByCategory));
    }, 400);
    return () => {
      clearTimeout(id);
    };
  }, [currCategory]);

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
            booksData.map((item) => (
              <NavLink className="section-item" onClick={handleBookId} to={`/book/${item.isbn}`}>
                <section>
                  <img src={item.thumbnailUrl !== undefined ? item.thumbnailUrl : noImg} data-id={item.isbn} alt="" />
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
              data.map((_, page) => ((page > 0 && page <= pageCount) ? <li className="page"><NavLink onClick={handlePage} data-page={page} to={`/page/${page}`}>{page}</NavLink></li> : false))
            }
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default BookList;
