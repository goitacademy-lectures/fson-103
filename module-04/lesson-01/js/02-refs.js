/**
 * Об'єкти
 *
 * - Присвоєння за посиланням
 * - Масиви і функції - це об'єкти
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

// console.log(arr1 === arr2);
// console.log(arr1 === arr3);

const obj1 = {
  x: 1,
  y: 10,
};
const obj2 = obj1;

obj2.z = 30;

obj1.perspective = '300px';
// console.log(obj1);
// console.log(obj2);

/**
 * --------------------------
 */

const arr = [1, 2, 3];

// arr.hello = '😄';

// console.log(arr);

function foo() {
  console.log('hello');
}

foo();
console.dir(foo);

foo.newKey = 'key';
