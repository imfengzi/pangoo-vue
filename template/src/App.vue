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
                  :title="title"
                  v-show="headerShow"
                  :left-options="headerLeft"
        >
        </x-header>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom" v-show="footerShow">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <span class="tab-icon work-icon" slot="icon">&#xe637;</span>
            <span class="tab-icon work-icon-active" slot="icon-active">&#xe637;</span>
            <span slot="label">工作台</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/project/donate'}" :selected="route.path === '/project/donate'">
            <span class="tab-icon user-center-icon" slot="icon">&#xe630;</span>
            <span class="tab-icon user-center-icon-active" slot="icon-active">&#xe630;</span>
            <span slot="label">我</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import store from './store/index.js'
  import { Drawer, ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'hello',
    store,
    components: {
      Drawer, ViewBox, XHeader, Tabbar, TabbarItem
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        direction: 'forward',
        route: this.$route
      }
    },
    computed: mapState({
      // 箭头函数可使代码更简练
      headerShow: state => state.headerShow,
      footerShow: state => state.footerShow,
      headerLeft: state => state.headerLeft,
      title: state => state.title
    }),
    created: function () {
      /* this.$chaos.verify(function () {
       thisObj.$chaos.setUserInfo(null)

       }) */
    },
    methods: {
      test: function () {
        console.log(1111)
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
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body {
    background-color: #fbf9fe;
  }
  *{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
  }
  .clear{
    clear:both;
  }
  .tab-icon{
    width: 22px;
    height: 22px;
    display: inline-block;
    background-size: 100%;
  }
  .user-center-icon{
    background-image: url(assets/user_center.png);
  }
  .work-icon{
    background-image: url(assets/work.png);
  }
  .user-center-icon-active{
    background-image: url(assets/user_center_active.png);
  }
  .work-icon-active{
    background-image: url(assets/work_active.png);
  }
</style>
