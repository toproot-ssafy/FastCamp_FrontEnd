"use strict";
// age:number 시 오류 : Type '(name: string, age: number) => void' is not assignable to type 'HelloPerson'.
var helloPerson = function (name) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + name + " \uC785\uB2C8\uB2E4.");
};
helloPerson('Mark');
