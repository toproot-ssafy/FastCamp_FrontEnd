// 06.DOM API
// let boxEl = document.querySelector('.box');

// console.log(boxEl)

// boxEl.addEventListener('click', function () {
//   // 사용자가 클릭이라는 행동을 할 때 함수 실행
//   // contains => true, false 확인.
//   console.log('Click!!');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   )
// });

// 07. DOM API
// const boxEls = document.querySelectorAll('.box');

// // querySelectorAll 로 여러개의 요소를 찾았을 때
// // HTML/CSS 는 zerobase가 아니므로 1부터 시작할 수 있도록 해주기.
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`)
//   console.log(index, boxEl);
// });

// 07. TextContent
const boxEl = document.querySelector('.box');

// Getter
console.log(boxEl.textContent);

// Setter
boxEl.textContent = 'HEROPY!!';
console.log(boxEl.textContent);