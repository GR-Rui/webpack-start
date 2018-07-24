<template>
<div>
  <h1>第一个页面</h1>

  <h2>{{msg}}</h2>
</div>
</template>

<script>
   export default {
    name: 'first',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>