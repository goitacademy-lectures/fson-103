/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const refs = {
  clockface: document.querySelector('.clockface'),
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
};
let intervalId = null;
let isActive = false;
let counter = 0;

// console.log(refs);

const timer = {
  start() {
    if (isActive) {
      return;
    }

    isActive = true;
    const initialTime = Date.now();
    // console.log('start  initialTime:', initialTime);
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      // console.log('setInterval  currentTime:', currentTime);
      const deltaTime = currentTime - initialTime;
      console.log('setInterval  deltaTime:', deltaTime);
      const time = getTimeComponents(deltaTime);
      console.log('setInterval  time:', time);

      // refs.clockface.innerHTML = `${time.hours}:${time.mins}:${time.secs}`;
      updateClockface(time);
    }, 1000);
  },

  stop() {
    if (!isActive) {
      return;
    }
    clearInterval(intervalId);
    const time = getTimeComponents(0);
    counter += 1;
    isActive = false;
    refs.stopBtn.textContent = 'Reset';
    // console.log(counter);

    if (counter % 2 === 0) {
      updateClockface(time);
      counter = 0;
      refs.stopBtn.textContent = 'Stop';
    }
  },
};

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });
// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Повертає об'єкт з властивостями hours, mins, secs
 * - Адська копіпаста з stackoverflow 💩
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

/*
 * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
 */
function pad(value) {
  return String(value).padStart(2, '0'); // 1 -> 01 || 12 -> 12
}
/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рендерить інтерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

class Timer {
  constructor({ onTick }) {
    this.isActive = false;
    this.intervalId = null;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const initialTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - initialTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  /** Helpers */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timerInstance = new Timer({
  onTick: updateClockface,
});
refs.startBtn.addEventListener(
  'click',
  timerInstance.start.bind(timerInstance)
);
refs.stopBtn.addEventListener('click', timerInstance.stop.bind(timerInstance));
