// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//全局样式
import '../static/css/global.css'
import myLi from './components/common/myLi.vue'
import myUl from './components/common/myUl.vue'
import navBar from './components/common/navBar'
Vue.component(myUl.name,myUl)
Vue.component(myLi.name,myLi)
Vue.component(navBar.name,navBar)
//mintui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import Axios from 'axios'
Axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'loading...',
    spinnerType:'fading-circle'
  });
  return config;
})
Axios.interceptors.response.use(function(response){
  MintUI.Indicator.close({
  });
  return response;
})

Vue.prototype.$axios = Axios;
Vue.prototype.$host = '/api'
// Axios.defaults.baseURL = ''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
