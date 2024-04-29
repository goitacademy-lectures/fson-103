/**
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const obj = new Object();
// console.log('obj:', obj);

// const currentTime = new Date('2023-04-29T11:23');
// const currentTime = new Date(-1000 * 60 * 60 * 24); // 1000 мсек = 1 сек * 60 = 1 хв * 60 = 1 год * 24 = 1 д
// console.dir(currentTime);
// console.log(currentTime.getDate());
// console.log(currentTime.getDay());
// console.log(currentTime.getFullYear());
// console.log(currentTime.setFullYear(2022));
// console.dir(currentTime);

const now = new Date(); // час на момент запуску скрипта
// console.log('now:', now);
const past = Date.now();
console.log('past:', past);

setInterval(() => {
  // const future = new Date(); // час через який створити ще одни екзепляр обʼєкту з часом
  const future = Date.now();
  // console.log('setTimeout  future:', future);
  const deltaTime = future - now;

  console.log(deltaTime);
}, 1000);

// const date1 = Date.now();
// console.log('date1', date1);
