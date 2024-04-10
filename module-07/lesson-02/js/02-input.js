/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
// #region
// const userName = document.querySelector('.js-user-name');

const onInputName = (event, number) => {
  // console.log('Register input event');
  const inputEl = event.currentTarget;
  // console.log('onInputName:', inputEl);
  console.log('Value:', inputEl.value);
  // console.log('Next param:', number);
};

// userName.addEventListener('input', event => {
//   onInputName(event, 25);
//   // console.log('Inside anonimus function');
// });

// DON'T USE CHANGE ON INPUT AND TEXTAREA
// userName.addEventListener('change', event => {
//   console.log('Info', event.currentTarget.value);
// });

// userName.addEventListener('focus', () => {
//   console.log('Set cursor to field');
// });
// userName.addEventListener('blur', () => {
//   console.log('Start some animation...');
// });
// #endregion

// message.addEventListener('input', onInputName);
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
const userName = document.querySelector('.js-user-name');

userName.addEventListener('blur', event => {
  const name = event.currentTarget.value;
  // console.log('name:', name);
  alert(`${name} glad to see you 🎉`);

  event.currentTarget.value = '';
});
