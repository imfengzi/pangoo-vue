import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import NotFoundComponent from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
