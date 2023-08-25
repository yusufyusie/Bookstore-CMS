import React from "react";

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

export default Book;
