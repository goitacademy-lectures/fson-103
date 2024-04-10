/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */
// document.addEventListener('keypress', event => {
//   console.log('Keypress event =>', event.key);
// });
// document.addEventListener('keydown', event => {
//   // console.log('Button code', event.code);
//   // console.log('Button key', event.key);
//   console.log(event);
// });
// document.addEventListener('keyup', event => {
//   console.log('Keyup event =>', event.key);
// });
/**
 * Обробка комбінацій клавіш
 */
const onHardPageReset = event => {
  // console.log(event.metaKey);
  // console.log(event.shiftKey);
  // console.log(event.code === 'KeyR');

  if (event.metaKey && event.shiftKey && event.code === 'KeyR') {
    event.preventDefault();
  }
  if (event.metaKey && event.altKey && event.code === 'KeyM') {
    prompt('What is your name?');
  }
};
document.addEventListener('keydown', onHardPageReset);
