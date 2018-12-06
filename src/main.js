import Vue from 'vue';
import 'bulma/css/bulma.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import router from './router';
import App from './App.vue';

library.add({
  faCoffee,
  faComments,
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
