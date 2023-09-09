import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    author: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const addBookHandler = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: v4(),
      title: state.title,
      author: state.author,
      category: '',
    };

    await dispatch(addBook(newBook));
    await dispatch(fetchBooks());

    setState({ title: '', author: '' });
  };

  return (
    <div className="form-card">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input type="text" placeholder="Title" value={state.title} name="title" onChange={handleChange} />
        <input type="text" placeholder="Author" value={state.author} name="author" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
