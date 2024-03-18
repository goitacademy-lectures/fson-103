/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

function add(a, b, c) {
  return a + b + c;
}

const addArrow = (a, b, c) => a + b + c; // return a + b + c

// IFFE
// ((number, base) => {
//   console.log(number ** base);
// })(5, 2);

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

// console.log(fnA());

const arrowFnA = () => ({ a: 5 });
const arrowFnA1 = () => {
  const obj = {
    a: 5,
  };
  obj.b = 10;
  return obj;
};

const arrayFn = () => [1, 2, 3, 4, 5];

// console.log(arrowFnA());
// console.log(arrayFn());

const fn1 = function () {
  console.log(arguments);
};
const fn2 = (a, ...arr) => {
  console.log(a);
  console.log(arr);
};

// fn1('Mango', 'Poly', 'Ajax');
// fn2('Ajax', 'Mango', 'Poly');
/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, (x, y) => x + y);

calc(10, 8, (x, y) => x - y);

calc(100, 2, (x, y) => x / y);
