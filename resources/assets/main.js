
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './App'
import router from './router'

// Fullpage : https://github.com/alvarotrigo/fullPage.js/
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js' 
require('fullpage.js/vendors/scrolloverflow.min.js')

// FontAwesome : https://github.com/FortAwesome/vue-fontawesome#usage
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import faLightbulb from '@fortawesome/fontawesome-pro-light/faLightbulb';
import falMapMarkerAlt from '@fortawesome/fontawesome-pro-light/faMapMarkerAlt';

import fabFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import fabTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

fontawesome.library.add(faLightbulb);
fontawesome.library.add(fabFacebook);
fontawesome.library.add(fabTwitter);
fontawesome.library.add(falMapMarkerAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueFullPage);

Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});