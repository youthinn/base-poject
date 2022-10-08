import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化全局css样式
import '@/assets/css/base.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
