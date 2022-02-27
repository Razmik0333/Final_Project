import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_BOOKS, filters } from '../../helpers/constants';
import {
  arrStart,
  getFilteredArray,
  getFinal, getPages, getStart,
} from '../../helpers/functions';
import {
  bookSelector, currentFilterSelector, currentPageSelector,
} from '../../helpers/reduxSelectors';
import { currentPage } from '../../redux/ducks/bookDuck';
import Loader from '../Loader/Loader';
import BookListItem from './BookListItem';
import FiltersOptions from './FiltersOptions';
import Pagination from './Pagination';

export const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.item.reduce((total, book) => total + book.price, 0),
//   count: cart.item.length,
});

function BookByFilters() {
  const data = useSelector(bookSelector);
  const total = data.length;
  const dispatch = useDispatch();
  const filterAlias = useSelector(currentFilterSelector);
  const curPage = useSelector(currentPageSelector);
  const [booksData, setBooksData] = useState(data);
  const [pageCount, setPageCount] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const start = getStart(COUNT_BOOKS, curPage);

  const finish = getFinal(COUNT_BOOKS, curPage, total);
  const getFitered = (() => {
    const filteredArray = getFilteredArray(data, filterAlias);
    dispatch(currentPage(1));
    setPageCount(getPages(data));
    setBooksData(arrStart(filteredArray, start, finish));
    setIsLoaded(true);
  });
  const getArrFromInterval = () => {
    /// const changeArray = currCategory === null ? data : getArrayCategories(data, currCategory);
    const arr = arrStart(data, start, finish);
    setPageCount(getPages(data));
    setBooksData(arr);
    setIsLoaded(true);
  };
  useEffect(() => {
    const id = setTimeout(() => getArrFromInterval(), 300);
    return () => {
      clearTimeout(id);
      setIsLoaded(false);
    };
  }, [curPage]);
  useEffect(() => {
    const id = setTimeout(() => {
      getFitered();
    }, 1000);
    return () => {
      setIsLoaded(false);
      clearTimeout(id);
    };
  }, [filterAlias]);
  return (
    <div className="right-side">
      <FiltersOptions filters={filters} />
      {
        isLoaded ? (
          <main className="book-list">
            <BookListItem data={booksData} />
            <Pagination data={booksData} pageCount={pageCount} />
          </main>
        )
          : <Loader />
      }

    </div>
  );
}

export default BookByFilters;
