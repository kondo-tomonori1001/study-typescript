const path = require('path');

module.exports = {
  entry:{
    bundle: './src/index.ts'
  },
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  resolve:{
    extensions:['.ts','.js']
  },
  devServer:{
    contentBase:path.join(__dirname,'dist'),
    open:true
  },
  module:{
    rules:[
      {
        loader:'ts-loader',
        // /の間が正規表現、ピリオドを文字列となるように\でエスケープ、$で末尾を指定
        test:/\.ts$/,
      }
    ]
  }
}