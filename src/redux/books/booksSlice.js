const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'Bookstore/books/FETCH_BOOKS';

const initialState = [];

// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS: {
      const bookList = [];
      Object.entries(action.books).forEach(([key, value]) => bookList.push({
        id: key,
        title: value[0].title,
        author: value[0].author,
      }));
      return [...bookList];
    }
    default:
      return state;
  }
};

export default bookReducer;
