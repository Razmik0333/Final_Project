import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleBook from './components/SingleBook/SingleBook';
import BookFromCategory from './components/BookFromCategory/BookFromCategory';
import About from './components/About/About';
import Adresses from './components/Adresses/Adresses';
import FAQ from './components/FAQ/FAQ';


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/adresses" element={<Adresses />} />
         <Route path="/faq" element={<FAQ />} />

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
