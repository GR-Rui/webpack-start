<template>
<div>
<div>wwwww<hello></hello></div>
  <router-link to="/first">跳转第一个页面</router-link>
  <router-link to="/second">跳转第二个页面</router-link>
</div>
</template>

<script>
  import Hello from 'components/Hello' //引入已写vue组件
  export default {
    components: {Hello}
   }
</script>