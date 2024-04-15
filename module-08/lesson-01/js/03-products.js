/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//  <li class="product-item" data-id="1">
//    <img
//      src="https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG"
//      alt=""
//      class="product-ill"
//    />
//    <h2 class="product-name">Monitor</h2>
//    <p class="product-price">
//      Price: <span>3000</span>
//    </p>
//  </li>;

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];
// 1. Обрали список з майбутніми картками товарів
const productListEl = document.querySelector('.product-list');
// 2. Згенерували шаблонний рядок із розміткою карточок товарів
const markup = products.reduce((html, product) => {
  return (html += `
   <li class="product-item" data-id="${product.id}">
    <img
      src="${product.img}"
      alt="${product.name}"
      class="product-ill"
    />
    <h2 class="product-name">${product.name}</h2>
    <p class="product-price">
      Price: <span>${product.price}</span>
    </p>
  </li>
 `);
}, '');
// console.log(markup);
// 3. Додали розмітку в HTML
productListEl.insertAdjacentHTML('beforeend', markup);

// 4. Додали обробник події для кліку на картку
productListEl.addEventListener('click', onProductClick);

function onProductClick(event) {
  if (event.target === event.currentTarget) return;

  const productCardEl = event.target.closest('.product-item');
  // if (!productCardEl) return;

  const id = productCardEl.dataset.id;
  const currentProduct = products.find(product => {
    return product.id === Number(id);
  });

  // console.log(currentProduct);

  // Використали бібліотеку для додавання модальног вікна
  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img
      src="${currentProduct.img}"
      alt="${currentProduct.name}"
    />
    <h2>${currentProduct.name}</h2>
    <p>
      Price: <span>${currentProduct.price}</span>
    </p>
    <p>${currentProduct.description}</p>
  </div>
`
  );
  instance.show();
}
