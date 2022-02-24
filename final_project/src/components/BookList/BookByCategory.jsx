import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNT_BOOKS, filters } from '../../helpers/constants';
import {
  arrStart, getArrayCategories, getFinal, getPages, getStart,
} from '../../helpers/functions';
import { bookSelector, currentCategorySelector, currentPageSelector } from '../../helpers/reduxSelectors';
import { currentPage } from '../../redux/ducks/bookDuck';
import BookListItem from './BookListItem';
import FiltersOptions from './FiltersOptions';
import Pagination from './Pagination';

function BookByCategory() {
  const dispatch = useDispatch();
  const data = useSelector(bookSelector);
  const total = data.length;
  const [categoryData, setCategoryData] = useState(data);
  console.log('🚀 ~ file: BookByCategory.jsx ~ line 18 ~ BookByCategory ~ categoryData', categoryData);

  const [pageCount, setPageCount] = useState(null);
  const currCategory = useSelector(currentCategorySelector);
  const curPage = useSelector(currentPageSelector);

  const start = getStart(COUNT_BOOKS, curPage);

  const finish = getFinal(COUNT_BOOKS, curPage, total);
  useEffect(() => {
    const id = setTimeout(() => {
      const filterByCategory = getArrayCategories(data, currCategory);
      dispatch(currentPage(1));
      setCategoryData(arrStart(filterByCategory, start, finish));
      setPageCount(getPages(filterByCategory));
    }, 400);
    return () => {
      clearTimeout(id);
    };
  }, [currCategory]);
  return (
    <div className="right-side">
      <FiltersOptions filters={filters} />
      <main className="book-list">
        <BookListItem data={categoryData} />
        <Pagination data={data} pageCount={pageCount} />
      </main>
    </div>
  );
}

export default BookByCategory;
