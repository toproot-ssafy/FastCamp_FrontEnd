console.log('Hello Parcel!')

// 비동기 함수.
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()