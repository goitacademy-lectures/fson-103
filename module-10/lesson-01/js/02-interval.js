/**
 * Метод setInterval(callback, delay, args)
 */

console.log('До виклику setInterval');

const intervalId = setInterval(
  time => {
    console.log(`Виклик кожні ${time} мс - ${Date.now()}`);
  },
  1000,
  1000
);

console.log('Після виклику setInterval');

/**
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(intervalId);
}, 10_000);
