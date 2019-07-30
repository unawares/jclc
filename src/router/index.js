import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import CoursesPage from '@/pages/CoursesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/courses',
      name: 'CoursesPage',
      component: CoursesPage
    }
  ]
})
