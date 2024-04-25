// Users example
import usersAPI from './fetch-api.js';
const { updateUsers, sendUsers } = usersAPI;

updateUsers();
sendUsers();
// Default export
import usersData from './users.js';
import booksData from './books.js';

// Named export
import {
  booksMarkup,
  usersMarkup,
  number,
  coords as mouseCoords,
} from './render-api.js';
// Namespace export
// import * as renderAPI from './render-api.js';

// console.log(renderAPI);

// console.log(usersData);

const coords = {
  a: 'asd',
  b: 'qwe',
};

// console.log(number);
console.log(coords);
console.log(mouseCoords);

// app.innerHTML = renderAPI.booksMarkup(booksData);
app.innerHTML = booksMarkup(booksData);
// app.insertAdjacentHTML('beforeend', usersMarkup(usersData));
