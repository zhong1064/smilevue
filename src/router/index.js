import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMal from '@/components/pages/shoppingMal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'ShoppingMal',
      component:ShoppingMal
    }
  ]
})
