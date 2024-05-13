/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 */

console.log('First!');

setTimeout(() => {
  try {
    const result = JSON.parse('Data from server');
    console.log(result);
  } catch (error) {
    console.log(error);
    alert('Some process failed');
  }
}, 2000);

// try {
//   const result = JSON.parse('Data from server');
//   console.log(result);
//   // throw new Error('Zero devision error');
//   // const value = 10 / 0;
//   // console.log(value);
// } catch (error) {
//   console.log(error);
//   console.log(error.message);
// }

console.log('Second!');
