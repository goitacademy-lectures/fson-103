/**
 * Псевдомасив arguments і Array.from
 */
let res;

function fn() {
  // console.log(arguments);
  const args = Array.from(arguments);
  // console.log(args);
}

res = fn(1, 2, 3);
// console.log(res);
// console.log(fn(1, 2, 3, 4, 5));
// console.log(fn(1, 2, 3, 4, 5, 6, 7));

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

const add = function () {
  let sum = 0;
  let counter = 0;
  // for (const argument of arguments) {
  //   sum += argument;
  // }

  while (counter < arguments.length) {
    sum += arguments[counter];
    counter += 1;
  }
  return sum;
};

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calсAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calсAverage() {
  // arguments = [1, 2, 3, 4]
  let sum = 0;
  for (const argumnet of arguments) {
    sum += argumnet;
  }

  return sum / arguments.length;
}

// console.log(calсAverage(1, 2, 3, 4)); // 2.5
// console.log(calсAverage(14, 8, 2)); // 8
// console.log(calсAverage(27, 43, 2, 8, 36)); // 23.2
