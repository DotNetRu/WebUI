import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor',
      name: 'Editor',
      component: Editor,
      alias: '/'
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
