import { useState, useEffect } from 'react';
import './News.css';

function News() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((res) => setBook(res.books))
      .catch((e) => console.log('error', e));
  });
  return (
    <div className="container">
      { book.map((item) => (
        <div className="book">
          <img className="news_img" src={item.thumbnailUrl} alt="" />
          <br />
          <h6>{item.title}</h6>
        </div>
      ))}
    </div>
  );
}

export default News;
