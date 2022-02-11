import './style/App.css';
import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Book from './components/Book';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="category/:id" element={<Book />} />
      <Route path="book/:id" element={<Book />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
