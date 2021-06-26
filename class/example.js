"use strict";
class Parent {
    // protected : 외부에서는 사용 불가하지만 상속하면 사용 가능.
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const p = new Parent("Mark", 39);
// p.print(); // 이름은 Mark이고, 나이는 39입니다.
class Child extends Parent {
    // override (접근제어자 까지도 됨.)
    // public _name = "Mark Jr.";
    // 생성자 ovveride
    constructor(age) {
        // parent의 생성자를 꼭 호출해야함 (중요!)
        super('Mark Jr.', age);
        // Parnet의 생성자를 그대로 가져옴.
        this.gender = 'male';
        // 자식의 생성자에서는 무조건 super 먼저 호출
        this.printName();
    }
}
// 부모 생성자대로 호출해야함.
const c = new Child(1);
c.print();
