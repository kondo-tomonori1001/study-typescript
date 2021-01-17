export default function notExist() {
  // nullを扱ってみる
  let name = null
  // type of nullはオブジェクト型になる
  console.log('notExistSample1', typeof name, name)

  name = 'kon'
  if (!name) {
    console.log('notExistSample2', typeof name, '名前はまだ' + name)
  } else {
    console.log('notExistSample2', typeof name, '名前は' + name)
  }

  // undefinedを扱ってみる
  let age = undefined
  console.log('notExistSample3', typeof age, age)

  age = 29
  if (!age) {
    console.log('notExistSample4', typeof age, '年齢は秘密です')
  } else {
    console.log('notExistSample4', typeof age, '年齢は' + age + 'です')
  }
}
