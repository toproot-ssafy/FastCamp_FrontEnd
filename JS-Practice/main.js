// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
  address: 'USA'
}
// 객체 데이터는 이름으로 구조분해.
// 기본값이 비어있다면 지정해줄 수 있음. address = "Korea"
// name이라는 변수를 이름 자체로 사용하려면 : 를 사용해서 할당.
const { name: Heropy, age, email, address = "Korea" } = user
// E.g, user.address

console.log(`사용자의 이름은 ${Heropy}입니다.`)
console.log(`${Heropy}의 나이는 ${age}세 입니다.`)
console.log(`${Heropy}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)


// 배열데이터 구조할당
const fruits = ['Apple', 'Banana', 'Cherry']
// 배열 순서대로 꺼내온 것
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)
// Banana만 꺼낸다면?
const [, b] = fruits
console.log(b)