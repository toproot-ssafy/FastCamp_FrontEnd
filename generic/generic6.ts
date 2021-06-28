class PersonExtends<T extends string | number> { // T는 string과 number만 가능하도록 제한.
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true); // 타입은 항상 가장 작은 범위로 제한 해주기.
// 제한을 통해 이 코드의 제 3자에게 올바른 가이드라인 제공.