const searchEl = document.querySelector('.search');
// searchEl 안에서 input 요소를 찾게 됨. document => HTML
const searchInputEl = searchEl.querySelector('input');

// 클릭이라는 이벤트가 발생되면 익명함수 핸들러 작동.
searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});
// search focus
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // HTML 속성을 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// search blur
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// badge
const badgeEl = document.querySelector('header .badges');

// 화면이 스크롤 될 때 실행 (300(밀리세컨드) => 3초)
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  // window.scrollY : scroll의 높이 위치값
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간(초단위), 옵션); => 애니메이션 라이브러리
    gsap.to(badgeEl, .6, {
      opacity: 0,
      // display를 안해주면 요소는 안보이지만 클릭이 가능하게 되므로 완전히 사라지도록 설정.
      // gsap에서 문자는 따옴표로 감싸주어야 함.
      display: 'none',
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));