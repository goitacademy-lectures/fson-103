/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const btnEl = document.querySelector('.magic-btn');
const textEl = document.querySelector('p[data-text]');
const linkEl = document.querySelector('.site-nav-link');
// linkEl.classList.add('accent');
// linkEl.classList.remove('link');
btnEl.onclick = () => {
  linkEl.classList.toggle('current');

  if (linkEl.classList.contains('current')) {
    textEl.classList.replace('desc-1', 'desc-2');
  }
};
/** */
const currentPageUrl = '/about';

const anchorEl = document.querySelector(
  `.site-nav-link[href="${currentPageUrl}"]`
);
anchorEl.classList.add('current');
