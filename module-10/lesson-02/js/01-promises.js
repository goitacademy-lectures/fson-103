/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
const loader = document.querySelector('.loader');

const promise = new Promise((resolve, reject) => {
  loader.classList.remove('hide');
  setTimeout(() => {
    const isFullfield = Math.random() > 0.3;
    console.log('promise', isFullfield);

    if (isFullfield) {
      resolve(
        'Проміс виконався успішно, із результатом (виконаний, fulfilled)'
      );
    } else {
      reject('Проміс виконався з помилкою (відхилений, rejected)');
    }
  }, 2000);
});

// promise
//   .then(onSuccess)
//   .catch(onError)
//   .finally(() => {
//     loader.classList.add('hide');
//   });

// function onSuccess(value) {
//   console.log(value + '✅');
// }
// function onError(error) {
//   console.log(error);
// }

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюжки промісів
 * - декілька послідовних then()
 * - then() повертає проміс
 */
promise
  .then(result => {
    console.log(result);
    return '🧙‍♂️';
  })
  .then(prevResult => {
    console.log(prevResult);
    return 5;
  })
  .then(x => console.log(x + 10))
  .catch(error => console.warn(error))
  .finally(() => {
    loader.classList.add('hide');
  });
