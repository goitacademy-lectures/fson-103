/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter(a, b, c, d) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter({}, 10, 15, 10, 15);
console.log(`Периметр будинку: ${perimeter}`);

const houseData = {
  sideInfo: {
    sideA: 10,
    sideB: 15,
  },
  hasRoof: true,
};

const calculatePerimeter = (data = {}) => {
  const {
    sideInfo: { sideB, sideA },
    ...anotherInfo
  } = data;

  return (sideA + sideB) * 2;
};
const perimetr2 = calculatePerimeter(houseData);
const perimetr3 = calculatePerimeter({
  hasRoof: true,
  sideInfo: {
    sideA: 10,
    sideB: 15,
  },
});

// console.log('perimetr2:', perimetr2);
// console.log('perimetr3:', perimetr3);

// const userInput = prompt('Input number');
// console.log('userInput:', typeof userInput);
// console.log(+userInput);
// console.log(Number(userInput));
