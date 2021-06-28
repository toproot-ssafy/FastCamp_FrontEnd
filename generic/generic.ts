// 함수의 타입 설정

type HelloFunctionGeneric1 = <T>(message: T) => T;

const HelloFunctionGeneric1: HelloFunctionGeneric1 = <T>(message: T) => {
    return message;
};

interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

const helloFunction2 : HelloFunctionGeneric2 = <T>(message: T) => {
    return message;
};

// 기본 함수 선언에 generic 부분 추가해주는 형식.