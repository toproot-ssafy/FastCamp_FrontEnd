// any
// any 함수
function returnAny(message: any): any{ // no implished any 옵션
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나') // any 타입

any1.toString();

// any를 쓸 수 밖에 없는 상황이 있음.

let looselyTyped: any = {};

// any가 개체를 통해서 계속 전파되는 예시
// 타입안정성을 잃는 결과를 가져온다.
let d = looselyTyped.a.b.c.d;
// ^ = let d: any

function leakingAny(obj: any) {
  const a: number = obj.num; // num이 들어올 경우 : number라고 타입지정을 해줌으로써 누수를 막음.
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 }); // c도 any가 됨.
// c.indexOf(0);