import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../images/1.png';

function BookItem() {
  return (
    <section>
      <NavLink to="/book/1">
        <img src={img} alt="" />
        <p className="book-title">
          <span>
            The Hare With Amber Eyes
          </span>
        </p>
        <p className="book-cost">
          $50
        </p>
      </NavLink>
    </section>
  );
}

export default BookItem;
