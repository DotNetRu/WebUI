// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import router from './router'


import App from './App.vue'

import Vue from 'vue'

Vue.config.productionTip = false

import 'font-awesome/css/font-awesome.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
