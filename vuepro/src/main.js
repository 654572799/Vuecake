import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'
import MyFoot from './components/MyFoot'
import MyGlass from './components/MyGlass'

import axios from 'axios'
import qs from 'qs'

//导入elementUI
import ElementUI from 'element-ui'
//导入样式文件
import 'element-ui/lib/theme-chalk/index.css'
//注册为Vue插件
Vue.use(ElementUI)

// 让MyHeader称为全局组件
Vue.component("my-header",MyHeader);
Vue.component("my-foot",MyFoot);
Vue.component("my-glass",MyGlass);

axios.defaults.baseURL = 'http://127.0.0.1:3000/index';
//把axios设置为全局
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
