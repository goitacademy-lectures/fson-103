export const booksMarkup = books => {
  return books.reduce((markup, book) => {
    const { title, author, genres } = book;
    return (markup += `
    <div>
      <h2>${title}</h2>
        <div>
        <b>${author}</b>
        <i>${genres}</i>
        </div>
    </div>
    `);
  }, '');
};

export const usersMarkup = users => {
  return users.reduce((markup, user) => {
    const { name, avatar, bio, interests, createdAt } = user;
    return (markup += `
    <div>
    <img src="${avatar}" alt="${bio}">
      <div>
        <h2>${name}</h2>
        <time>${createdAt.slice(0, 11)}</time>
      </div>
        <div>
          <p>Bio:</p>
          <p>${bio}</p>
        </div>
        <div>
          <p>${interests}</p>
        </div>
    </div>
    `);
  }, '');
};

export const number = 5;

export const coords = {
  x: 12,
  y: 24,
};
// const coords = {
//   x: 12,
//   y: 24,
// };
// console.log('coords:', coords);
