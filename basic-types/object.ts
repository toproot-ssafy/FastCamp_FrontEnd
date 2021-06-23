// create by object literal
const person1 = {name: 'Mark', age: 39};

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({name: 'Mark', age: 39});

// let obj: object = {};

// obj = {name: 'Mark'};

// obj = [{name: 'Mark'}];

// obj = 39; // Error

// obj = true; // Error

// obj = 100n; // Error

// obj = Symbol(); // Error

// obj = null; // Error

// obj = undefined;  // Error

// declare function create(o:object | null): void;

// create({ prop: 0 });
// create(null);
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// // Object.create
// Object.create(0); // Error