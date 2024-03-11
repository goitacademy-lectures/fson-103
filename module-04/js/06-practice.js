const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propValues = [];
  for (let product of products) {
    if (propName in product) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
    { name: "Radarrr", price: 300, quantity: 40 },
  ];

 for (const product of products) {
    if(product.name === productName) {
      return product.price * product.quantity;
    }
 }

  return `Product ${productName} not found!`
}

console.log(calculateTotalPrice("Radarrr"));
