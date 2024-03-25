/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const showThis = function (param1, param2, arr) {
  console.log(param1, param2, arr);
  console.log('showThis -> this', this);
  const newObj = { ...this };
  console.log('newObj', newObj);
  newObj.x = param1;
  newObj.y = param1;
  newObj.numbers = arr;
  return newObj;
};

// console.dir(showThis);
// showThis();

const objA = {
  a: 5,
  b: 10,
};

// showThis.call(objA, 6, 1, [100, 200, 300]);
// showThis.apply(objA, [6, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// const res = showThis.call(objB, 1, 1, [2]);
// showThis.apply(objB, [1, 1, 2]);
// console.log(res);
// console.log(res === objB);

// showThis();

/**
 * -------------------------------
 */
const changeColor = function (color) {
  // console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');
// console.log(hat);

changeSweaterColor('red');
// console.log(sweater);

/**
 * -------------------------------
 */
const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

const timer = {
  value: 4,
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log('Counter object', counter);

updateCounter(6, counter.increment.bind(timer));
// Привʼязати контекст для decrement і зменшити значення timer.value на 20
console.log('Timer object', timer);
// timer = {value: -10}
console.log('Timer object', timer);
