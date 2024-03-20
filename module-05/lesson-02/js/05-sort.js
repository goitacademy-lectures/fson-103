/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 11, 29, 3];

const sorted = numbers.toSorted((a, b) => a - b);
// console.log('sorted ', sorted);
// console.log('sorted ', numbers);
// console.log(numbers === sorted);

// const letters = ['b', 'B', 'a', 'A'];
// console.log(
//   'letters',
//   letters.toSorted((a, b) => a.localeCompare(b))
// );

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(numbers.toSorted((curEl, nextEl) => curEl - nextEl));

const descSortedNumbers = numbers.toSorted((a, b) => b - a);
const ascSortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// За ігровим часом в порядку зростання / спадання
const sortedByBestPlayers = players.toSorted((prevPlayer, nexPlayer) => {
  return nexPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((prevPlayer, nexPlayer) => {
  return prevPlayer.timePlayed - nexPlayer.timePlayed;
});
console.table(sortedByWorstPlayers);

// За першою літерою в імені в порядку зростання
const byName = players.toSorted((prevPlayer, nextPlayer) => {
  // console.log(prevPlayer.name[0]);
  // console.log(nextPlayer.name[0]);
  // return prevPlayer.name[0].localeCompare(nextPlayer.name[0]);

  const result = prevPlayer.name[0] > nextPlayer.name[0];
  if (result) return 1;
  if (!result) return -1;
});
console.table(byName);
