import React from "react";
import Book from "./Book";
import AddBook from "./addBookForm";

const BookList = ()=>{
    const bookCollection = [
        {
            id: 1,
            title: "book 1",
            author: "Author 1",
        },

        {
            id: 2,
            title: "book 2",
            author: "Author 2",
        },

        {
            id: 3,
            title: "book 3",
            author: "Author 3",
        }
    ]
    return (
        <div className="book-card">
        <ul className="book-list">
            {bookCollection.map(book=>
                <li Book key={book.id}> 
                <Book title={book.title} author={book.author}/>
                <div>
                    <button type="button">Comments</button>
                    <span>|</span>
                    <button type="button">Remove</button>
                    <span>|</span>
                    <button type="button">Edit</button>
                </div>
                </li>
            )}
        </ul>
        </div>
    );
};

export default BookList;
