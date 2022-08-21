const { defineConfig } = require('@vue/cli-service')

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const cdn = {
  build: {
    css: ['https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/Swiper/8.0.6/swiper-bundle.min.css',
        ],
    js: [
      'https://cdn.staticfile.org/vue/3.2.37/vue.global.min.js',
      'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue-router/4.0.3/vue-router.global.min.js',
      'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vuex/4.0.2/vuex.global.min.js',
      'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js',
      'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/less.js/4.1.2/less.min.js',
      'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/Swiper/8.0.6/swiper-bundle.min.js',
      'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/Mock.js/1.0.0/mock-min.js',
      'https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js'
    ]
  }
};

let objExternals = {};

function externalsSet() {
  if (IS_PROD) {
    const objExternals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'less': 'less',
      'swiper': 'Swiper',
      'mockjs': 'Mock',
      "jquery": 'jquery'
    }
  }
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    externals: objExternals
  },
  configureWebpack:config=>{
    const CompressionPlugin = require('compression-webpack-plugin');
    config.plugins.push(
      new CompressionPlugin({
        algorithm:'gzip',
        test:/\.(js|css|woff|woff2|svg|webp|ttf|eot|json|jpg|png|html)$/,  
        threshold:10240, 
        deleteOriginalAssets:false, 
        minRatio:0.8 
      })
    );
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if (IS_PROD) {
        args[0].cdn = cdn.build;
      }
      return args;
    });
  }
})

externalsSet(); 