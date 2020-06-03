const webpackConfig = {
  mode: 'production',
  entry: {
    //entry通过模板配置自动生成
    index: './index.js'
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      },
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,//开发端口肯定一直是5000
    hot: true,
    disableHostCheck: true,
  }
}