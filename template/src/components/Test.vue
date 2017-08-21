<template>
    <div style="height:100%;">
      <drawer
              width="200px;"
              :drawer-style="{'background-color':'#35495e', width: '200px'}">
        <!-- drawer content -->
        <div slot="drawer">
        </div>

        <!-- main content -->
        <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
          <x-header slot="header"
                    style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                    :title="title">
          </x-header>
          <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="router-view"></router-view>
          </transition>

          <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom" v-show="true">
            <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
              <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
              <span slot="label">工作台</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" show-dot>
              <span class="demo-icon-22" slot="icon">&#xe630;</span>
              <span slot="label">我</span>
            </tabbar-item>
          </tabbar>
        </view-box>
      </drawer>
    </div>
</template>

<script>
  import { Drawer, ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'hello',
    components: {
      Drawer, ViewBox, XHeader, Tabbar, TabbarItem
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: 'test',
        direction: 'forward',
        route: {}
      }
    },
    created: function () {
     /* this.$chaos.verify(function () {
        thisObj.$chaos.setUserInfo(null)

      }) */
    },
    methods: {
      test: function () {
        this.$chaos.ajax({
          data: {
            test: 'aaa'
          },
          slient: false,
          url: 'Login/m_login',
          callback: function () {
          }
        })
      }
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>
