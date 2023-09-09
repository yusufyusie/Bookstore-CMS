import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author, catgory } = props;
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(deleteBook(item_id));
    await dispatch(fetchBooks());
  };
  return (
    <li className="book">
      <p className="book-title">{title}</p>
      <p className="author-name">{author}</p>
      <p className="book-catgory">{catgory}</p>
      <div>
        <div>
          <button type="button">Comments</button>
          <span>|</span>
          <button type="button" onClick={handleClick}>Remove</button>
          <span>|</span>
          <button type="button">Edit</button>
        </div>
        <div className="progress">
          <div className="progress-circle" />
          <div className="percentage">
            <p className="percent">
              75%
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <span>|</span>
        <div className="chapter">
          <div className="chapter-info">
            <p className="cur-chapter">CURRENT CHAPTER</p>
            <p className="chapter-num">
              Chapter
              {' '}
              {Math.floor(Math.random() * 101)}
            </p>
          </div>
          <button type="button" className="progress-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  catgory: PropTypes.string.isRequired,
};

export default Book;
