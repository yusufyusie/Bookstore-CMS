import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from './bookList';
import AddBook from './addBookForm';
import getBooks from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  dispatch(getBooks());
  return (
    <section className="bookstore-cms">
      <BookList />
      <AddBook />
    </section>
  );
};

export default Books;
