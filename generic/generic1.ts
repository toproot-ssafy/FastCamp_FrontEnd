function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 더 많은 반복된 함수들...
// 모든 타입으로 받거나 리턴할 수 있도록 하려면?

function hello(message: any): any {
    return message;
}

// 어떤 것도 들어올 수 있으므로 any로 인식함.
console.log(hello('Mark').length);
console.log(hello(39).length); // 컴파일 타임에는 문제가 없지만 런타임에서 문제 발생.

// generic
function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric('Mark')); // string > length 하면 타입을 추론함.
console.log(helloGeneric(39));
console.log(helloGeneric(true));