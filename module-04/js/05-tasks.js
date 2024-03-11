/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy"
user['hobby'] = "skydiving"
user.hobby = "tennis"
user.premium = !user.premium

// console.log("user:", user)
const keys = Object.keys(user)
let result = ''

for (const key of keys) {
  result += `${key} : ${user[key]}\n`
}
// console.log(result);
/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
const salariesArray = Object.values(salaries)
console.log("salariesArray:", salariesArray)
const isSalariesArrayEmpty = Boolean(salariesArray.length);
// console.log(!!salariesArray.length);
if (!isSalariesArrayEmpty) {
  console.log(sum);
} else {
  for (const salary of salariesArray) {
    sum += salary;
  }
  console.log(sum);
}
