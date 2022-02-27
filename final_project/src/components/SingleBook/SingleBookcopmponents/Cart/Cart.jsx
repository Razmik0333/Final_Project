import { useSelector } from 'react-redux';
import { useState } from 'react';
import { currencyValue } from '../../../../helpers/functions';
import { bookSelector, changeCurrencyes, currentBookSelector } from '../../../../helpers/reduxSelectors';
import cart from '../../../../images/cart.svg';
import heart from '../../../../images/heart.svg';
import check from '../../../../images/check.svg';

function Cart() {
  const currentId = useSelector(currentBookSelector);
  const data = useSelector(bookSelector);
  const book = data.find((item) => item.isbn === currentId);
  const currencyChange = useSelector(changeCurrencyes);

  const [counter, setCounter] = useState(0);

  const handleCountDow = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  const handleCountUp = () => {
    setCounter((count) => count + 1);
  };

  return (
    <section className="cart-section">
      <p className="price">
        {currencyValue(book.pageCount * 10, currencyChange)}
      </p>

      <p className="book-count">
        <button
          type="button"
          className="cart_section_button"
          onClick={handleCountDow}
        >
          <span> - </span>
        </button>

        <input type="text" className="count" value={counter} />

        <button
          type="button"
          className="cart_section_button"
          onClick={handleCountUp}
        >
          <span> + </span>
        </button>
      </p>

      <p>
        <button
          value={counter}
          type="button"
          className="add-cart"
        >
          <span>Գնել</span>
          <img src={cart} alt="" />
        </button>

        <img className="favorite" src={heart} alt="" />
      </p>
      <p className="available">
        <img src={check} className="check" alt="" />
        <span>Առկա է</span>
      </p>
    </section>
  );
}
export default Cart;
