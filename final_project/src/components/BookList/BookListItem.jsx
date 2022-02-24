import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import noImg from '../../images/no-image.png';
import { currentBook } from '../../redux/ducks/bookDuck';

function BookListItem({ data }) {
  const dispatch = useDispatch();

  const handleBookId = (e) => {
    dispatch(currentBook(e.target.dataset.id));
  };
  return (
    <article>
      {
          data.map((item) => (
            <NavLink className="section-item" onClick={handleBookId} to={`/book/${item.isbn}`}>
              <section>
                <img src={item.thumbnailUrl !== undefined ? item.thumbnailUrl : noImg} data-id={item.isbn} alt="" />
                <p className="book-title">
                  <span>
                    {item.title}
                  </span>
                </p>
                <p className="book-cost">
                  {item.pageCount * 10}
                  &#1423;
                </p>
              </section>
            </NavLink>
          ))

    }

    </article>
  );
}

export default BookListItem;
