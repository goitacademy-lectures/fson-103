/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */
const todoId = 1;
// const BASE_URL = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
// const BASE_URL = `https://jsonplaceholder.typicode.com/todos/`;
const BASE_URL = `https://jsonplaceholder.typicode.com/`;
const options = {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
fetch(BASE_URL)
  .then(resopnse => {
    if (!resopnse.ok) {
      // console.log('❌ Запит виконався з помилкою');
      throw new Error('❌ Запит виконався з помилкою');
    }
    console.log('✅ Запит виконався успішно');
    return resopnse.json();
  })
  .then(res => console.log(res))
  .catch(error => console.log(error));

const list = document.querySelector('.todo-list');

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = id => {
  return fetch(`${BASE_URL}users/${id}/todos`).then(resopnse => {
    if (!resopnse.ok) {
      throw new Error('❌ Запит виконався з помилкою');
    }
    console.log('✅ Запит виконався успішно');
    return resopnse.json();
  });
};

fetchTodos(todoId)
  .then(todos => {
    // console.log(todos);
    const markup = todos
      .map(todo => {
        // console.log(todo);
        const { title, completed } = todo;
        return `<li>
        <h3>${title}</h3>
        <em>${completed}</em>
      </li>`;
      })
      .join('');
    list.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log(error));
