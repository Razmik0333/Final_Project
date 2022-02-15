import BookCategories from '../BookCategories/BookCategories';
import BookList from '../BookList/BookList';
import './Home.css';

function Home() {
  return (
    <div className="content">
      <BookCategories />
      <BookList />
    </div>
  );
}
export default Home;
