/**
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

const paragraphEl = document.querySelector('body > p');
// console.dir(paragraphEl);
const itemEl = document.querySelector('.site-nav-item');
if (!itemEl) {
  console.warn("This element doesn't exist");
}
// console.log(itemEl);
const captionEl = document.querySelector('#caption');
// console.log('captionEl:', captionEl);

const linksEl = document.querySelectorAll('.site-nav-link');
// console.log('linksEl:', linksEl);
const links = Array.from(linksEl);
// console.log('links:', links);

const queryRefs = {
  magicBtn: document.querySelector('.js-magic-btn'),
};

queryRefs.magicBtn.onclick = () => {
  const listEl = document.querySelector('.site-nav');
  console.log('listEl:', listEl);
  console.log(listEl.querySelector('li').children);
};
