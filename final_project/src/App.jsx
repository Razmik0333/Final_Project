import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SingleBook from './components/SingleBook/SingleBook';
import About from './components/About/About';
import News from './components/News/News';
import Policy from './components/Policy/Policy';
import Adresses from './components/Adresses/Adresses';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import Filter from './components/Filter/Filter';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/adresses" element={<Adresses />} />
        {/* <Route path="/basket" element={<Basket />} /> */}

        <Route
          path="book/:id"
          element={<SingleBook />}
        />
        <Route
          path="/category/:id"
          element={<Category />}
        />
        <Route
          path="/filter/:id"
          element={<Filter />}
        />
        <Route
          path="/search/:id"
          element={<SearchResult />}
        />
        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />
    </>

  );
}

export default App;
