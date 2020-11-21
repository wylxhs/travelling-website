// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// css
import './assets/css/reset.css'
import './assets/css/iconfont.css'

// swiper组件
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper2, {Navigation, Pagination} from 'swiper' // vue-awesome-swiper的6.X版本小圆点不显示问题

// js
import FastClick from 'fastclick'

FastClick.attach(document.body)
Swiper2.use([Navigation, Pagination]) // vue-awesome-swiper的6.X版本小圆点不显示问题
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
