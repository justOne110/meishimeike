import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// van-ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// axios 配置
import axios from'./utils/request.js'
Vue.prototype.$axios = axios

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

Vue.use(ElementUI);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
