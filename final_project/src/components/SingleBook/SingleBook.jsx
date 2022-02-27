import { useSelector } from 'react-redux';
import { currentBookSelector } from '../../helpers/reduxSelectors';
import './SingleBook.css';
import Cart from './SingleBookcopmponents/Cart/Cart';

function SingleBook({ data }) {
  const currentId = useSelector(currentBookSelector);
  const book = data.find((item) => item.isbn === currentId);
  const date = new Date(book.publishedDate.$date);
  const getNumber = (num) => (num < 10 ? `0${num}` : num);
  return (
    <div className="book-content">
      <div className="book-picture">
        <section>
          <img src={book.thumbnailUrl} alt={book.title} />
        </section>
      </div>
      <main className="book-desc">
        <div className="book-info">
          <section>
            <h1 className="book-head">{book.title}</h1>
            <ul className="book-authors">
              {
                book.authors.map((item) => (
                  <li>{item}</li>
                ))
              }
            </ul>
            <span className="book-text">{book.longDescription}</span>
          </section>
        </div>

        <div className="desc-cart-section">

          <section className="desc-section">
            <ul className="description">
              <li>
                <span>Անվանում</span>
                <span>{book.title}</span>
              </li>
              <li>
                <span>Էջերի քանակ</span>
                <span>{book.pageCount}</span>
              </li>
              <li>
                <span>Վիճակ</span>
                <span>{book.status === 'PUBLISH' ? 'Տպագրված է' : 'Տպագրված չէ'}</span>
              </li>
              <li>
                <span>Ամսաթիվ</span>
                <span>{`${getNumber(date.getDate())}.${getNumber(date.getMonth() + 1)}.${getNumber(date.getFullYear())}`}</span>
              </li>
            </ul>
          </section>

          <Cart />

        </div>
      </main>
    </div>
  );
}

export default SingleBook;
