/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */
let msg; // undefined
const username = 'Jupiter';

// console.log('Before');

if (username === 'Mango') {
  msg = `Hello, ${username}`;
} else if (username === 'Poly') {
  msg = `Hello, ${username}`;
} else if (username === 'Ajax') {
  msg = `Hello, ${username}`;
} else {
  msg = `Sorry, ${username}. Access denied`;
}

// console.log('After');
// console.log(msg);
/**
 * -----------------------------
 */

// Level 1 = 100
// Level 2 = 1000
// Level 3 = 2000
function getRandomPoints() {
  let points;
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    points = Number.parseInt(randomNumber * 1000);
  } else {
    points = Number.parseInt(randomNumber * 100);
  }

  return points;
}

const points = getRandomPoints();

// if (points <= 100) {
//   console.log(`Level 1. You have ${points} points`);
// } else if (points <= 500) {
//   console.log(`Level 2. You have ${points} points`);
// } else if (points > 500) {
//   console.log(`Level 3. You have ${points} points`);
// }

/**
 * -----------------------------
 */
const balance = -1000;
let message = balance >= 0 ? 'Negative' : 'Positive';

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }
console.log(message);
