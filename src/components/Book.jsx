import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(deleteBook(item_id));
    await dispatch(fetchBooks());
  };
  return (
    <li className="book">
      <p className="book-title">{title}</p>
      <p className="author-name">
        {' '}
        by
        {author}
      </p>
      <div>
        <button type="button">Comments</button>
        <span>|</span>
        <button type="button" onClick={handleClick}>Remove</button>
        <span>|</span>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
