/**
 * Фільтрація за діапазоном
 * Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers,
 * шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
 */
const arr1 = [10, 20, 2, 3, 56, 4];
// Рішення 1
// const filterRange = (numbers, min, max) => {
//   const filteredArr = [];
//   for (const number of numbers) {
//     if (number >= min && number <= max) {
//       filteredArr.push(number);
//     }
//   }

//   return filteredArr;
// };

// Рішення 2
const filterRange = (numbers, min, max) =>
  numbers.filter(number => number >= min && number <= max);

// console.log(filterRange(arr1, 3, 10));

/**
 * Відфільтруйте масив на унікальні значення
 * Рішення 1. forEach() та includes()
 * Рішення 2. filter() та indexOf()
 */
const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// Рішення 1
// const filtredUsers = array => {
//   const filteredUsers = [];
//   array.forEach((user, index, arr) => {
//     if (!filteredUsers.includes(user)) {
//       filteredUsers.push(user);
//     }
//   });
//   return filteredUsers;
// };
// Рішення 2
// const filtredUsers = users =>
//   users.filter((user, index, arr) => arr.indexOf(user) === index);

// console.log(users);
// console.log(filtredUsers(users));

/** Відфільтруйте масив з користувачами на унікальні значення */
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Linda', age: 29 },
// ];

// console.log(allUsers[1]['firstName']);
// console.log(allUsers[1].age);

// const filtredUsers = [];
// // 1-iteration:  const filtredUsers = [{ firstName: 'Herbert', age: 25 }];
// // 2-iteration:  const filtredUsers = [{ firstName: 'Herbert', age: 25 }];
// // 2-iteration:  const filtredUsers = [{ firstName: 'Herbert', age: 25 },  { firstName: 'Todd', age: 30 },];

// allUsers.forEach((currentUser, index, array) => {
//   const isUniqUser = filtredUsers.find(
//     user => user.firstName === currentUser.firstName
//   );

//   // const isUniqUser = filtredUsers.some(
//   //   user => user.firstName === currentUser.firstName
//   // );
//   // console.log(' isUniqUser:', isUniqUser);

//   if (!isUniqUser) {
//     filtredUsers.push(currentUser);
//   }
// });

// console.log(allUsers);
// console.log(filtredUsers);

/**
 * Відсортувати користувачів за віком
 * Напишіть функцію sortByAge(users), яка приймає масив обʼєктів
 * з властивістю age і сортує їх за цією властивістю.
 */
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Linda', age: 29 },
// ];

// const sortByAge = users => users.toSorted((a, b) => a.age - b.age);

// console.table(allUsers);
// console.table(sortByAge(allUsers));

/**
 Вирахувати середній вік
 Напишіть функцію getAverageAge(users), яка приймає масив об’єктів
 з властивістю age та повертає середній вік.
*/
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Linda', age: 29 },
// ];

// const getAverageAge = users => {
//   const totalAge = users.reduce((acc, user) => {
//     return (acc += user.age);
//   }, 0);
//   return totalAge / users.length;
// };

// console.log(getAverageAge(allUsers)); // 28

/**
 Напиши клас Notes, який управляє колекцією нотаток у властивості items.
 Нотатка це об'єкт із властивостями text та priority.
 Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.

 {
 LOW: 'low',
 NORMAL: 'normal',
 HIGH: 'high'
 }

 Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(config) {
    this.items = config;
  }

  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter(item => item.text !== text);
  }
  updatePriority(text, newPriority) {
    const findNote = this.items.find(note => {
      return note.text.toLowerCase() === text.toLowerCase();
    });
    if (!findNote) {
      console.warn('Note not find');
      return;
    }
    findNote.priority = newPriority;
  }
}

const myNotes = new Notes([]);
console.log(myNotes);

myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
console.log(myNotes);

myNotes.addNote({
  text: 'Моя друга нотатка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes);

myNotes.removeNote('Моя перша нотатка');
console.log(myNotes);

myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);
console.log(myNotes);
myNotes.updatePriority('Моя друга ноа', Notes.Priority.HIGH);

if (true) {
  let userage = 20;
  var username = 'mango'; //undefined
}

// console.log(username);
// console.log(userage);

function fnA() {
  console.log(username);
  var userstatus = 'online';
}

// fnA();
// console.log(userstatus);

const book = {
  title: 'Js is awesome',
  author: 'Poly',
};

const keyStart = 'ti';
const keyEnd = 'tle';

console.log(book[`${keyStart}${keyEnd}`]);

const itemId = 'author';

const authorName = book[itemId];
console.log('authorName:', authorName);
