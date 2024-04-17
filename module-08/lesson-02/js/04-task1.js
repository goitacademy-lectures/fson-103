/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */

const user = {
  id: 1,
  username: 'harry_potter',
  profile: {
    name: 'Harry',
    surname: 'Potter',
    age: 25,
  },
};

// Деструктуризація об'єкта для отримання окремих змінних

const {
  username,
  profile: { name: firstName, surname: secondName },
} = user;

// Виведення отриманих значень
console.log(`Ім'я користувача: ${firstName}`);
console.log(`Прізвище користувача: ${secondName}`);
console.log(`Ім'я користувача (за нікнеймом): ${username}`);
