import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.weburl = 'https://www.zhuyl.xyz';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
