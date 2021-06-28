interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'Mark',
    age: 39,
};

type Keys = keyof IPerson;

const keys: Keys = "name";

// 프로퍼티의 값을 가져오거나 활용할 수 있는 함수

// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"] 
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(person, 'age');

function setProp<T, K extends keyof T>(
    obj: T, 
    key: keyof T,
    value: T[keyof T],
): void {
    obj[key] = value;
}

setProp(person, "name", "Anna");