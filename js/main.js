const welcome = document.getElementById('welcome');
const up = document.getElementById('up');
const header = document.querySelector('header');

setTimeout(() => {
  welcome.style.display = 'none';
  header.style.display = 'block';
  up.style.display = 'block';
}, 4000);

setTimeout(() => {
  welcome.animate([
    {opacity: 1},
    {opacity: 0}
  ], 3000);
}, 2000)
