import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author, category } = props;
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(deleteBook(item_id));
    await dispatch(fetchBooks());
  };
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-details">
            <p className="book-catgory">{category}</p>
            <p className="book-title">{title}</p>
            <p className="author-name">{author}</p>
            <div className="action-buttons">
              <button type="button">Comments</button>
              <span>|</span>
              <button type="button" onClick={handleClick}>Remove</button>
              <span>|</span>
              <button type="button">Edit</button>
            </div>
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
          <div className="column-divider" />
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
      </div>
    </li>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
