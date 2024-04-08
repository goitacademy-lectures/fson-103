/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imgUrl = '../img/cat.avif';

const imageEl = document.querySelector('.hero-image');
// console.log('imageEl:', imageEl);
// console.log(imageEl.src);
// console.log(imageEl.alt);
// console.log(imageEl.width);

imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
setTimeout(() => {}, 2000);
imageEl.src = imgUrl;
setTimeout(() => {}, 4000);

const heroTitleEl = document.querySelector('.hero-title');
// console.dir(heroTitleEl.childNodes[0].nodeValue);
// console.dir(heroTitleEl.textContent);
heroTitleEl.textContent = "About cat's";
heroTitleEl.textContent = '';

/**
 * Атрибути
 * - has(ім'я-атрибута)
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 */
const inputEl = document.querySelector('.js-input');
// console.log(inputEl.value);
inputEl.oninput = event => {
  // console.log(event.target.value);
};

const res1 = inputEl.hasAttribute('name');
const res2 = inputEl.getAttribute('name');
const res3 = inputEl.getAttribute('value');
inputEl.setAttribute('value', 'CatGog');
// console.log('res:', res3);

inputEl.removeAttribute('class');

/**
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');
// console.dir(actions[1].dataset.action);

actions.forEach(action => {
  console.log(action.dataset.action);
});
