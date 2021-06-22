// 기본통로 : 이름 지정이 필요없는 JS
// 하나의 파일에서 하나의 데이터만 내보낼 수 있음.
// {}를 사용해서 import 가능.

export default function (data) { 
  return Object.prototype.toString.call(data).slice(8, -1)
}
// 하나의 데이터 내보내기만 가능하므로 error 발생.
// export default 123