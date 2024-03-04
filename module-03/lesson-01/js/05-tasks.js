/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

function sumEvenNumbers() {
  for (const number of numbers) {
    if (number % 2 === 0) {
      total += number;
    }
  }
}
sumEvenNumbers();
// console.log(total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

function showPhoneNumbers(namesAsString, phonesAsString) {
  const namesArray = namesAsString.split(',');
  const phonesArray = phonesAsString.split(',');

  for (let index = 0; index < namesArray.length; index += 1) {
    const name = namesArray[index];
    const phone = phonesArray[index];

    console.log(`${name} has phone number ${phone}`);
  }
}

// showPhoneNumbers(names, phones);

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = '          Welcome to the future';
function printMiddleForString(str) {
  const trimmedStr = str.trim();
  const arrayFromStr = trimmedStr.split(' ');
  const start = 1;
  const end = arrayFromStr.length - 1;
  for (const word of arrayFromStr.slice(start, end)) {
    console.log(word);
  }
}

// printMiddleForString(string);
/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37, -10];
let min;

// function findMinimum(arr) {
//   min = arr[0];

//   for (let index = 1; index < arr.length; index += 1) {
//     if (min > arr[index]) {
//       min = arr[index];
//     }
//   }

//   return min;
// }

// min = findMinimum(values);
min = Math.min(2, 17, 94, 1, 23, 37, -10);
console.log(min);
