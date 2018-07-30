const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const webpack = require('webpack')


const isDev = process.env.NODE_ENV === 'development'

const config = {
    target:'web',
    entry: path.join(__dirname,"src/index.js"),
    output: {
        filename: "bundle.js",
        publicPath: 'dist',
        path: path.join(__dirname,'dist')
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'cube-ui': 'cube-ui/lib',
        components: path.join(__dirname, 'src/components'),
        views: path.join(__dirname, 'src/views')
      },
      extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: "vue-loader",
                options: {
                  loaders: {
                      'scss': [
                          'vue-style-loader',
                          'css-loader',
                          'stylus-loader'
                      ]
                  }
              }

            },
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/

            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(gif|jpg|png|svg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:1024,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
              }
            },
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        //vue等常用到
        new webpack.DefinePlugin({
           'process.env':{
               //单引号里面是双引号;
               //在这里定义了的 isDev在代码里面可以引用
               NODE_ENV:isDev ? '"development"' : '"production"'
           }
        }),
        new VueLoaderPlugin(),
        new TransformModulesPlugin(),
        new HTMLPlugin({
          template: path.join(__dirname, 'index.html'), // 模板文件
          inject: 'body' // js的script注入到body底部
        })
    ]
}

if(isDev){
  console.log('dev');
    //设置浏览器调试代码
    config.devtool = '#cheap-module-eval-source-map'

  //  webpack2.0 才有的devServer配置
  config.devServer = {
      port:'8082',
      host:'0.0.0.0',
      overlay:{
          //错误显示在网页上
          errors:true,
      },
      historyApiFallback: true,
      //启动完后自动打开浏览器
      open:true,
  }

}else{
  console.log('PRD');
  module.exports.devtool = '#source-map';
  // module.exports.plugins = (module.exports.plugins || []).concat([
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin(),
  // ])
}

module.exports = config