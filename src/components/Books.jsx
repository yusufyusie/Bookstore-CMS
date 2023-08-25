import React from 'react';
import BookList from './BookList';
import AddBook from './addBookForm';

const Books = () => (
  <section className="bookstore-cms">
    <BookList />
    <AddBook />
  </section>
);

export default Books;
