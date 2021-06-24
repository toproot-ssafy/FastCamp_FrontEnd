// unknown
declare const maybe: unknown;

// const aNumber: number = maybe; //Type 'unknown' is not assignable to type 'number'.

// 타입가드
if (maybe === true) {
  const aBoolean: boolean = maybe; // boolean(true) 타입

  // const aString: string = maybe; // maybe가 true 이므로 오류
}

// typeof 타입가드
if (typeof maybe === 'string' ) {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}