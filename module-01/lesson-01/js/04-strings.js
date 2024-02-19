/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';

const fullName = 'Hello' + ' ' + firstName + ' ' + lastName + '!';
const fullName_1 = `Hello ${firstName} ${lastName}!`;
// console.log('fullName:', fullName);
// console.log('fullName_1:', fullName_1);

const quantity = 15;
const orderMsg = `You ordered ${quantity + 100} bots`; // ` - backtick symbol
console.log('orderMsg:', orderMsg);

const message = 'This string is 28 chars long ';
// console.log(message.length); // 28
const lastSymbol = message[message.length - 1]; // -> message[27]
console.log('lastSymbol:', lastSymbol);
// message[0] = 't';
// console.log('Update message:', message);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
