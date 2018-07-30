<template>
<div>
<div>wwwww<hello></hello></div>
<cube-button :primary="true" icon="cubeic-right">Button</cube-button>
<cube-loading :size="28"></cube-loading>

  <router-link to="/first">跳转第一个页面</router-link>
  <router-link to="/second">跳转第二个页面</router-link>
</div>
</template>

<script>
  import Hello from 'components/Hello' //引入已写vue组件
  import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)


  export default {
    components: {Hello}
   }
</script>