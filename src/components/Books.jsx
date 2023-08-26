import React from 'react';
import BookList from './bookList';
import AddBook from './addBookForm';

const Books = () => (
  <section className="bookstore-cms">
    <BookList />
    <AddBook />
  </section>
);

export default Books;
