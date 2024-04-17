const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];

const sortedByAuthorName = books
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log('sortedByAuthorName:', sortedByAuthorName);

// const sortedByReversedAuthorName = books
//   .map(book => book.author)
//   .toSorted((a, b) => b.localeCompare(a));
// console.log('sortedByReversedAuthorName:', sortedByReversedAuthorName);

// const sortedByAscendingRating = books
//   .map(book => book.rating)
//   .toSorted((a, b) => a - b);
// console.log('sortedByAscendingRating:', sortedByAscendingRating);

// const sortedByDescentingRating = books
//   .map(book => book.author)
//   .toSorted((a, b) => b - a);
// console.log('sortedByDescentingRating:', sortedByDescentingRating);
