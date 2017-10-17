import index from './views/index.vue'
import about from './views/about.vue'
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
