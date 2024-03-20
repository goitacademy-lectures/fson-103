/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
let result = 0;
for (let index = 0; index < numbers.length; index++) {
  const item = numbers[index];
  result += item;
}

// console.log('Result is:', result);

// function callback(accumulator, item, index, array) {
//   console.log(
//     `Start value: ${accumulator}, array item ${item} with index ${index} in array [${array}]`
//   );

//   return accumulator;
// }

// const total = numbers.reduce((prevValue, currValue, index, array) => {
//   return prevValue + currValue;
// }, 0);
const total = numbers.reduce((prevValue, currValue, index) => {
  // prevValue.push(currValue + 10);
  // return prevValue;
  const key = `${index}_`;
  const obj = {
    [key]: currValue,
  };

  prevValue.push(obj);
  return prevValue;
}, []);
console.log(total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const salaries = Object.values(salary);
// console.log('salaries:', salaries);
const totalSalary = salaries.reduce((acc, item) => {
  return acc + item;
}, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

let totalTime = 0;
// for (let index = 0; index < players.length; index++) {
//   const item = players[index];
//   // console.log('item:', item.timePlayed);
//   totalTime += item.timePlayed;
// }
for (const player of players) {
  totalTime += player.timePlayed;
}
// console.log('Total time with for:', totalTime);

const totalTimePlayed = players.reduce((acc, item) => {
  return acc + item.timePlayed;
}, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 }, // 200
  { label: 'Bananas', price: 120, quantity: 3 }, // 360
  { label: 'Lemons', price: 70, quantity: 4 }, // 280
];

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

// console.log(totalAmount);

const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((total, current) => {
  return total + current;
}, 0);
const averagePlayTime = totalPlayTime / playtimes.length;
