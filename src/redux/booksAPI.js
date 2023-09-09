import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_BOOKS, fetchBooks, ADD_BOOK, addBook, REMOVE_BOOK, removeBook } from './books/booksSlice';

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

const postBook = createAsyncThunk(ADD_BOOK, async (book, thunkAPI) => {
    const response = await fetch(BOOK_URL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseText = await response.text();
    thunkAPI.dispatch(addBook(book));
    return responseText;
  });

  const deleteBook = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
    const response = await fetch(`${BOOK_URL}/${bookId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: bookId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseText = await response.text();
    thunkAPI.dispatch(removeBook(bookId));
    return responseText;
  });

export default {getBooks,postBook, deleteBook};
