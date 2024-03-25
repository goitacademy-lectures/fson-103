/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
  canBark: true,
};

const dog = Object.create(animal);
dog.name = 'Mango';
dog.age = 8;
dog.passport = true;

// console.log(dog);
// console.log(dog.__proto__.__proto__.__proto__);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }
// const dogParams = Object.keys(dog);
// const dogConfig = Object.values(dog);
// console.log('dogParams:', dogParams);
// console.log('dogConfig:', dogConfig);

// isPrototypeOf()
const isPrototype = animal.isPrototypeOf(dog);
const isPrototype1 = dog.isPrototypeOf(animal);
// console.log('isPrototype:', isPrototype);
// console.log('isPrototype1:', isPrototype1);

/**
 * ----------------------------------------
 */
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);
