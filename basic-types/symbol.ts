console.log(Symbol('foo') === Symbol("foo"));

// 고유한 값.
const sym = Symbol();

const obj = {
  // Symbol로 만든 변수를 가져다가 사용함.
  // 함수로 사용할 때는 대문자 Symbol
  // 타입으로 사용할 때는 소문자 symbol
  [sym]: "value",
};

// obj["sym"]
obj[sym]