import BookCategories from '../BookCategories/BookCategories';
import BookList from '../BookList/BookList';

function BookFromCategory({ data }) {
  return (
    <div className="content">
      <BookCategories data={data} />
      <BookList data={data} />
    </div>
  );
}

export default BookFromCategory;
