const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //  开启代理服务器(一)
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  //  开启代理服务器(二)
  devServer:{
    proxy:{
      'api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws:true,
        changeOrigin:true
      },
      // '/foo':{
      //   target: 'http://localhost:5000'
      // }
    }
  }
})
