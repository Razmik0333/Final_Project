import BookCategories from '../BookCategories/BookCategories';
import BookListDefault from '../BookList/BookListDefault';

function BookFromCategory() {
  return (
    <div className="container">
      <BookCategories />
      <BookListDefault />
    </div>
  );
}

export default BookFromCategory;
