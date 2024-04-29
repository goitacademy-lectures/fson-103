/**
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До виклику setTimeout');
// console.time('Execute log from cycle for');
// for (let i = 0; i < 200_000; i++) {
//   console.log(i);
// }
// console.timeEnd('Execute log from cycle for');

// setTimeout(() => {
//   console.log('1 - Всередині зворотного виклику для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 - Всередині зворотного виклику для setTimeout');
// }, 1000);

// console.log('Після виклику setTimeout');

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const time = 2000; // кількість часу для планування виклику
const logger = () => {
  console.log(
    `Вивід в консоль спрацював через ${time} мс, оскільки ми не скасували виклик setTimeout`
  );
};

// const timeoutId_1 = setTimeout(logger, time * 1);
// console.log('timeoutId_1:', timeoutId_1);
// const timeoutId_2 = setTimeout(logger, time * 1.25);
// console.log('timeoutId_2:', timeoutId_2);
// const timeoutId_3 = setTimeout(logger, time * 1.5);
// console.log('timeoutId_3:', timeoutId_3);
// const timeoutId_4 = setTimeout(logger, time * 2);
// console.log('timeoutId_4:', timeoutId_4);

// clearTimeout(timeoutId_1);
// clearTimeout(timeoutId_2);
// clearTimeout(timeoutId_3);
// clearTimeout(timeoutId_4);

/**
 * Можливість передати параметри для колбеку
 */
// const name = 'Boris';
// const country = 'England';
// const callback = (...args) => {
const callback = ({ name, country }) => {
  // console.log(options);
  // const [name, country] = args;
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
};

const options = {
  name: 'Boris',
  country: 'England',
};

setTimeout(callback, 1000, options);
