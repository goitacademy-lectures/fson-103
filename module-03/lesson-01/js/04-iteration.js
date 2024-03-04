/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes - повертає Boolean: true || false
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
const end = friends.length;
let table = '| Index | Value\n';

for (let index = 0; index < end; index += 1) {
  table += `|  ${index}:   | ${friends[index]}\n`;
}

function findFriend(friendName) {
  const isFriends = friends.includes(friendName);

  if (isFriends) {
    return `Hoorray 😃 ${friendName} is my friend`;
  }

  return `Sorry ☹️ ${friendName} is not my friend`;
}

// const res = findFriend('Ajax');
// console.log('res:', res);

for (const friend of friends) {
  // console.log(friend);
  // console.log(friends);
}

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = '8 11';

function calculateSquare(values) {
  const squareParams = values.split(' ');
  const width = squareParams[0];
  const height = squareParams[1];

  return width * height;
}

// const res = calculateSquare(values);
// console.log('res:', res);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі "номер_елемента: значення_елемента".
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

function printFuitsToConsole(array) {
  for (let index = 0; index < array.length; index += 1) {
    // console.log(index);
    const element = array[index];

    const result = `${index + 1} : ${element}`;

    console.log(result);
  }
}

const res = printFuitsToConsole(fruits);
