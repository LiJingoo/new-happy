import { createApp} from 'vue'
import App from './App.vue'
import router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


/*
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
*/

createApp(App).use(router).use(VueAxios,axios).mount('#app')

