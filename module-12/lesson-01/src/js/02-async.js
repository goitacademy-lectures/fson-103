/**
 * Синтаксис async/await
 * try...catch
 */

const sum = (a, b) => {
  return a + b;
};

// console.log('✅ First');
// console.log(sum(10, 20));
// console.log('✅ Second');

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
// #region
//? Запит за користувачами і обробка відповіді через async/await
// const fetchUsers = async () => {
//   try {
//     const response = await fetch(BASE_URL);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     alert('Не знайдено!');
//   }
// };

// console.log('🧙‍♂️ First');
// fetchUsers();
// console.log('🧙‍♂️ Second');

// #endregion

// #region
//? Запит за користувачами і обробка відповіді через async/await та then()/catch()
const fetchUsers = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};

// fetchUsers()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// #endregion

// #region
//? Перепиши на async/await
const loadPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

// loadPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// #endregion

// #region
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

//? Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
function f() {
  // Що потрібно написати, щоб викликати wait()
  // і дочекатися результату "10" від async-функції
  // не забувайте, що тут не можна використовувати "await"
}

// f();
// #endregion
