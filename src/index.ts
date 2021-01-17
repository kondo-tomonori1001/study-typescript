import World from './world'

const root = document.getElementById('root')
const world = new World('Hello World')
world.sayHello(root)

// 型定義
import { aynSample, notExist, primitiveSample, unknownSample } from './basic'
primitiveSample()
notExist()
aynSample()
unknownSample()

// 関数の型定義
import { logMessage, logMessage2 } from './function/basic'
import {
  isUserSignedIn,
  isUserSignedIn2,
  sumProductsPrice,
} from './function/parameters'

logMessage('message')
logMessage2('message2')

// オプションパラメータを持つ関数
isUserSignedIn('ABC', 'KON')
isUserSignedIn('DEF')
console.log(isUserSignedIn('DEF'))

// デフォルトパラメーターを持つ関数
isUserSignedIn2('DEF')

// レストパラメーターを持つ関数
console.log(sumProductsPrice(1, 2, 3))
