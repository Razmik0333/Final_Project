import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleBook from './components/SingleBook/SingleBook';
import BookFromCategory from './components/BookFromCategory/BookFromCategory';
import About from './components/About/About';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="book/:id"
          element={<SingleBook />}
        />
        <Route
          path="category/:id"
          element={<BookFromCategory />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
