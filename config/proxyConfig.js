module.exports = {
  proxyList:{
    '/api':{
      target:'http://xiongkun.top/data',
      changeOrigin:true,
      pathRewrite:{
        '^/api':''
      }
    }
  }
};
