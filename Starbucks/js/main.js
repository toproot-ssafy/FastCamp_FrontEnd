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
// to-top
const toTopEl = document.querySelector('#to-top');

// 화면이 스크롤 될 때 실행 (300(밀리세컨드) => 3초)
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  //console.log(window.scrollY);
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
    // 버튼 보이기! toTopEl ="#to-top" 선택자로도 찾을 수 있지만 효율을 위해서 변수 사용
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    // 화면의 위치를 0px위치로 이동.
    scrollTo: 0
  });
});

// fade in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초단위), 옵션); => 애니메이션 라이브러리
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

// SWIPER
// new => JS 생성자(클래스)
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  // 반복재생 여부 loop
  loop: true,
});

// PROMITION IMAGE SWIPER
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 디폴트값.
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay를 객체형태로 작성하면 속성을 넣어줄 수 있음
  // delay : 밀리세컨드 단위 ( 500 => 0.5초)
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
// AWARDS IMAGE SWIPER
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  // 하나의 화면에 몇개를 보여줄 것인지
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
// 단순하게 보이거나 안보이거나 하는 효과 같은 경우는 CSS에서 간단하게 제어 가능.
promotionToggleBtn.addEventListener('click', function () {
  // ! : 반대가 되게 만들어주세요. 반대값 반환 (false -> true)
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// FLOATING IMAGE
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, random(1.5, 2.5), // 애니메이션 동작 시간.
    { // 옵션
    y: 20,
    // -1 : 무한반복
    repeat: -1,
    // 한번 재생된 애니메이션을 반대로 동작시킴
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL MAGIC SECTION
/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

// 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021