import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-card">
      <ul className="book">
        {books.map((book) => (
          <li className="book-list" key={book.item_id}>
            <Book
              item_id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
