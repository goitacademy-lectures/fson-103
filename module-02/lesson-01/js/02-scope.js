/**
 * Блокова область видимості змінних
 */

function showC() {
  const c = 15;
  console.log(c);
}

showC();

if (true) {
  const a = 5;
  console.log(a);
  // console.log(b);
  console.log(c);
}

if (true) {
  const b = 10;
  // console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(a);
// console.log(b);
console.log(c);
