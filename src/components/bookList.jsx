import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-card">
      <ul className="book">
        {books.map((book) => (
          // eslint-disable-next-line react/no-unknown-property
          <li className="book-list" Book key={book.id}>
            <Book title={book.title} author={book.author} />
            <div>
              <button type="button">Comments</button>
              <span>|</span>
              <button type="button">Remove</button>
              <span>|</span>
              <button type="button">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
