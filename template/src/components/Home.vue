<template>
  <div class="home">
    <grid :rows="4">
      <grid-item v-for="(item, index) in moduleList" :key="index" :label="item.name" :link="item.url">
        <i slot="icon" class="fa-2x" :class="item.iconCls"></i>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import {Grid, GridItem} from 'vux'
  export default {
    name: 'home',
    components: {
      Grid,
      GridItem
    },
    data () {
      return {
        moduleList: []
      }
    },
    methods: {
      verify: function () {
        this.$store.commit('title', '工作台')
        let thisObj = this
        this.$chaos.verify(function () {
          thisObj.$chaos.ajax({
            slient: false,
            userinfo: true,
            url: 'Index/getMobileMenu',
            data: {},
            callback: function (type, ret) {
              if (type !== 'error') {
                if (!ret.status) {
                  thisObj.$vux.toast.show({
                    text: ret.info,
                    position: 'bottom',
                    width: '180px',
                    type: 'text'
                  })
                } else {
                  thisObj.moduleList = ret.info
                }
              }
            }

          })
        })
      }
    },
    created: function () {
      this.verify()
    },
    watch: {
      '$route': 'verify'
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
