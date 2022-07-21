// 로딩화면 구현
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


// 메뉴 스크롤 효과
var menu = document.querySelectorAll('nav a');

function scroll(e) {
  e.preventDefault();
  var target = document.querySelector(this.getAttribute('href'));

  window.scrollTo ({
      'behavior': 'smooth',
      'top': target.offsetTop,
  });
}

for(var i = 0; i < menu.length; i ++) {
    menu[i].onclick = scroll;
}