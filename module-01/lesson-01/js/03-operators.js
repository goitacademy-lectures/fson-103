/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

const result = a % 3; // 3 рази по 3 і залишається 1
// console.log('result:', result);

// const sum = a + b;
// console.log('sum:', sum);
// const extract = a - b;
// console.log('extract:', extract);
// const mul = a * b;
// console.log('mul:', mul);
// const divide = a / b;
// console.log('divide:', divide);
// const root = a ** b;
// console.log('root:', root);
/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const totalFruits = apples + grapes;
// console.log('Total fruits:', totalFruits);
const extractApplesFromGrapes = apples - grapes;
// console.log('Extract:', extractApplesFromGrapes);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50;
students += 50;
students -= 50;
students *= 50;
students /= 50;
// console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

// const result = 108 + (223 - 2) * 5;
// console.log('Result: ', result);
