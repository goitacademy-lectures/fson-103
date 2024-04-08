/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
const res = titleEl.textContent;
console.log('res:', res);
const res1 = titleEl.innerHTML;
console.log('res1:', res1);
// titleEl.innerHTML +=
//   ' Main title <em>added with <code>innerHTML</code> method</em>';
// titleEl.innerHTML = '';

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
titleEl.insertAdjacentHTML(
  'beforeend',
  `<p>
    Main title <em> added with <code>innerHTML</code> method
    </em>
  </p>
  `
);
