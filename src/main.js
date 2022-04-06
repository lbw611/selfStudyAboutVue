import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import './styles.scss'
import './plugins/element.js'
import "./router/permission"
import "./assets/css/index.scss"
Vue.config.devtools = true
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
