/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const onFormSubmit = event => {
  event.preventDefault();
  // console.dir(event.currentTarget.elements);
  // const userEmail = event.currentTarget.elements.user_email;
  // console.log('onFormSubmit  userEmail:', userEmail.value);
  // const userPass = event.currentTarget.elements.user_password;
  // console.log('onFormSubmit  userPass:', userPass.value);
  // const userMsg = event.currentTarget.elements.user_comment;
  // console.log('onFormSubmit  userMsg:', userMsg.value);
  // const data = new FormData(form);
  // data.forEach((fieldValue, fieldKey) => {
  //   console.log(`${fieldKey} => ${fieldValue}`);
  // });

  const formEl = event.currentTarget.elements;

  const info = {
    email: formEl.user_email.value,
    pass: formEl.user_password.value,
    message: formEl.user_comment.value,
  };

  console.log(info);

  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
