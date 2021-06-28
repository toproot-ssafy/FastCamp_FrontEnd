function helloBasic<T, U>(message: T, comment: U): T {
    return message;
}

// 사용
helloBasic<string, number>("Mark", 39); // <>에 넣고 사용하면 뒤에가 제한, 안넣으면 T가 추론됨.
helloBasic(36, 39); // 지정하지 않으면 각각 추론.