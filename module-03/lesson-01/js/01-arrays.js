/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PostgreSQL',
  'TypeScript',
  'Vue',
];
// const firstElement = courses[0];

function getElementFromArray(index) {
  return courses[index];
}

function getLastArrayElement(array) {
  const lastElementIndex = array.length - 1;
  return array[lastElementIndex];
}

const lastElement = getLastArrayElement(courses);
console.log('lastElement:', lastElement);
// courses.length = 3;
// console.log(courses);
// courses.length = 0;
// console.log(courses);

// const firstElement = getElementFromArray(0);
// console.log('firstElement:', firstElement);
// const lastElement = getElementFromArray(4);
// console.log('lastElement:', lastElement);
// console.log('Before assignment', courses);

// courses[0] = 'Vue';

// console.log('After assignment', courses);

// console.table(courses);
