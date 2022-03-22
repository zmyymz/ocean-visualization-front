'use strict'
const { defineConfig } = require('@vue/cli-service')
// const path=require('path')
module.exports = 
defineConfig(
  {
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    port: 8000,     // 端口
    proxy: {
      '/vector': {
          // target: 'https://www.baidu.com/',//后端接口地址
          target: 'http://localhost:8089/',
          changeOrigin: true,//是否允许跨越
          ws:true,
          pathRewrite: {
              '^/vector': '/',//重写,
          }
      },
      '/api':{
        target: 'http://localhost:8080/',
        changeOrigin: true,//是否允许跨越
        ws:true,
        pathRewrite: {
            '^/api': '/',//重写,
        }
      },
      '/test':{
        target: 'https://www.baidu.com',
        changeOrigin: true,//是否允许跨越
        ws:true,
        pathRewrite: {
            '^/test': '/',//重写,
        }
      }
  },
  },
  
}
)
