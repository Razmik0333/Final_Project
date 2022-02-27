import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filters } from '../../helpers/constants';
import { getPages } from '../../helpers/functions';
import { filterSelector } from '../../helpers/reduxSelectors';
import Loader from '../Loader/Loader';
import BookListItem from './BookListItem';
import FiltersOptions from './FiltersOptions';
import Pagination from './Pagination';

function InputFiter() {
  const [pageCount, setPageCount] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const filterArray = useSelector(filterSelector);
  console.log('🚀 ~ file: InputFilter.jsx ~ line 12 ~ InputFiter ~ filterArray', filterArray);
  const getFiltered = () => {
    setPageCount(getPages(filterArray));
    setIsLoaded(true);
  };
  useEffect(() => {
    const id = setTimeout(() => getFiltered(), 400);
    return () => {
      clearTimeout(id);
      setIsLoaded(false);
    };
  }, [filterArray]);
  return (
    <div className="right-side">
      <FiltersOptions filters={filters} />
      {
        isloaded ? (
          <main className="book-list">
            <BookListItem data={filterArray} />
            <Pagination data={filterArray} pageCount={pageCount} />
          </main>
        )
          : <Loader />
      }

    </div>
  );
}
export default InputFiter;
