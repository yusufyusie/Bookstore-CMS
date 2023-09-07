import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <ul className="book">
        {books.map((book) => (
          <li className="book-list" key={book.id}>
            <Book title={book.title} author={book.author} />
            <div>
              <button type="button">Comments</button>
              <span>|</span>
              <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
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
