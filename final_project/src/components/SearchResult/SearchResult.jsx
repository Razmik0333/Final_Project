import BooksCategories from '../BookCategories/BookCategories';
import InputFilter from '../BookList/InputFilter';

function SearchResult() {
  return (
    <div className="container">
      <BooksCategories />
      <InputFilter />
    </div>
  );
}

export default SearchResult;
