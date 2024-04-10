/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * фіолетовий квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector('.js-click');
const addEvt = document.querySelector('.js-add-listener');
const removeEvt = document.querySelector('.js-remove-listener');
const box = document.querySelector('.js-box');

const onBtnclick = () => {
  console.log('Clicked on btn');
};

addEvt.addEventListener('click', () => {
  console.log('Add event listener to btn Clicked me');
  clickMe.addEventListener('click', onBtnclick);
});
removeEvt.addEventListener('click', () => {
  console.log('Remove event listener from btn Clicked me');
  clickMe.removeEventListener('click', onBtnclick);
});

// #region
// function fn1() {
//   console.log('Invoke fn1');
// }
// function fn2() {
//   console.log('Invoke fn2');
// }

// clickMe.onclick = () => {
//   fn1();
//   fn2();
// };
// clickMe.onclick = null;

// const handleBtnClick = () => {};
// const options = {
//   once: true,
// };

// Event listeners
// const onBtnClick = () => {
//   console.log('Clicked from addEventListener method');
// };

// clickMe.addEventListener('click', onBtnClick);
// clickMe.removeEventListener('click', onBtnClick);
// #endregion

// clickMe.addEventListener('click', moveSquare);

let step = 0;

function moveSquare() {
  // console.log('moveSquare  box:', box);
  if (step >= 400) {
    console.log('Box on edge');
    return;
  }
  step += 50;
  box.style.transform = `translate(${step}px, ${step}px)`;
  // console.log(step);
}
