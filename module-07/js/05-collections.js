/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// options.forEach(option => {
//   const btnEl = document.createElement('button');
//   btnEl.style.color = option.color;
//   btnEl.classList.add('color-picker-option');
//   btnEl.textContent = option.label;
//   debugger;
//   colorPickerContainerEl.append(btnEl);
// });
// const btnsEl = options.map(option => {
//   const btnEl = document.createElement('button');
//   btnEl.style.color = option.color;
//   btnEl.classList.add('color-picker-option');
//   btnEl.textContent = option.label;
//   return btnEl;
// });

/**
 * Пишемо функцію для створення розмітки колорпікера
 */
function createBtnEl(option) {
  const btnEl = document.createElement('button');
  btnEl.style.color = option.color;
  btnEl.classList.add('color-picker-option');
  btnEl.textContent = option.label;
  return btnEl;
}
const btnsEl = options.map(createBtnEl);

colorPickerContainerEl.append(...btnsEl);
