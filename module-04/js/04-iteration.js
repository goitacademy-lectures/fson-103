/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good   : 5,
  neutral: 10,
  bad    : 3,
};
{
// let table = `
// ====================
// |  Keys  |  Values
// ====================\n`

// for (const key in feedback) {
//   table += `|${key.padEnd(8, ' ')}|${String(feedback[key]).padStart(4, " ")}\n`
// }
// console.log(table);

let totalFeedback = 0;

for (const key in feedback) {
  totalFeedback+= feedback[key]
}
}
// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
// console.log(keys);
// for (const key of keys) {
//   console.log(feedback[key]);
// }

// for (let index = 0; index < keys.length; index++) {
//   const element = keys[index];
//   console.log("element:", element)
// }

// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
// console.log(values);
let totalFeedback = 0;

for (const value of values) {
  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);

const entries = Object.entries(feedback)

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}
console.log("entries:", entries)
