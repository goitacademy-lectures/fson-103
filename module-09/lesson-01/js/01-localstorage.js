/**
 * LocalStorage
 */

const LS_KEY = 'Array of names';
const names = ['Alice', 'Kate', 'Emma'];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
console.log(window.localStorage);
console.log(window.sessionStorage);

// setTimeout(() => {
//   sessionStorage.setItem('time', '123');
// }, 5000);
// localStorage.setItem('key', ['JavaScript is awesome']);
// localStorage.setItem('names', JSON.stringify(names));
// console.log('res:', { name: 'Mango' });
// const data = JSON.stringify({ name: 'Mango' });
// console.log('JSON stringify data:', data);
// const result = JSON.parse(data);
// console.log('JSON parse result:', result);
// const data1 = JSON.stringify(names);
// console.log(JSON.parse(data1));
// JSON.parse('Hello world'); // ❌ not working
/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
// const namesArr = localStorage.getItem('names');
// console.log('namesArr:', JSON.parse(namesArr));
/**
 * Видалення
 */
setTimeout(() => {
  // localStorage.removeItem('key');
  // localStorage.clear();
}, 5000);
/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const fn = JSON.stringify(add);
console.log('fn:', fn);

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

// localStorage.setItem('calc', JSON.stringify(calculator));

// localStorage.setItem(
//   'userData',
//   JSON.stringify({
//     userID: 123456,
//     theme: 'light',
//   })
// );

// const data = JSON.parse(localStorage.getItem('userData'));
// console.log(data);
