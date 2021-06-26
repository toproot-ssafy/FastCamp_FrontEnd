interface Person4 { 
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    // 1.
    hello: function(): void{
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
const p42: Person4 = {
    name: 'Mark',
    age: 39,
    // 2.
    hello(this: Person4): void{
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
// const p43: Person4 = {
//     name: 'Mark',
//     age: 39,
//     // 3. arrow 함수 안에서는 this 사용 불가.
//     hello: (this: Person4): void => {
//         console.log(`안녕하세요. ${this.name} 입니다.`);
//     },
// };

p41.hello();
p42.hello();