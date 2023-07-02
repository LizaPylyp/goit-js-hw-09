
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
let intervalId = null;

startBtn.addEventListener('click', (e) => {
  if (!startBtn.hasAttribute('disabled')) {
    startBtn.setAttribute('disabled', '');
    intervalId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1500);
    stopBtn.removeAttribute('disabled');
  };
  return;
});
  
stopBtn.addEventListener('click', (e) => {
  clearInterval(intervalId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
});