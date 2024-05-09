/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */
const API_KEY = '663bb44bfee6744a6ea2a652';
const BASE_URL = `https://${API_KEY}.mockapi.io/api`;

/**
 * Read (GET)
 */

function fetchBooks() {
  const options = {
    method: 'GET',
  };

  return fetch(`${BASE_URL}/books`, options).then(response => {
    // console.log(response.status);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// Get book id from user
// const inputEl = document.querySelector('input[name="book_id"]');
// inputEl.addEventListener('change', event => {
//   const bookId = event.target.value;

//   fetchBookById(bookId).then(data => {
//     console.log(data);
//     console.log('Show one book');
//   });
// });

function fetchBookById(bookId) {
  const options = {
    method: 'GET',
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// fetchBooks()
//   .then(data => {
//     console.log(data);
//     console.log('Show all books');
//   })
//   .catch(error => {
//     console.log(`❌ Something went wrong.  ${error}`);
//   });
// fetchBookById(2)
//   .then(data => {
//     console.log(data);
//     console.log('Show one book');
//   })
//   .catch(error => {
//     console.log(`❌ Something went wrong.  ${error}`);
//   });
// fetchBookById(4)
//   .then(data => {
//     console.log(data);
//     console.log('Show one book');
//   })
//   .catch(error => {
//     console.log(`❌ Something went wrong.  ${error}`);
//   });

/**
 * Create (POST)
 */

function addBook(book) {
  const options = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/books`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// addBook({
//   title: 'Harry Potter',
//   author: 'Joanne Rowling',
//   genres: ['family', 'adventure', 'fantasy'],
//   rating: 23,
//   id: '11',
// }).then(data => console.log(data));
// addBook({
//   title: 'Lord of the rings',
//   author: 'John Tolkien',
//   genres: ['chivalric novel', 'adventure', 'fantasy'],
//   rating: 30,
//   id: '17',
// });
// addBook({
//   title: 'Lord of the rings: Two towers',
//   author: 'John Tolkien',
//   genres: ['chivalric novel', 'adventure', 'fantasy'],
//   rating: 35,
// });

/**
 * Update (PUT/PATCH)
 */

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(update),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

updateBookById({ title: 'Велика нова книга по NODEJS' }, 5).then(data =>
  console.log(data)
);
updateBookById({ rating: 1 }, 7);
updateBookById({ rating: 4, author: 'Mango' }, 2);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

removeBook(1);
removeBook(10);
