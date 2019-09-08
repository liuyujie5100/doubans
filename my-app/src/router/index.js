import Vue from 'vue'
import Router from 'vue-router'
import state from '../components/state'
import getters from '../components/getters'
import mutations from '../components/mutations'
import fu from '../components/ceshi/fu'
import zi from '../components/ceshi/zi'


import medium from '../components/silder/medium'

import book from '../pages/book'

import logo from '../pages/logo'
import bottom from '../pages/bottom'
import denglu from '../pages/denglu'
import movie from '../pages/movie'
import register from '../pages/register'
import search from '../pages/search'
import xiaozu from '../pages/xiaozu'
import oumei from '../pages/oumei'
import home from '../pages/home'
import huitui from '../pages/huitui'
import ceshi from '../pages/ceshi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/logo',
      name: 'logo',
      component: logo
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    },
    
    {
      path: '/medium',
      name: 'medium',
      component: medium
    },{
      path: '/fu',
      name: 'fu',
      component: fu
    },{
      path: '/zi',
      name: 'zi',
      component: zi
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/mutations',
      name: 'mutationsbook',
      component: mutations
    },
    {
      path: '/getters',
      name: 'getters',
      component: getters
    },
    {
      path: '/huitui',
      name: 'huitui',
      component: huitui
    },

    {
      path: '/state',
      name: 'state',
      component: state
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/oumei',
      name: 'oumei',
      component:oumei
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/xiaozu',
      name: 'xiaozu',
      component: xiaozu
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ]
})
