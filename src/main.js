import Vue from 'vue'
import App from './App.vue'
import {Button,Container,Main,Header,Link,MessageBox,DatePicker,TimeSelect,Radio,
  Checkbox,Divider,CheckboxGroup,Select,Option,RadioGroup,Slider,Loading,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router'
import http from 'axios'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Link)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Divider)
Vue.use(CheckboxGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(Loading)
Vue.use(Slider)

Vue.prototype.$MessageBox= MessageBox
Vue.prototype.$Message= Message
Vue.prototype.$http=http
// http.defaults.baseURL = '/api'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
