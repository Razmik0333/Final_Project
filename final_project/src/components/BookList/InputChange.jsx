import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bookSelector } from '../../helpers/reduxSelectors';
import { getFilterData } from '../../redux/ducks/bookDuck';

function InputChange() {
  const data = useSelector(bookSelector);
  const dispatch = useDispatch();
  const [filterInputValue, setFilterInputValue] = useState('');
  const [isClose, setIsClose] = useState(true);
  // const [sowHiden, setShowHiden] = useState(false);
  // const showSearchResult = useCallback(() => {
  //   setShowHiden(true);
  // });
  const filteredData = () => {
    const filterData = data
      .filter((item) => item.title.toUpperCase()
        .includes(filterInputValue.toUpperCase()))
      .map((item) => item);
    dispatch(getFilterData(filterData));
  };

  useEffect(() => () => {
    const id = setTimeout(() => {
      filteredData();
    }, 200);
    return (
      clearTimeout(id)
    );
  }, [data]);

  const handleInputValue = (e) => {
    setFilterInputValue(e.target.value);
  };

  const handleItemClick = (e) => {
    setFilterInputValue(e.target.textContent);
    setIsClose(!isClose);
  };

  const handleClickValue = () => {
    setIsClose(true);
  };
  const handleClickButten = () => {
    filteredData();
    // setShowHiden(true);
  };
  return (
    <div className="search_form">
      <input
        value={filterInputValue}
        onChange={handleInputValue}
        onClick={handleClickValue}
        className="input_button"
        type="text"
        placeholder="Որոնել"
      />
      <ul className="autocomplate">
        {
          filterInputValue && isClose
            ? data.filter((item) => item.title.toUpperCase()
              .includes(filterInputValue.toUpperCase())).map((item) => (
                <li
                  role="presentation"
                  className="autocomplate_item"
                  onClick={handleItemClick}
                >
                  {item.title}
                </li>
            ))
            : null
        }
      </ul>
      <NavLink to={`/search/${filterInputValue}`}>
        <button
          value={filterInputValue}
          disabled={isClose}
          onClick={handleClickButten}
          type="button"
          className="input_button"
        >
          <img className="icon_search" src="/icons/156545.png" alt="serach" />
        </button>
      </NavLink>

    </div>
  );
}
export default InputChange;
