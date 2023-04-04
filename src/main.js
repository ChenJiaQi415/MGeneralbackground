import Vue from 'vue'
import App from './App.vue'
// import { Button,Row} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import Mock from './api/mock.js'

Vue.config.productionTip = false
//全局
Vue.use(ElementUI);
//按需引入
// Vue.use(Button);
// Vue.use(Row);


new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
