/**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

const numbers = [5, 10, 15, 20, 25, 10];

let result = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 11) {
    result = element;
    break;
  }
}

// console.log(result);

const number = numbers.find((item, index, array) => {
  // console.log(item);
  return item === 10;
});
// console.log('Output', number);

/**
 * -----------------------------
 */
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];
console.table(allCars);
/**
 * Шукаємо машину за моделлю
 */
// const getCarByModel = (cars, model) => {
//   return cars.find((item, index, array) => {
//     return item.model === model;
//   });
// };
const getCarByModel = (cars, model) => cars.find(item => item.model === model);

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/**
 * Шукаємо машину за типом кузова
 */
const getCarByType = (cars, type) => {
  return cars.find((item, index, array) => {
    return item.type === type;
  });
};

console.log(getCarByType(allCars, 'sedan'));
console.log(getCarByType(allCars, 'truck'));
console.log(getCarByType(allCars, 'tank'));
