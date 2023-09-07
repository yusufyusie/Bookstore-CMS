const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';

const initialState = {
  booksItem: [
    {
      itemId: 'item1',
      category: 'Action',
      title: 'The Great Gatsby',
      author: 'John Smith',
    },
    {
      itemId: 'item2',
      category: 'Fiction',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
    },
    {
      itemId: 'item3',
      category: 'Nonfiction',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
    },
  ],
};
// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
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
