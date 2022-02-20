import { useSelector } from 'react-redux';
import cart from '../../images/cart.svg';
import heart from '../../images/heart.svg';
import check from '../../images/check.svg';
import './SingleBook.css';
import { currentBookSelector } from '../../helpers/reduxSelectors';

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
          <section className="cart-section">
            <p className="price">
              3490&#1423;
            </p>
            <p className="book-count">
              <span className="sub">-</span>
              <input type="text" className="count" defaultValue="0" />
              <span className="add">+</span>
            </p>
            <p>
              <button className="add-cart" type="button">
                <span>Գնել</span>
                <img src={cart} alt="" />
              </button>
              <img className="favorite" src={heart} alt={book.title} />
            </p>
            <p className="available">
              <img src={check} className="check" alt="" />
              <span>Առկա է</span>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingleBook;
