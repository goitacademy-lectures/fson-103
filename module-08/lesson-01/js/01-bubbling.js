/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

// innerChild.addEventListener('click', event => {
//   console.log('Inside innerChild', event.target);
//   // event.stopPropagation();
//   event.stopImmediatePropagation();
//   // console.log(event);
//   // console.log('event.target', event.target);
//   // console.log('event.currentTarget', event.currentTarget);
// });

// innerChild.addEventListener('click', () => {
//   console.log('Another listener');
// });

// child.addEventListener('click', event => {
//   // console.log('event.target', event.target);
//   // console.log('event.currentTarget', event.currentTarget);
// });

// parent.addEventListener('click', event => {
//   console.log('Inside parent', event.target);
// });

for (let element of document.querySelectorAll('*')) {
  element.addEventListener(
    'click',
    event =>
      alert(
        `Capturing phase: <${element.tagName.toLowerCase()}> ${
          element.hasAttribute('id') ? 'ID: #' + element.id : 'No ID'
        }`
      ),
    true
  );
  element.addEventListener('click', event =>
    alert(
      `Bubbling phase: <${element.tagName.toLowerCase()}> ${
        element.hasAttribute('id') ? 'ID: #' + element.id : 'No ID'
      }`
    )
  );
}
