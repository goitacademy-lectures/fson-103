/**
 * Оператор switch
 */

const username = 'Neptun';

// switch (username) {
//   case 'Poly':
//     console.log('Hello Poly');
//     break;
//   case 'Mango':
//     console.log('Hello Mango');
//     break;
//   case 'Jupiter':
//     console.log('Hello Jupiter');
//     break;
//   default:
//     console.log('No users with this name');
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Today');
//     break;
//   case 1:
//     console.log('Tomorrow');
//     break;
//   case 2:
//     console.log('Overmorrow');
//     break;
//   default:
//     console.log('Date in the future');
// }

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

/**
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта
 *
 * В змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете отримати товар завтра з 12:00 в нашому офісі'
 * - 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам зателефонує менеджер'
 */

const option = 2;
let message = '';

switch (option - 1) {
  case 1: // option === 1
    message = 'Ви зможете отримати товар завтра з 12:00 в нашому офісі';
    break;
  case 2: // option === 2
    message = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';
    break;
  case 3: // option === 3
    message = 'Посилка буде відправлена сьогодні';
    break;
  default:
    message = 'Вам зателефонує менеджер';
}

// console.log(message);

/**
 * Напиши скрипт, який повідомляє користувача про підтримку браузера.
 * Назва браузера зберігається в змінній browser
 * Доступні браузери для підтримки: Chrome / Edge / Firefox / Safari / Opera
 *
 * В змінну result записати повідомлення:
 * браузер Chrome                  -> 'Це найпопулярніший браузер'
 * браузер Edge                    -> 'У тебе браузер від Microsoft'
 * браузер Firefox, Safari, Opera  -> 'Ми також підтримуємо цей браузер'
 * інші браузери                   -> 'Даний браузер не підтримується'
 */

const browser = 'Safari';
let result;

switch (browser) {
  case 'Chrome':
    result = 'Це найпопулярніший браузер';
    break;
  case 'Edge':
    result = 'У тебе браузер від Microsoft';
    break;
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    result = 'Ми також підтримуємо цей браузер';
    break;
  default:
    result = 'Даний браузер не підтримується';
}

console.log(result);
