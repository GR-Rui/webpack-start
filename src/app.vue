<template>
  <div id="app">
	  <div class="poster"></div>
      <span class="txt" style="font-size: 10rem">{{text}}</span>
      <h1>FFFFFFF</h1>
      <h2>FFFFFFF</h2>
  </div>
</template>

<script>
import getData from './util';

export default {
  name: 'app',
  data(){
      return {
          text: 'abc'
      }
  },
  created() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
      console.log(data);
    }
  }
}
</script>

<style lang="stylus">
#test{
    color: red
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}

.txt {
  font-size: 12px;
}
</style>