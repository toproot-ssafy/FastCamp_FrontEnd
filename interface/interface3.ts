// indexible type
interface Person3 {
    name: string;
    age?: number;
    [index: string] : any; // indexible, perperty 이름을 자유롭게 지정 가능.
}

function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name: 'Mark',
    age: 39,
};

const p32: Person3 = {
    name: "Anna",
    systers: ['Sung', "Chan"],
}

const p33: Person3 = {
    name: 'Bokdaengi',
    // any이기 때문에 객체도 지정 가능.
    father: p31,
    mother: p32,
};

hello3(p33); // p31, p32 다 가능.