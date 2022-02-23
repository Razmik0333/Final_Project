import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentBook } from '../../../../redux/ducks/bookDuck';

function SearchBar({ data }) {
  // const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [filteredDate, setFilteredDate] = useState([]);
  const [filterInputValue, setFilterInputValue] = useState('');

  function filteredData() {
    const filterData = data
      .filter((item) => item.title
        .includes(filterInputValue))
      .map((item) => item);
    setFilteredDate(filterData);
  }

  useEffect(() => () => {
    const id = setTimeout(() => filteredData(), 200);
    return (
      clearTimeout(id));
  }, [filterInputValue, data]);

  const handleId = (e) => {
    // e.preventDefault();
    dispatch(currentBook(e.target.dataset.id));
    console.log('currentBook', currentBook(e.target.dataset.id));
    // localStorage.setItem('bookId', e.target.dataset.id);
  };

  const handleInputValue = (e) => {
    setFilterInputValue(e.target.value);
  };

  const handelInputEnter = (e) => {
    if (e.key === 'enter') {
      console.log(e.key);
    }
  };

  return (
    <>
      <div className="searchings">
        <div className="container">
          <div className="logos">
            <NavLink to="/">
              <img className="logo" src="/icons/2815428.png" alt="logo" />
            </NavLink>
          </div>
          <div className="searching">
            <input
              value={filterInputValue}
              onChange={handleInputValue}
              onKeyPress={handelInputEnter}
              className="input_button"
              type="text"
              placeholder="Որոնել"
            />

            <button
              value={filterInputValue}
              onClick={filteredData}
              type="button"
              className="input_button"
            >
              <img className="icon_search" src="/icons/156545.png" alt="serach" />
            </button>
          </div>
          <div className="action_user">
            <NavLink className="action_btn" to="/login">
              <img className="icon_user" src="/icons/3329703.png" alt="icon" />
              <span> Մուտք </span>
            </NavLink>
          </div>
          <div className="action_preferred">
            <NavLink className="action_btn" to="/Preferred">
              <img className="icon_love" src="/icons/9358186.png" alt="icon" />
              <span> Նախընտրելի </span>
            </NavLink>
          </div>
          <div className="action_basket">
            <NavLink className="action_btn" to="/basket">
              <img className="icon_love" src="/icons/9349824.png" alt="icon" />
              <span> Զամբյուղ </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <NavLink
          className="container"
          to="/searching"
        >
          {filteredDate.map((item) => (
            <NavLink className="section-item" onClick={handleId} to={`book/${item.isbn}`}>
              <section>
                <img src={item.thumbnailUrl} data-id={item.isbn} alt="" />
                <p className="book-title">
                  <span>
                    {item.title}
                  </span>
                </p>
                {/* <p className="book-cost">
                      {item.pageCount * 10}
                        &#1423;
                      </p> */}
              </section>
            </NavLink>
          ))}
        </NavLink>

      </div>
    </>
  );
}

export default SearchBar;
