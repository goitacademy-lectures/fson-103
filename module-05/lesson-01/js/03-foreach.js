/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

// for (let index = 0; index < numbers.length; index++) {
//   total += numbers[index];
// }

numbers.forEach(item => (total += item));

// const result = numbers.forEach((arr, value, index) => {
//   console.log('Array', arr);
//   console.log('Item', value);
//   console.log('Index', index);
// });
// console.log(result);
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function logItems(items) {
  // console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  const callback = (item, index, array) => {
    // console.log(item);
    // console.log(index);
    console.log(`${index + 1} - ${item}`);
  };
  items.forEach(callback);
  // items.forEach((item, index, array) => {});
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  // console.log(nameList);
  const phoneList = phones.split(',');
  // console.log(phoneList);
  // Ver. 1
  // nameList.forEach((item, index, array) => {
  //   console.log(`${item}: ${phoneList[index]}`);
  //   // console.log(item);
  //   // console.log(phoneList[index]);
  // });
  // Ver. 2
  nameList.forEach((item, index) =>
    console.log(`${item}: ${phoneList[index]}`)
  );

  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
function calculateAverage(...args) {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  args.forEach((item, index, array) => (total += item));
  return total / args.length;
}

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
