// 형 변환(Type conversion)

const a = 1
const b = '1'

// == : 동등 연산자
// 되도록이면 안쓰는 것 권장. 예외사황 발생(자동 형변환 발생)
// 웬만하면 일치연산자(===) 사용하기
console.log(a == b)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefiend, 0, -0, NaN(Not a Number => 1 + undefined)

if ('false') {
  console.log(123)
}