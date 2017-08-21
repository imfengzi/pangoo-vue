<template>
  <div class="not-found">
    meiyou
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    console.log(22222)
    let thisObj = this
    this.$chaos.transit.success({
      title: '没有找到该页面',
      confirm: function () {
        thisObj.$chaos.transit.hide()
        thisObj.$router.push('/')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
