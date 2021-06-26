interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// implements
// interface 내용을 바탕으로 Person 이라는 클래스 생성 가능
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;
    
    // name의 초기값 지정.
    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`)
    }
}

// class 이름보다는 interface이름을 부르는 것 권장.
const person: IPerson1 = new Person("Mark");
person.hello();