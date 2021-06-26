interface Person8 {
    name: string;
    age?: number;
    // gender 값을 읽기만 하고 변경할 수 없게 하기 위해 유용하게 사용.
    readonly gender: string;
}

const p81: Person8 = {
    name: 'Mark',
    gender: "male",
};

// 수정불가능하기 때문에 오류 발생..
// p81.gender = "female";