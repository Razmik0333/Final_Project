import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/ducks/bookDuck';
import { bookSelector, currentCategorySelector, currentPageSelector } from '../../helpers/reduxSelectors';
import { COUNT_BOOKS, filters } from '../../helpers/constants';
import BookListItem from './BookListItem';
import Pagination from './Pagination';
import FiltersOptions from './FiltersOptions';
import {
  arrStart, getArrayCategories, getFinal, getPages, getStart,
} from '../../helpers/functions';
import Loader from '../Loader/Loader';
import './BookList.css';

function BookListDefault() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const data = useSelector(bookSelector);
  const total = data.length;
  const [booksData, setBooksData] = useState(data);

  const [pageCount, setPageCount] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const curPage = useSelector(currentPageSelector);

  const start = getStart(COUNT_BOOKS, curPage);
  const currCategory = useSelector(currentCategorySelector);
  const finish = getFinal(COUNT_BOOKS, curPage, total);
  const getArrData = () => {
    const arr = arrStart(data, start, finish);
    setBooksData(arr);
    setPageCount(getPages(data));
    setIsLoaded(true);
  };
  const getArrFromInterval = () => {
    const changeArray = currCategory === null ? data : getArrayCategories(data, currCategory);
    const arr = arrStart(changeArray, start, finish);
    setPageCount(getPages(changeArray));
    setBooksData(arr);
    setIsLoaded(true);
  };

  useEffect(() => {
    const id = setTimeout(() => getArrData(), 200);
    return () => {
      setIsLoaded(false);
      clearTimeout(id);
    };
  }, [data.length]);

  useEffect(() => {
    const id = setTimeout(() => getArrFromInterval(), 300);
    return () => {
      clearTimeout(id);
      setIsLoaded(false);
    };
  }, [curPage]);

  return (
    <div className="right-side">

      <FiltersOptions filters={filters} />
      {

      isLoaded ? (
        <main className="book-list">
          <BookListItem data={booksData} />
          <Pagination data={data} pageCount={pageCount} />
        </main>
      )
        : <Loader />
      }

    </div>
  );
}

export default BookListDefault;
