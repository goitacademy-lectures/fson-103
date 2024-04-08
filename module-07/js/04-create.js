/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.textContent = 'Main title';
titleEl.style.boxSizing = 'border-box';
titleEl.style.fontSize = '24px';
titleEl.style.color = 'teal';
console.log(titleEl);

// document.body.append(titleEl);

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
console.log('imageEl:', imageEl);
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

/**
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav-item');
const linkEl = document.createElement('a');
linkEl.classList.add('site-nav-link');
linkEl.href = '/reviews';
linkEl.textContent = 'Reviews';
navItemEl.append(linkEl);
// console.log(navItemEl);

const listEl = document.querySelector('.site-nav');
listEl.append(navItemEl);
