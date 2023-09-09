import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

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
      category: state.category,
      title: state.title,
      author: state.author,
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
        <select type="text" name="category" value={state.category} placeholder="Category" onChange={handleChange} id="input-category">
          <option value="" disabled>Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="biography">Biography</option>
        </select>
        <button type="submit" className="add-butn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
