/**
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// Функція makeOrder побудована на колбеках
// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError('❌ Упс, у нас закінчилися продукти');
//   }, 1000);
// };

// makeOrder(
//   'пиріжок',
//   result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   },
//   error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   }
// );

const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    setTimeout(() => {
      if (passed) {
        resolve(`✅ Ваше замовлення: ${dish}`);
      }
      reject('❌ Упс, у нас закінчилися продукти');
    }, 1000);
  });
};

const resultHandler = result => {
  console.log('onMakeOrderSuccess');
  console.log(result);
  return result;
};
const errorHandler = error => {
  console.log('onMakeOrderError');
  console.log(error);
  return error;
};

makeOrder('пиріжок').then(resultHandler).catch(errorHandler);

/**
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = dish => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject('❌ Упс, у нас закінчилися продукти');
};

prepareDish('пиріжок')
  .then(x => {
    console.log(x);
  })
  .catch(e => {
    console.log(e);
  });

/**
 * Приклад типової роботи з промісом - відправка мережевого запиту на сервер
 */
// const BASE_URL = 'https://662b79cdde35f91de15865eb.mockapi.io/users';
// const fetchData = url => {
//   return fetch(url);
// };
// fetchData(BASE_URL)
//   .then(responce => responce.json())
//   .then(data => console.log(data));
