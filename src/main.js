import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);

var router = new VueRouter(routerConfig)

require('./mock/mock.js');

import store from './store'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/style/base.css'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
