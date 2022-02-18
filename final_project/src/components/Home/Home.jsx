import BookCategories from '../BookCategories/BookCategories';
import BookList from '../BookList/BookList';
import Carousel from '../Carousel/Carousel';
import DealOffTheMonth from '../DealOffTheMonth/DealOffTheMonth';
import './Home.css';

function Home({ data }) {
  return (
    <>
      <Carousel />
      <DealOffTheMonth />
      <div className="container">
        <div className="content">
          <BookCategories data={data} />
          <BookList data={data} />
        </div>
      </div>
    </>
  );
}
export default Home;
