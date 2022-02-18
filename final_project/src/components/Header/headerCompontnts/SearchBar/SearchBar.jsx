import { NavLink } from 'react-router-dom';

function SearchBar() {
  //   const [filterInputValue, setFilterInputValue] = useState('')

  //   useEffect ( () => {
  //     filteredData()
  //     return () => {
  //         clearTimeout(inputRef.current)
  //     }
  // }, [messages, filterSelectValue, filterInputValue])

  // const filteredData = () => {
  //   clearTimeout(inputRef.current)
  //     inputRef.current = setTimeout(() => {
  //       const filterData = data
  //     .filter(item => item[filterInputValue])
  //     .map(item => {
  //       <NavLink className="section-item" onClick={handleId} to={`book/${item.isbn}`}>
  //         <section>
  //           <img src={item.thumbnailUrl} data-id={item.isbn} alt="" />
  //           <p className="book-title">
  //             <span>
  //               {item.title}
  //             </span>
  //           </p>
  //           <p className="book-cost">
  //             {item.pageCount * 10}
  //             &#1423;
  //           </p>
  //         </section>
  //       </NavLink>
  //     })
  //     setFilteredMessages(filterData)
  //   }
  // }

  // const handleInputValue = e => {
  //   setFilterInputValue(e.target.value)
  // }
  return (
    <div className="searchings">
      <div className="container">
        <div className="logos">
          <NavLink to="/">
            <img className="logo" src="/icons/2815428.png" alt="logo" />
          </NavLink>
        </div>
        <div className="searching">
          <input
            // value={}
            // onChange={handleInputValue}
            className="input_button"
            type="text"
            placeholder="Որոնել"
          />

          <button type="button" className="input_button">
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

  );
}
export default SearchBar;
