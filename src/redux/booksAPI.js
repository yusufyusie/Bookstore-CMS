import http from './http-common';

const getSrvc = () => http.get('/apps/doVfOZKYHMqPNDJVFHKX/books');

const addSrvc = (data) => http.post('/apps/doVfOZKYHMqPNDJVFHKX/books', data);

const deleteSrvc = (id) => http.delete(`/apps/doVfOZKYHMqPNDJVFHKX/books/${id}`);

const BookSrvc = {
  getSrvc,
  addSrvc,
  deleteSrvc,
};

export default BookSrvc;
