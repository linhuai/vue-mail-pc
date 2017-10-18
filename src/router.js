import index from './views/index/index.vue'
import about from './views/about/about.vue'
export default {
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: index
    },{
        path: '/about',
        component: about
    }]
}
