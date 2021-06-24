// 튜플
// 앞 뒤로 다른 타입을 대괄호에 넣어줌.
let x: [string, number];

// 순서, 타입, 길이가 처음 설정한 대로 작성해야함.
x = ["hello", 39];

// 길이 : 2(length) 이상은 값이 들어갈 수 없도록 undefined로 지정됨.
// x[3] = "world";

const person: [string, number] = ["Mark", 39]

// destructuring 분해할당
// const [first, second] = person; // first = string, second = number

// const [first, second, third] = person; // 길이 오류