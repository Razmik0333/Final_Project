import BookCategories from '../BookCategories/BookCategories';
import BookList from '../BookList/BookList';

import './Home.css';

function Home({ data }) {
  return (
    <div className="content">
      <BookCategories data={data} />
      <BookList data={data} />
    </div>
  );
}
export default Home;
