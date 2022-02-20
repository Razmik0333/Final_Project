import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleBook from './components/SingleBook/SingleBook';
import BookFromCategory from './components/BookFromCategory/BookFromCategory';
import { fetchBooks } from './redux/ducks/bookDuck';
import { bookSelector } from './helpers/reduxSelectors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const data = useSelector(bookSelector);
  return (
    <>
      <Header data={data} />

      <Routes>
        <Route path="" element={<Home data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="book/:id"
          element={<SingleBook data={data} />}
        />
        <Route
          path="category/:id"
          element={<BookFromCategory />}
        />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
