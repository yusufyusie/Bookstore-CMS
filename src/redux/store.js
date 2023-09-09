import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
},
applyMiddleware(thunk));

export default store;
