import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_BOOKS, fetchBooks } from './books/booksSlice';

const APP_ID = 'doVfOZKYHMqPNDJVFHKX';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`;
const BOOK_URL = `${BASE_URL}/books`;

const getBooks = createAsyncThunk(FETCH_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(BOOK_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(fetchBooks(responseJSON));
  return responseJSON;
});

export default getBooks;
