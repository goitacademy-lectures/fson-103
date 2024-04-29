/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

// const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

showNotification();
/**
 * Функції
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    hideNotification();
    console.log(
      'Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим'
    );
  }, 5000);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}

notification.addEventListener('click', onNotificationClick);
