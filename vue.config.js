module.exports = {
  publicPath: './',
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  }
}
// OR
module.exports = {
  configureWebpack: config => {
    config.externals = {
      "BMap": "BMap"
    }
  }
}

