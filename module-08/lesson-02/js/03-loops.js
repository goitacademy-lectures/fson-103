/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
  },
  {
    name: 'Alex',
  },
  {
    name: 'Mark',
  },
];

/**
 * Без деструктуризації
 */
const names = [];

for (const { name } of users) {
  // console.log(user);
  // names.push(user.name);
  names.push(name);
}

console.log(names);

/**
 * З деструктуризацією
 */
