// console.log(window); // setTimeout like method

const FEEDBACK_STORAGE_KEY = 'feedback-msg';
const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="text"]'),
  message: document.querySelector('textarea'),
};
const data = {};

populateTextareaField();
// const { form, input, message } = formRefs;
// console.log(form);
// console.log(input);
// console.log(message);
/**
 * - Скасовуємо стандартну поведінку ✅
 * - Видаляємо повідомлення зі сховища ✅
 * - Очищуємо форму ✅
 */
// Mango JavaScript is awesome

function onFormSubmit(event) {
  event.preventDefault();

  console.log('✅ Data send successfully');
  event.currentTarget.reset();
  // localStorage.removeItem('feedback-msg'); // not bad, but...
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
}
function onFormInput(event) {
  event.preventDefault();
  // const { userName, userMessage } = event.currentTarget.elements;
  // console.log(userName, userMessage);
  console.log(event.target.name);
  console.log(event.target.value);
  data[event.target.name] = event.target.value;
  console.log(data);
}

formRefs.form.addEventListener('submit', onFormSubmit);
formRefs.form.addEventListener('input', onFormInput);
/**
 * - Отримуємо значення поля ✅
 * - Зберігаємо його у сховище ✅
 */
function onTextareaInput(event) {
  // console.log(event.target.value);
  // localStorage.setItem('feedback-msg', event.target.value); // not bad, but...
  localStorage.setItem(FEEDBACK_STORAGE_KEY, event.target.value);
}

formRefs.message.addEventListener('input', _.throttle(onTextareaInput, 300));
/**
 * - Отримуємо значення зі сховища ✅
 * - Якщо там щось було, оновлюємо DOM ✅
 */

function populateTextareaField() {
  // const messageText = localStorage.getItem('feedback-msg'); // not bad, but...
  const messageText = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  // console.log(messageText);
  // JSON.parse(messageText);
  if (!messageText) return;
  formRefs.message.value = messageText;
}

/**
 * Chatty events
 */
// document.body.addEventListener('mousemove', event => {
//   console.log('x: ', event.clientX, 'y:', event.clientY);
// });
// document.body.addEventListener(
//   'mousemove',
//   _.throttle(event => {
//     console.log('x: ', event.clientX, 'y:', event.clientY);
//   }, 500)
// );
