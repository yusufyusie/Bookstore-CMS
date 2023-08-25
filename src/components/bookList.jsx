import React from "react";
import Book from "./Book"
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
        <div>
        <ul className="book-list">
            {bookCollection.map(book=>
                <li Book key={book.id}> 
                <Book title={book.title} author={book.author}/>
                <button type="button">Remove</button>
                </li>
            )}
        </ul>
        <AddBook />
        </div>
    );
};

export default BookList;
