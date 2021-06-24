// type annotation
// 배열 표현방법에 집중
// 1. 권장
let list: number[] = [1, 2, 3];

// 2.
let list2: Array<number> = [4, 5, 6];

// 요소들을 공통의 타입으로 묶을 수 있어야 array라 표현하는 것이 좋다.

// 배열의 타입이 다를 경우 union 사용
let list3: (number | string)[] = [ 1, 2, 3, "4"];

[39, "Mark"];