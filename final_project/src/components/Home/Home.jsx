import BookCategories from '../BookCategories/BookCategories';
import BookList from '../BookList/BookList';
import Carousel from '../Carousel/Carousel';
import DealOffTheMonth from '../DealOffTheMonth/DealOffTheMonth';

function Home() {
  return (
    <>
      <Carousel />
      <DealOffTheMonth />
      <BookCategories />
      <BookList />
    </>
  );
}
export default Home;
