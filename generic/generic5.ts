class Person<T, K> {
    private _name: T; // T의 유효범위는 클래스 전체 범위 안.
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person("Mark", 39);
// new Person<string>(39); // string이 아니라서 오류 발생.
// new Person<string, number>("Mark", "age"); // number 자리에 문자열이라서 오류

// 컴파일 타임의 에러를 미리 체크해서 처리하는 역할을 수행하여 유용.