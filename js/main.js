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
      'top': target.offsetTop-200
      // target.offsetTop에 -200을 붙여줌으로써 위치 이동시 꼭대기가 아닌 가운데에 맞춰짐
      //css에서 margin,padding 수정 없이 이 부분에서 +,-로 위치 조정 가능
      // position: sticky 사용시 문제 겪던 부분 해결
  });
}

for(var i = 0; i < menu.length; i ++) {
    menu[i].onclick = scroll;
}