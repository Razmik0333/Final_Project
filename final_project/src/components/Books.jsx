import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../images/1.png';

function Books() {
  return (
    <div className="right-side">
      <nav className="filter-bar">
        <NavLink className="filter-items active-filter" to="/best_sellers">Best sellers</NavLink>
        <NavLink className="filter-items" to="/new_arrivals">New Arrivals</NavLink>
        <NavLink className="filter-items" to="/used_books">Used Books</NavLink>
        <NavLink className="filter-items" to="/special_offers">Special Offers</NavLink>
      </nav>
      <main className="book-list">
        <article>
          <NavLink className="section-item" to="book/1">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/2">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/3">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/4">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/5">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/6">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/7">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/8">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/9">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/10">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/11">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/12">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/13">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/14">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
          <NavLink className="section-item" to="book/15">
            <section>
              <img src={img} alt="" />
              <p className="book-title">
                <span>
                  The Hare With Amber Eyes
                </span>
              </p>
              <p className="book-cost">
                $50
              </p>
            </section>
          </NavLink>
        </article>
        <nav className="pagination">
          <ul className="pages">
            <li className="page"><NavLink to="/page/1">1</NavLink></li>
            <li className="page"><NavLink to="/page/1">2</NavLink></li>
            <li className="page page-active"><NavLink to="/page/3">3</NavLink></li>
            <li className="page"><NavLink to="/page/4">4</NavLink></li>
            <li className="page"><NavLink to="/page/5">5</NavLink></li>
            <li className="page"><NavLink to="/page/6">6</NavLink></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Books;
