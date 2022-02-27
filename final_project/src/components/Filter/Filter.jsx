import BooksCategories from '../BookCategories/BookCategories';
import BookByFilters from '../BookList/BookByFilters';

function Filter() {
  return (
    <div className="container">
      <BooksCategories />
      <BookByFilters />
    </div>
  );
}

export default Filter;
