import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_BOOKS, filters } from '../../helpers/constants';
import {
  arrStart, getArrayCategories, getFinal, getPages, getStart,
} from '../../helpers/functions';
import { bookSelector, currentCategorySelector, currentPageSelector } from '../../helpers/reduxSelectors';
import { currentPage } from '../../redux/ducks/bookDuck';
import Loader from '../Loader/Loader';
import BookListItem from './BookListItem';
import FiltersOptions from './FiltersOptions';
import Pagination from './Pagination';

function BookByCategory() {
  const dispatch = useDispatch();
  const data = useSelector(bookSelector);
  const total = data.length;
  const [categoryData, setCategoryData] = useState(data);

  const [pageCount, setPageCount] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const currCategory = useSelector(currentCategorySelector);
  const curPage = useSelector(currentPageSelector);

  const start = getStart(COUNT_BOOKS, curPage);

  const finish = getFinal(COUNT_BOOKS, curPage, total);
  const getBooksArrayByCategories = () => {
    const filterByCategory = getArrayCategories(data, currCategory);
    dispatch(currentPage(1));
    setCategoryData(arrStart(filterByCategory, start, finish));
    setPageCount(getPages(filterByCategory));
    setIsLoaded(true);
  };
  useEffect(() => {
    const id = setTimeout(() => getBooksArrayByCategories(), 400);
    return () => {
      clearTimeout(id);
      setIsLoaded(false);
    };
  }, [currCategory]);
  const getArrFromInterval = () => {
    const changeArray = currCategory === null ? data : getArrayCategories(data, currCategory);
    const arr = arrStart(changeArray, start, finish);
    setPageCount(getPages(changeArray));
    setCategoryData(arr);
    setIsLoaded(true);
  };
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
            <BookListItem data={categoryData} />
            <Pagination data={data} pageCount={pageCount} />
          </main>
        )
          : <Loader />
      }

    </div>
  );
}

export default BookByCategory;
