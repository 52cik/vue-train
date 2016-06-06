import Vue from 'vue'
import App from './App'

import { time } from './filters'
Vue.filter('time', time)

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
