const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'Bookstore/books/FETCH_BOOKS';

const initialState = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'John Smith',
  },
  {
    id: '2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
  {
    id: '3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
  },
];

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
    default:
      return state;
  }
};

export default bookReducer;
