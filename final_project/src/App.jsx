import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home/Home';
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
    <div className="container">
      <Routes>
        <Route
          path="/book/:id"
          element={<SingleBook data={data} />}
        />
        <Route
          path="/category/:id"
          element={<BookFromCategory data={data} />}
        />
        <Route
          path="/filter/:id"
          element={<BookFromCategory data={data} />}
        />
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
