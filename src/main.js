import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 加载vant组件库
import Vant from 'vant'
// 加载bant组件库样式
import 'vant/lib/index.css'
// 将px转换为rem
import 'amfe-flexible'
// 全局注册vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
