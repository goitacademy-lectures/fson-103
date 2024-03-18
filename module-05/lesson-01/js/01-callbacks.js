/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  // message = undifined
  // callback = fnB
  console.log(message);
  callback(5);
}

// callback === fnB

function fnB(number) {
  console.log('Log during fnB execution ', number);
}

const fnC = function () {};

// fnA('A message', fnB);

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  // a = 2
  // b = 3
  //  callback = function (param1, param2) {
  //   return param1 + param2;
  //  }
  const result = callback(a, b);
  console.log(result);
}

const add = function (param1, param2) {
  return param1 + param2;
};

const multiply = function (arg1, arg2) {
  return arg1 * arg2;
};

// calc(12, 3, multiply);
// calc(12, 3, add);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву.
 * Функція each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  // aaray = [64, 49, 36, 25, 16]
  // callback = function (value) {
  //   return value * 2;
  // }
  const numbers = [];
  for (const item of array) {
    // console.log('number:', item);
    // const res = callback(item);
    // console.log('Callback result', res);
    numbers.push(callback(item));
  }
  return numbers;
}

const result1 = each([64, 49, 36, 25, 16], function (value) {
  // value
  return value * 2;
});
console.log(result1);
const result2 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
console.log(result2);
const result3 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
console.log(result3);
const result4 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
console.log(result4);
const result5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
console.log(result5);
