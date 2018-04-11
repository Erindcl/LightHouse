import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../pages/404.vue'
import { MainIntro, ShowCom, CommonRAL } from './routes.js'

Vue.use(Router)

const root = Vue.component('root', {
  template: '<router-view></router-view>'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LightHouse',
      component: root,
      children: [
        MainIntro,
        ShowCom,
        CommonRAL
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})
