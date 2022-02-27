import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterSelector } from '../../../../helpers/reduxSelectors';
import { currentBook } from '../../../../redux/ducks/bookDuck';

function InputFiter() {
  const dispatch = useDispatch();
  const filterArray = useSelector(filterSelector);

  const handleId = (e) => {
    dispatch(currentBook(e.target.dataset.id));
  };

  return (
    <div className="container">
      {
          filterArray.map((item) => (
            <NavLink className="section-item" onClick={handleId} to={`book/${item.isbn}`}>
              <section>
                <img src={item.thumbnailUrl} data-id={item.isbn} alt="" />
                <p className="book-title">
                  <span>
                    {item.title}
                  </span>
                </p>
              </section>
            </NavLink>
          ))
          }
    </div>
  );
}
export default InputFiter;
