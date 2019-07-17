// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import VueCookies from 'vue-cookies'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

/**
 * 修复eslint不认识timeline所导致的编译报错
 */
Vue.component('i-time-line-item', iView.TimelineItem)

Vue.use(iView)
Vue.use(VueCookies)

Vue.prototype.$loadingBar = iView.LoadingBar
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
