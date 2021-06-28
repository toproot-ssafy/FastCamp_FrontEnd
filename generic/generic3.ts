function helloArray<T>(message: T[]): T {
    return message[0];
}

// 사용
helloArray(['Hello', "World"]);
helloArray(["Hello", 5]);

// 배열은 배열, 튜플은 튜플로 지정해야 함.
function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(['Hello', 'world']);
helloTuple(['Hello', 5]);