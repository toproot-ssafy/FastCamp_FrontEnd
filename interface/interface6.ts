interface IPerson2 {
    name: string;
    age?: number;
}

// 상속
interface IKorean extends IPerson2 {
    // 속성 추가.
    city: string;
}

// 대규모 프로젝트에서 많이 사용됨.
const k: IKorean = {
    name: "이웅재",
    city: "서울",
};

HTMLDivElement