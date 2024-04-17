/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob ',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
function getUserName({ username = '', skills: { html, css, js } } = {}) {
  // if (Object.keys(obj)) return;

  // const {
  //   username,
  //   skills: { html, css, js },
  // } = obj;

  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`
  );
}

// З деструктуризацією

getUserName(user);

// getUserName();

const prop = {
  name: 'Mango',
  email: 'mango@mail.com',
  pass: '123qwe',
};

function fn({} = {}) {
  // const { name, email, pass } = params;
  // console.log(name, email, pass);
  if (!pass) return;
  console.log(pass);
}

// fn(prop);
fn();
