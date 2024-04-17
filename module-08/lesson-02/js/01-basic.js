/**
 * Деструктуризація об'єкта
 */

// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// const { baseURI } = document.body;
// console.log('baseURI:', baseURI);

// const userName = user.username;
// console.log('userName:', userName);
// const knowCss = user.skills.css;
// console.log('knowCss:', knowCss);

// const { username, skills, position } = user; // const username = 'Jacob'
// console.log('username:', username);
// console.log('skills:', skills);
// console.log('position:', position); // const position = user.position

/**
 * Глибока деструктуризація об'єкта
 */
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     react: {
//       native: 'Know',
//       rtk: "Don't know",
//     },
//   },
// };
// const user2 = {
//   username: 'Mango',
//   skills: {
//     html: false,
//     css: true,
//     js: false,
//     python: {
//       matplotlib: 'Know',
//       turtle: "Don't know",
//     },
//   },
//   position: 'Tutor',
//   salary: 1000,
// };

// const { username, skills, ...params } = user2;
// console.log(params);

// const { name, skills: superSkills = {} } = user2;
// const {
//   userName,
//   skills: { js, html },
// } = user2;

// const { usernAme, position = 'Menti' } = user2;

// console.log(position);
// console.log(user2);

// const {
//   skills: { html, css, js },
// } = user;

// const {
//   skills: { html: userHtml },
// } = user2;
// console.log('user2', userHtml);

// console.log(skills); // no access
// console.log('html', html);
// console.log('css', css);
// console.log('js', js);
// console.log('native', native);
// console.log('rtk', rtk);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5];
// arr.first = 123;
// console.log(arr);
// const { first } = arr;

const [firstNumber, secondNumber, ...rest] = arr;
console.log(firstNumber, secondNumber);
console.log('New rest arr', rest);
console.log(arr);
