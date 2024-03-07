// "Розкажіть, будь ласка, як працює: ""Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push"""

// function createArrayOfNumbers(min, max) {
//   // const min =
//   // cosnt max =
//   const start = Math.min(min, max);
//   const end = Math.max(min, max);
//   const numbers = [];

//   for (let index = start; index <= end; index += 1) {
//     numbers.push(index);
//   }

//   return numbers;
// }
let res;
// res = createArrayOfNumbers(1, 3);
// res = createArrayOfNumbers(34, 29);
// console.log('res:', res);

function transformString(string = '') {
  return string.split('_').join('-');
}

transformString('user_age'); // "user-age"
transformString('price_per_droid'); // "price-per-droid"

/**
// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// Підкажіть будь ласка логіку написання цього завдання з ЛМС
*/

// const getSlice = function (array, value) {
//   // array =
//   // value =
//   const end = array.indexOf(value);
//   return array.slice(0, end + 1);
//   // const values = [];

//   // if (end === -1) return values;

//   // for (let index = 0; index <= end; index += 1) {
//   //   values.push(array[index]);
//   // }

//   // return values;
// };

// res = getSlice(['Lorem', 'Ipsum', 'dolor', 'amet'], 'dolor');
// console.log('res:', res);

function foo(array) {
  // array = numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
}

const numbers = [1, 2, 3, 4, 5];
foo(numbers);
// console.log('res:', numbers);

const a = [1, 2, 3];
const b = a;
// console.log('b[1]:', b[1]);
b[1] = 123;
// console.log(a);

const createReversedArray = function () {
  // arguments
  const reversedNumbers = [];
  for (let index = arguments.length - 1; index >= 0; index -= 1) {
    const element = arguments[index];
    reversedNumbers.push(element);
  }
  return reversedNumbers;
  // const numbers = Array.from(arguments);
  // const reversedNumber = numbers.toReversed();
  // return reversedNumber;
};

res = createReversedArray(1, 2, 3);
console.log('res:', res);
