/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
const onMouseEnter = event => event.currentTarget.classList.add('active');
const onMouseLeave = event => event.currentTarget.classList.remove('active');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);

document.addEventListener('mousemove', event => {
  innerbox.innerHTML = `<b>coordinates:</b> <br> X=> ${event.screenX}px Y=> ${event.screenY}px`;
});
