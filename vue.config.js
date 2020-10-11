module.exports = {
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

