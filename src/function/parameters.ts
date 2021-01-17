// オプションパラメーター
// パラーメーターの最後に？を記述すると任意パラメーターになる
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('signedIn', ' ', username)
    return true
  } else {
    console.log('not signedIn')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (
  userId: string,
  username = 'NO NAME'
): boolean => {
  if (userId === 'ABC') {
    console.log('signedIn', ' ', username)
    return true
  } else {
    console.log('not signedIn' + username)
    return false
  }
}

// レストパラメーターを持つ関数
// 引数をいくつでも持てる
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
