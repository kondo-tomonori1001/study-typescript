export default function aynSample() {
  // string型を代入
  let name: any = 'KON'
  console.log(typeof name, name)

  // number型も入れれる(nameがnumber型に変わる)
  name = 123
  console.log(typeof name, name)
}
