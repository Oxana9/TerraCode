import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MasterClass from '@/components/MasterClass'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/masterclass',
      name: 'MasterClass',
      component: MasterClass
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
