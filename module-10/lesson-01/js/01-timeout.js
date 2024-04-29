/**
 * Метод window.setTimeout(callback, delay, args)
 */

console.log('До виклику setTimeout');

// console.log('1 - Всередині зворотного виклику для setTimeout');

// console.log('2 - Всередині зворотного виклику для setTimeout');

console.log('Після виклику setTimeout');

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = () => {};

/**
 * Можливість передати параметри для колбеку
 */
const callback = (name, country) => {
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
};
