// 로딩화면 구현
const welcome = document.getElementById('welcome');
const up = document.getElementById('up');
const header = document.querySelector('header');

setTimeout(() => {
  welcome.style.display = 'none';
  up.style.display = 'block';
  header.style.display = 'block';
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

//박스 슬라이드
var window_size = window.matchMedia('(max-width: 768px)');
if(window_size.matches) {
  tabletSize();
  prev.style.display = 'block';
  next.style.display = 'block';
}

// 자바스크립트에서 미디어쿼리 적용 시 별도 새로고침 없이 적용되는 코드
// window.onresize = function(){
//   document.location.reload();
// };

function tabletSize() {
  var current = 0;
  var contentsBox = document.querySelectorAll(".contentsBox > div");
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  box(current);
  prev.onclick = prevSlide;
  next.onclick = nextSlide;

  function box(n) {
    for(var i = 0; i < contentsBox.length; i++) {
      contentsBox[i].style.display = "none";
    }
    contentsBox[n].style.display = 'block';
  }

  function prevSlide() {
    if(current > 0) current -= 1;
    else current = contentsBox.length - 1;
    box(current);
  }

  function nextSlide() {
    if(current < contentsBox.length - 1) current += 1;
    else current = 0;
    box(current);
  }
}
