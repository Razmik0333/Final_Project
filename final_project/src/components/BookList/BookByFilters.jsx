import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_BOOKS, filters } from '../../helpers/constants';
import {
  arrStart,
  getFilteredArray,
  getFinal, getPages, getStart,
} from '../../helpers/functions';
import { bookSelector, currentFilterSelector, currentPageSelector } from '../../helpers/reduxSelectors';
import { currentPage } from '../../redux/ducks/bookDuck';
import BookListItem from './BookListItem';
import FiltersOptions from './FiltersOptions';
import Pagination from './Pagination';

function BookByFilters() {
  const data = useSelector(bookSelector);
  const total = data.length;
  const dispatch = useDispatch();
  const filterAlias = useSelector(currentFilterSelector);
  const curPage = useSelector(currentPageSelector);
  const [booksData, setBooksData] = useState(data);
  const [pageCount, setPageCount] = useState(null);

  const start = getStart(COUNT_BOOKS, curPage);

  const finish = getFinal(COUNT_BOOKS, curPage, total);
  useEffect(() => {
    const id = setTimeout(() => {
      const filteredArray = getFilteredArray(data, filterAlias);
      const arr = arrStart(filteredArray, start, finish);
      dispatch(currentPage(1));
      setPageCount(getPages(data));
      setBooksData(arr);
    }, 200);
    return () => {
      clearTimeout(id);
    };
  }, [filterAlias]);
  return (
    <div className="right-side">
      <FiltersOptions filters={filters} />

      <main className="book-list">
        <BookListItem data={booksData} />
        <Pagination data={booksData} pageCount={pageCount} />
      </main>
    </div>
  );
}

export default BookByFilters;
