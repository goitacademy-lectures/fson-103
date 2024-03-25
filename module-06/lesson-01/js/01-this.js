/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */
function foo() {
  console.log('foo -> this', this);
}

// foo();

/**
 * Контекст методу об'єкта user
 */

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але showTag оголошена як зовнішня функція.
 */

function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this.tag);
}

// showTag();

const mango = {
  tag: 'Mango',
};

mango.showUserTag = showTag;

// mango.showUserTag();

/**
 * Виклик без контексту, але showTag оголошена як метод об'єкта.
 */

const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
  addEmail(userEmail = '') {
    if (userEmail.includes('@')) {
      this.email = userEmail;
    }
  },
};
const ajax = {
  tag: 'Ajax',
};

// const outerShowTag = poly.showTag;
// outerShowTag();
// poly.showTag();
poly.addEmail('example@mail.com');
// console.log(poly);

const ajaxEmail = poly.addEmail;
// console.log('outerShowTag:', ajaxEmail);

ajax.addOuterEmail = ajaxEmail;
ajax.addOuterEmail('ajaxNewEmail@mail.com');
// console.log(ajax);
/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: 'Jacob',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

function invokeAction(action) {
  // action -> callback
  console.log(action);
  action();
}

// invokeAction(jacob.showTag);
