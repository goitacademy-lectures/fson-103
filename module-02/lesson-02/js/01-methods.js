/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

const username = 'Jacob Mercer';
const usernameLength = username.length;

const result_1 = username.slice(1, 5);
const result_2 = username.slice(0);
const result_3 = username.slice(-1);
const result_4 = username.slice(-5, -2);
// console.log(username[5]);
// console.log(`
// ${result_1}
// ${result_2}
// ${result_3}
// ${result_4}
// `);

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// console.log(username.startsWith('acob', 1));
// console.log(username.endsWith('acob', 1));

// const inputEl = document.querySelector('input[type="text"]');
// inputEl.addEventListener('blur', event => {
//   const inputValue = event.target.value;
//   let result;

//   if (!inputValue.length) return;

//   const capitalFirstLetter = inputValue[0].toUpperCase();

//   result = capitalFirstLetter + inputValue.slice(1);
//   result = `${capitalFirstLetter}${inputValue.slice(1)}`;

//   console.log('result: ', result);
// });

// const TRIGGER =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed eius dolormque impedit molestiae quos aut asperiores, fugiat earum soluta officiis nobis facilis voluptatibus dicta quaerat doloribus odit cum sint!';

// const inputEl = document.querySelector('input[type="text"]');
// inputEl.addEventListener('blur', event => {
//   const inputValue = event.target.value;

//   if (TRIGGER.includes(inputValue)) {
//     console.log('Matching');
//   } else {
//     console.log('No matching');
//   }
// });

/**
 * Функція getFileName(file) приймає один параметр file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
 Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
 Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
 Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
 В іншому разі функція повертала підрядок з іменем файлу, але без розширення"
 */

function getFileName(file) {
  const start = 0;
  const end = file.indexOf('.');

  // if (end > -1) {
  //   return file.slice(start, end);
  // } else {
  //   return file;
  // }

  // if (end === -1) {
  //   return file;
  // } else {
  //   return file.slice(start, end);
  // }

  return end > -1 ? file.slice(start, end) : file;
}

const res_1 = getFileName('styles.css');
console.log('res_1:', res_1);
