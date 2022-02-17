import { NavLink } from 'react-router-dom';
import './BookCategories.css';

function BooksCategories({ data }) {
  console.log(data);
  return (
    <aside>
      <h1>Categories</h1>
      <h1 className="all">All</h1>
      <p>Fiction & Literature</p>
      <ul className="categories">
        <li className="category">
          <NavLink to="category/1">Children</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/2">Science Fiction</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Fantasy</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Mystery</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Romance</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Horror</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Poetry</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Literature</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Crime</NavLink>
        </li>
      </ul>
      <p>Non - Fiction</p>
      <ul className="categories">
        <li className="category">
          <NavLink to="category/3">Comic</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Cook</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Psychology</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Medical</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Art</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Photography</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Law</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">History</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Business</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Computer</NavLink>
        </li>
      </ul>
      <p>Other</p>
      <ul className="categories">
        <li className="category">
          <NavLink to="category/3">Baby</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Sex</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Travel</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Science</NavLink>
        </li>
        <li className="category">
          <NavLink to="category/3">Sports</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default BooksCategories;
