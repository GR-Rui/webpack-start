const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        //后处理css代码,针对一些需要加浏览器前缀的css,autoprefixer可以自动处理.
        autoprefixer()
    ]
}