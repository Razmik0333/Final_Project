import BookCategories from '../BookCategories/BookCategories';
import BookByCategory from '../BookList/BookByCategory';

// import './Home.css';

function Category() {
  return (
    <div className="container">
      <BookCategories />
      <BookByCategory />
    </div>
  );
}
export default Category;
