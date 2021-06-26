"use strict";
// implements
// interface 내용을 바탕으로 Person 이라는 클래스 생성 가능
var Person = /** @class */ (function () {
    // name의 초기값 지정.
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
// class 이름보다는 interface이름을 부르는 것 권장.
var person = new Person("Mark");
person.hello();
