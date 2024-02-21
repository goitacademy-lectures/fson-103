/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// function multiply(number_1, number_2) {
//   // let  number_1 = 5
//   // let  number_2 = 3

//   const result = number_1 * number_2;
//   console.log(result);
//   return result;

//   // return undefined
// }

// const result_1 = multiply(5, 3);

// function fnA() {
//   console.log('Inside fnA');
// }
// function fnB() {
//   console.log('Inside fnB');
// }
// function fnD() {
//   console.log('Inside fnC');
// }
// console.log('Before fnA execution');
// fnA();
// console.log('After fnA execution');
// console.log('Before fnB execution');
// fnB();
// console.log('After fnB execution');
// console.log('Before fnC execution');
// fnC();
// console.log('After fnC execution');
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  const comaToDotWeight = weight.replace(',', '.'); // "88.3"
  const comaToDotHeight = height.replace(',', '.'); // "1.75"

  // const weightToNumber = Number.parseFloat(comaToDotWeight);
  // const heighToNumber = Number.parseFloat(comaToDotHeight);
  const result = comaToDotWeight / comaToDotHeight ** 2;

  return Number(result.toFixed(2));
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
