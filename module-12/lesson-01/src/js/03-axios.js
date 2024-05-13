/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

import axios from 'axios';

const API_KEY = '663bb44bfee6744a6ea2a652';
const BASE_URL = `https://${API_KEY}.mockapi.io/api`;

axios.defaults.baseURL = BASE_URL;
/**
 * Read (GET)
 */

// function fetchBooks() {
//   const options = {
//     method: 'GET',
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }
const fetchBooks = () => axios.get(`/books`);

fetchBooks()
  .then(({ data }) => {
    console.log(data);
  })
  .catch(error => {
    console.log(`❌ Something went wrong.  ${error}`);
  });

// function fetchBookById(bookId) {
//   const options = {
//     method: 'GET',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }
const fetchBookById = bookId => axios.get(`/books/${bookId}`);
// fetchBookById(2)
//   .then(({ data }) => {
//     console.log(data);
//     console.log('Show one book');
//   })
//   .catch(error => {
//     console.log(`❌ Something went wrong.  ${error}`);
//   });

/**
 * Create (POST)
 */

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(book),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

const addBook = book => axios.post(`/books`, book);
// addBook({
//   title: 'Lord of the rings: Two towers',
//   author: 'John Tolkien',
//   genres: ['chivalric novel', 'adventure', 'fantasy'],
//   rating: 35,
// });

// addBook({
//   title: 'Harry Potter',
//   author: 'Joanne Rowling',
//   genres: ['family', 'adventure', 'fantasy'],
//   rating: 23,
// }).then(({ data }) => console.log(data));

// addBook({
//   title: 'Lord of the rings',
//   author: 'John Tolkien',
//   genres: ['chivalric novel', 'adventure', 'fantasy'],
//   rating: 30,
// });

/**
 * Update (PUT/PATCH)
 */

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(update),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

const updateBookById = (update, bookId) => axios.put(`/books/${bookId}`, update);

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 5).then(({ data }) => console.log(data));
// updateBookById({ rating: 1 }, 7);
// updateBookById({ rating: 4, author: 'Mango' }, 2);

/**
 * Delete (DELETE)
 */

// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

const removeBook = bookId => axios.delete(`/books/${bookId}`);

// removeBook(20);
// removeBook(21);
