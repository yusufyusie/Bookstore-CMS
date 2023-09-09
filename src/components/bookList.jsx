import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="book-card">
      <ul className="book">
        {books.map((book) => (
          <li className="book-list" key={book.item_id}>
            <Book
              item_id={book.item_id}
              title={book.title}
              author={book.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
