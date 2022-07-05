import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
import uView from 'uview-ui';
Vue.use(uView);
app.$mount()
