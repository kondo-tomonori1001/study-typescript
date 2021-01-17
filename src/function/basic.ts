// :voidは戻り値がない関数の型
// 関数で定義する型は戻り値の型
export const logMessage = (message: string): void => {
  console.log('void型の関数', message)
}

// 呼び出しシグネチャ（省略記法）
type LogMessage2 = (message: string) => void
export const logMessage2: LogMessage2 = (message) => {
  console.log('呼び出しシグネチャを使ってみた', message)
}
