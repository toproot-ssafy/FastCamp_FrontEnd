// never

function error(message: string): never { // never를 리턴한다는것은 아무것도 리턴하지 않는다는 것.
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    // 무한루프이면 넘어가지 않기 때문에 never 사용
    while(true) {}
}

declare const a: string | number;

if (typeof a !== 'string') {
    // a가 string이 아닌경우에는 아무것도 할당하지 못한상태 => never
    // string | number일 때는 string이 아니라 number만 남게되어 number로 할당.
    a;
}

// +
// 조건부 타입 generic
// string 이면 T, 아니면 never
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>; // type = never

// const b: Indexable<{}> = ''; // 타입 오류..