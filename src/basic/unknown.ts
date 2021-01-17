export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log(typeof maybeNumber, maybeNumber)

  // isFooはnumber型のため,isFooはfalseになる
  const isFoo = maybeNumber === '10'
  console.log(typeof isFoo, isFoo)

  // number型に変化しているものの、元はunknown型のため足し算できない
  // const sum = maybeNumber + 10;

  // 足し算するためにはtypeofを判定して処理する
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log(typeof sum, sum)
  }
}
