import Vue  from 'vue'
import Home from 'views/Home'
import router from './router'  //直接导入路由配置 

// 最后创建vue实例并挂载
const app = new Vue({
  el: '#app',
  router
});

import '../assets/styles/main.css'
import '../assets/styles/common.styl'