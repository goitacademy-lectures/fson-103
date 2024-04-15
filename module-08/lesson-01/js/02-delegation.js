/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
const boxNameEl = document.querySelector('.box-name');
const boxEl = document.querySelectorAll('.box');
// boxEl.forEach(box => box.addEventListener('click', onBoxClick));

function onBoxClick(event) {
  const currentColor = event.currentTarget.dataset.color;
  boxNameEl.textContent = currentColor;
  boxNameEl.style.color = currentColor;
}

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
const container = document.querySelector('.container');
container.addEventListener('click', onContainerClick);

function onContainerClick(event) {
  // console.log(event.target);
  // console.log('Current target', event.currentTarget);

  // if (!event.target.dataset.color) {
  //   console.warn('Stop function');
  //   return;
  // }

  if (event.target === event.currentTarget) {
    return;
  }

  const currentColor = event.target.dataset.color;
  boxNameEl.textContent = currentColor;
  boxNameEl.style.color = currentColor;
}
