import { createAsyncThunk } from '@reduxjs/toolkit';
import BookSrvc from '../booksAPI';

const initialState = {
  books: [],
};
// Actions

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const { data } = await BookSrvc.getSrvc();
    return Object.keys(data).map((key) => ({ ...data[key][0], item_id: key }));
  },
);

const addBook = createAsyncThunk(
  'books/addBook',
  async (Book) => {
    const response = await BookSrvc.addSrvc(Book);
    return response.data;
  },
);

const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id) => {
    await BookSrvc.deleteSrvc(id);
    return id;
  },
);

// Reducer

const booksSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'books/fetchBooks/fulfilled':
      return {
        ...state,
        books: action.payload,
      };
    case addBook.fulfilled:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case deleteBook.fulfilled:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export { addBook, deleteBook, fetchBooks };
export default booksSlice;
