import React from 'react';
import img from '../images/book.png';
import cart from '../images/cart.svg';
import heart from '../images/heart.svg';
import check from '../images/check.svg';

function Book() {
  return (
    <div className="container">
      <div className="book-content">
        <div className="book-picture">
          <section>
            <img src={img} alt="" />
          </section>
        </div>
        <main className="book-desc">
          <div className="book-info">
            <section>
              <h1 className="book-head">Star Wars Episode I</h1>
              <span className="book-text">The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition</span>
            </section>
          </div>
          <div className="desc-cart-section">
            <section className="desc-section">
              <ul className="description">
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
                </li>
                <li>
                  <span>Քաշ</span>
                  <span>0.245000</span>
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
                <img className="favorite" src={heart} alt="" />
              </p>
              <p className="available">
                <img src={check} className="check" alt="" />
                <span>Առկա է</span>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Book;
