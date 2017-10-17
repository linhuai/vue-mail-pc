import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
var router = new VueRouter(routerConfig)

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/style/base.css'

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
