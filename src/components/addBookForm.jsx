import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [inputData, setInputData] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const { title, author } = inputData;
    if (title && author) {
      dispatch(addBook({ title, author }));
      setInputData({ title: '', author: '' });
    }
  };

  return (
    <div className="form-card">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={changeHandler} required />
        <input type="text" name="author" id="author" placeholder="Author" onChange={changeHandler} required />
        <button type="button" className="add-butn" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
