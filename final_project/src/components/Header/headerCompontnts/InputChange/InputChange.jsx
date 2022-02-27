import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelector } from '../../../../helpers/reduxSelectors';
import { getFilterData } from '../../../../redux/ducks/bookDuck';

function InputChange() {
  const data = useSelector(bookSelector);
  const dispatch = useDispatch();
  const [filterInputValue, setFilterInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
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
    const id = setTimeout(() => filteredData(), 200);
    return (
      clearTimeout(id));
  }, [filterInputValue, data]);

  const handleInputValue = (e) => {
    setFilterInputValue(e.target.value);
  };

  const handleItemClick = (e) => {
    setFilterInputValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const handleClickValue = () => {
    setIsOpen(true);
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
          filterInputValue && isOpen
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
      <button
        value={filterInputValue}
        disabled={isOpen}
        onClick={handleClickButten}
        type="button"
        className="input_button"
      >
        <img className="icon_search" src="/icons/156545.png" alt="serach" />
      </button>
    </div>
  );
}
export default InputChange;
