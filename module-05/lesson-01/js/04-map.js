/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const newArr = [1, 2, 3].map((item, index, array) => {
//   // console.log(item);
//   // console.log(index);
//   // console.log(array);
//   return item ** 2;
//   // return undefined
// });

// console.log('newArr:', newArr);

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];
// #region
/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

const getModels = cars => {
  const carModels = cars.map((item, index, array) => {
    // console.log(item.model);
    return item.model;
  });

  return carModels;
};

// console.table(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
// #endregion

const makeCarsWithDiscount = (cars, discount) => {
  const carsWithDisc = cars.map((item, index, array) => {
    const newCarInfo = {
      ...item,
      price: item.price - item.price * discount,
    };

    return newCarInfo;
  });

  return carsWithDisc;
};

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

const playerIdToUpdate = 'player-3';
const playerIdFour = 'player-4';

const updatedPlayers = players.map((item, index, array) => {
  // console.log(item.id === playerIdToUpdate);
  if (item.id === playerIdToUpdate) {
    // return item.timePlayed + 100;
    return {
      ...item,
      timePlayed: item.timePlayed + 100,
      points: item.points + 10,
    };
  }

  if (item.id === playerIdFour) {
    return { ...item, timePlayed: item.timePlayed + 50 };
  }
  return item;
});

// console.log(updatedPlayers);

const isEqual = updatedPlayers === players;
// console.log('isEqual:', isEqual);
