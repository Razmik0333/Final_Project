import NavBar from './headerCompontnts/NavBar/NavBar';
import SearchBar from './headerCompontnts/SearchBar/SearchBar';
// import './Header.css';
// import { NavLink } from "react-router-dom"

function Header({ data }) {
  return (
    <>
      <NavBar data={data} />
      <SearchBar data={data} />
    </>
  );
}
export default Header;
