import InputFiter from './headerCompontnts/InputFiter/InputFilter';
import NavBar from './headerCompontnts/NavBar/NavBar';
import SearchBar from './headerCompontnts/SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <NavBar />
      <SearchBar />
      <InputFiter />
    </header>
  );
}
export default Header;
