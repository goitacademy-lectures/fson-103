/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('Before');

// const start = 10;
// const end = 0;
// let sum = 0;

// for (let index = start; index > end; index -= 1) {
//   sum += index;
// }

// const paragraphEl = document.querySelector('.str');
// paragraphEl.textContent = sum;
// console.log('After');

/**
 * -------------------------------
 */

// console.log('Before');

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('After');

/**
 * -------------------------------
 */

// let a = 10;
// let c = --a;
// let b = a--;

// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

/**
 * -------------------------------
 */

// console.log('Before while loop');

let counter = 0;
// while (counter < 10) {
//   ++counter;
//   if (counter === 5) {
//     continue;
//   }
//   console.log(counter);
//   console.log('_____');
// }

// do {
//   console.log('Some info');
// } while (counter < 0);

// console.log('After while loop');

function formatMessage(message, maxLengthrams) {
  const messageLength = message.length;
  if (messageLength > maxLengthrams) {
    return message.slice(0, maxLengthrams) + '...';
  } else {
    return message;
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16));
