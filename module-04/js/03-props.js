/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = 'Mango';
const email = 'mango@mail.com';
// const messageText = message.value;
// console.log("messageText:", messageText)

const credentials = {
  username, // "username": 'Mango'
  email,    // "email": 'mango@mail.com'
  // messageText
};

// console.log(credentials.messageText);
// console.log(credentials.username);
// console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = 'color';

const colorPickerData = {
  [inputName]: "teal",
};

// console.log(colorPickerData);

/**
 * Приклад з конспекту
 */
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
bookProp.addEventListener("change", (event) => {
  const userSelect = event.target.value; // "title"
  const value = book[userSelect]
  if (userSelect in book) {
     bookSpec.textContent = value
  }
})





