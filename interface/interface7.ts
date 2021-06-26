interface HelloPerson {
    (name: string, age?: number): void;
}

// age:number 시 오류 : Type '(name: string, age: number) => void' is not assignable to type 'HelloPerson'.
const helloPerson: HelloPerson = function(name:string) {
    console.log(`안녕하세요! ${name} 입니다.`);
};

// 함수보다는 interface의 프로퍼티 사용.
helloPerson('Mark', 39);