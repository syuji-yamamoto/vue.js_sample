module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader'
  }]
}

//const extractCSS = !(inDevServer && (devServer && devServer.hmr)) || isProduction
const extractCSS = false