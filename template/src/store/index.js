/**
 * Created by chaos on 2017/7/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要维护的状态
const state = {
  headerShow: true,
  footerShow: true,
  headerLeft: {
    showBack: false,
    backText: '工作台'
  },
  title: 'Pangoo',
  activeNote: {},
  show: ''
}

const mutations = {
  headerShow: function (state, status) {
    state.headerShow = status
  },
  footerShow: function (state, status) {
    state.footerShow = status
  },
  headerLeft: function (state, headerLeft) {
    for (let i in headerLeft) {
      state.headerLeft[i] = headerLeft[i]
    }
  },
  title: function (state, title) {
    state.title = title
  }

}

export default new Vuex.Store({
  state,
  mutations
})
