/**
 * Синтаксис async/await
 * try...catch
 */

const foo = async () => {
  console.log('Before await');

  const promiseValue = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(5);
      }

      reject('❌ Some error');
    }, 2000);
  });

  console.log('After await', promiseValue);
  // return promiseValue;
};

// foo()
//   .then(value => {
//     console.log('Inside then after Promise ', value);
//   })
//   .catch(error => {
//     console.log(error);
//   }); // через 2 секунди виведеться в консоль  "After await" 5

// const sum = async (a, b) => {
//   return fetch('some-server.com')
//     .then(data => {
//       const userId = 1;
//       return userId;
//     })
//     .then(userId => {
//       fetch(`some-server.com/${userId}`)
//         .then(result => {})
//         .catch(() => {});
//     })
//     .catch(error => {});
//   // return a + b;
// };

// const sum1 = async function () {};

// console.log('✅ First');
// // console.log(sum(10, 20));
// sum(10, 20).then(data => console.log(data));
// console.log('✅ Second');

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
// #region
//? Запит за користувачами і обробка відповіді через async/await та try/catch
const fetchUsers = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert('Користувачів не знайдено!');
  }

  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }

  //   return response.json();
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   alert('Користувачів не знайдено!');
  // });
};

// console.log('🧙‍♂️ First');
// fetchUsers();
// console.log('🧙‍♂️ Second');

// #endregion

// #region
//? Запит за користувачами і обробка відповіді через async/await та then()/catch()
const getUsers = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('❌ Відсутні дані про користувачів');
  }

  const data = await response.json();
  return data;
};

// getUsers()
//   .then(userData => {
//     console.log(userData);
//   })
//   .catch(error => {
//     // console.log(error);
//     alert(error);
//   });

// #endregion

// #region
//? Перепиши на async/await
const loadPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error(response.status);
  return response.json();

  //   .then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }

  //   return response.json();
  // });
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

//? Є «звичайна» функція fn. Як можна всередині неї отримати результат виконання async-функції?
function fn() {
  // Що потрібно написати, щоб викликати wait()
  // і дочекатися результату "10" від async-функції
  // не забувайте, що тут не можна використовувати "await"

  // try {
  //   const result = await wait()
  // } catch (error) {

  // }
  wait()
    .then(value => console.log(value))
    .catch(err => console.log(err));
}

// fn();
// #endregion
