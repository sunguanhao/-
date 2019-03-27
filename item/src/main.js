import Vue from 'vue';
import axios from 'axios';
/* import { DatetimePicker,Button} from 'mint-ui'; */
import App from './App';
import store from './store';
import router from './router';
import rem from './utils/rem';
import './utils/config';
import vuex from 'vuex';
import './assets/css/common.css';
import './assets/js/font.js';
import './assets/css/style.css';
/* import './assets/js/jquery.js'; */

/* import './assets/js/swiper-3.3.1.jquery.min.js'
import './assets/js/version-3.2.8.js' */

// import doAuthorize from './utils/authorize';
//Vue.component(DatetimePicker.name,DatetimePicker);
//Vue.component(Button.name,Button);
//tore.dispatch('changeFont',1/rem())

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
