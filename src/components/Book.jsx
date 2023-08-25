import React from "react";
import PropTypes from 'prop-types';

const Book = (props)=>{
    const {title, author} = props;
    return (
        <li className="book">
            <p className="book-title">{title}</p>
            <p className="author-name">by {author}</p>
            <button type="button">remove</button>
        </li>
    )
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Book;
