// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import {CommonFunction, TransitPlugin} from 'chaos-common'
import {ToastPlugin, dateFormat, AlertPlugin, ConfirmPlugin} from 'vux'

let Jquery = require('Jquery')
Vue.use(VueRouter)
Vue.use(CommonFunction)
Vue.use(TransitPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(Vuex)
// Vue.$chaos.config('loginUrl', './app.html#/Login')
Vue.$chaos.config('loginUrl', './index.html#/Login')    // 设置自动跳转地址
Vue.$chaos.config('callbackUrl', 'http://admin.pangukj.com/callback.php') // 设置微信授权回调地址  如不涉及微信授权该项可不设置
// Vue.$chaos.config('baseUrl', '/index.php/Admin/')
Vue.$chaos.config('baseUrl', '/api')                 // 设置ajax基础路径，如果跨域代理则固定为/api,发布时请求修改
/*
   鉴权失败时触发
   如果具体功能的回调中配置了error则调用error不会触发该配置
   type.info为错误类型
 */
Vue.$chaos.config('verifyFail', function (type) {
  if (type && type.info === 'customAuthFail') {
    Vue.$chaos.transit.warning({
      title: '没有权限',
      info: '您当前没有该操作的权限！',
      confirm: function () {
        Vue.$chaos.transit.hide()
        location.href = './index.html#/'
      }
    })
  } else {
    Vue.$chaos.transit.warning({
      title: '授权失败',
      info: '没有正确获得您的用户信息，请重试',
      confirm: function () {
        Vue.$chaos.transit.hide()
        location.href = './index.html#/Login'
      }
    })
  }
})
/*
  每次调用verify方法均会触发该配置
 */
Vue.$chaos.config('customAuth', function (modules) {
  if (modules) {
    let userinfo = Vue.$chaos.getUserInfo()
    if (Jquery.inArray(modules, userinfo.r_role) < 0) {
      return false
    } else {
      return true
    }
  }
  return true
})
/**
 * 首次获权时触发
 */
Vue.$chaos.config('customLoginAuth', function () {
  return true
})
/**
 * 配置微信相关参数
 */
Vue.$chaos.config('wxConfig', {
  /* appid: 'wx93abf51bb1202e3f',
  scope: 'snsapi_base' */
  scope: 'snsapi_base',
  appid: 'wxd86a4926f1527101',
  agentid: 'AGENTID'
})
// console.log(Vue.$chaos)
Vue.filter('date', function (value) {
  return dateFormat(new Date(parseInt(value) * 1000), 'YYYY-MM-DD')
})
Vue.filter('datetime', function (value) {
  return dateFormat(new Date(parseInt(value) * 1000), 'YYYY-MM-DD HH:mm')
})
Vue.$chaos.checkAuth = function (module) {
  let userinfo = Vue.$chaos.getUserInfo()
  return Jquery.inArray(module, userinfo.r_role) > -1
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
