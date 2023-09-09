import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import { v4 } from 'uuid';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    author: '',
    category: '',
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
      category: state.category,
    };

    await dispatch(addBook(newBook));
    await dispatch(fetchBooks());

    setState({ title: '', author: '', category: '' });
  };

  return (
    <div className="form-card">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input type="text" placeholder="Title" value={state.title} name="title" onChange={handleChange} />
        <input type="text" placeholder="Author" value={state.author} name="author" onChange={handleChange} />
        <select name="category" id="categoryid" className="input category-input" onChange={handleChange}>
          <option value={state.category}> Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Literature">Literature</option>
        </select>
        <button type="submit" className="add-butn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
