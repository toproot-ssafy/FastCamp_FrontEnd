console.log(typeof 'Hello World!') // string
console.log(typeof 123) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined

// null {} [] => object
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object

// typeof 함수 만들기
// slice메소드로 특정 데이터의 상세 타입만을 출력
function getType(data) { 
   return Object.prototype.toString.call(data).slice(8, -1)
 }

console.log(getType(123)) // Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // Null
console.log(getType({})) // Object
console.log(getType([])) // Array