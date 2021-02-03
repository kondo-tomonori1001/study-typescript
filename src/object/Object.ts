export default function object(){
  // オブジェクト型には意味がない
  const a:object = {
    name:"kon",
    age:"29",
  }
  // a.name
  // これはエラーになる
  // オブジェクトはプロパティにそれぞれ型を定義する

  // オブジェクトリテラル記法を使う
  let obj : {
    name:string,
    age:number,
  } = {
    name:"kon",
    age:29
  }
  console.log(obj.name);

  // 再代入してみる
  obj = {
    name:"KON",
    age:30,
  }
  console.log(obj.name);
}

// オプショナルとreadonly
let obj2 : {
  firstName:string,
  readonly lastName:string,
  gender?:string
}
obj2 = {
  firstName:'kondo',
  lastName:'tomonori',
  gender:'man'
}

// 再代入してみる
obj2.firstName = 'nobi';
//readonlyを設定した値は書き換えられない
// obj2.lastName= "nobita"  //これはエラー

console.log(obj2)

// インデックスシグネチャで型定義
const obj3:{
  // プロパティをまとめて定義出来る
  // ※keyはstringかnumber
  [countryName:string]:string
} = {
  Japan:"Tokyo",
  Korea:"Seoul"
}
obj3.China = "Beijing"

// 型エイリアスで定義する
type member = {
  name:string
  gender?:string
  age:number
  specialPlan:boolean
}
const member1:member = {
  name:"Taro",
  gender:"man",
  age:20,
  specialPlan:true
}
const member2:member = {
  name:"Jiro",
  age:22,
  specialPlan:false
}
console.log(member1)
console.log(member2)

// 合併型(union)と交差型(intersection)
type knight = {
  hp:number
  sp:number
  weapon:string
  swordSkill:string
}
type wizard = {
  hp:number
  mp:number
  weapon:string
  magicSkill:string
}

// 合併型：knightまたはwizardの型を持つ
type Adventure = knight | wizard
const adventure1:Adventure = {
  hp:10,
  sp:10,
  mp:20, //mpも定義できる
  weapon:"sword",
  swordSkill:"skill"
}
console.log(adventure1);
// 交差型：knightかつwizardの型を持つ
// knightとwizardの両方のプロパティを指定しないとエラーになる
type Paladin = knight & wizard;
const Paladin1 :Paladin = {
  hp:100,
  sp:100,
  mp:100,
  weapon:"sword",
  swordSkill:"skill",
  magicSkill:"skill",
}
console.log(Paladin1);