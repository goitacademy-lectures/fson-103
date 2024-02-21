/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = '50px';
// console.log('elementWidth: ', Number.parseInt(elementWidth));

let elementHeight = '200.7498px';
// console.log('elementHeight: ', Number.parseFloat(elementHeight));

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.9;

console.log(Math.ceil(value));
console.log(Math.floor(value));
console.log(Math.round(value));
