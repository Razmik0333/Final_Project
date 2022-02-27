import BookCategories from '../BookCategories/BookCategories';
import BookListDefault from '../BookList/BookListDefault';

import './Home.css';

function Home() {
  return (
    <div className="container">
      <BookCategories />
      <BookListDefault />
    </div>
  );
}
export default Home;
