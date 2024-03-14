/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// function showNumbers(...numbers) {
//   console.log(numbers);
//   for (const number of numbers) {
//     console.log(number);
//   }
// }
// showNumbers(1, 2, 3, 4, 5, 6, 7);
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
const numbers = [1000, ...arr_1, 5000, ...arr_2, 7000, 9000];
// console.log(numbers);

/**
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

let max = Math.max(...temps);
// console.log('result:', max);
let min = Math.min(...temps);
// console.log('min:', min);
/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

a[0].x = 10;

// console.log('b: ', b[0]);
/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {
  ...objA,
  ...objB,
};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
  // theme: 'dark',
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);
