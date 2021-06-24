// void
// void라는 타입으로 추론이 됨.
function returnVoid(message: string) {
  console.log(message);

  return ; // 또는 return undefined;
}

const r = returnVoid('리턴이 없다.'); // r의 타입은 void

// 정상적인 사용방법, 아무것도 타입을 할당하지 않겠다는 의미.
returnVoid('리턴이 없다.');

// 리턴부분에 달아서 아무것도 하지 않겠다고 명시적으로 표현할 때 사용