<template>
    <div class="main">
        <modone :list="modules.productlist"></modone>
        <modthree></modthree>
        <modtwo :list="modules.productlist"></modtwo>
        <modfour></modfour>
    </div>
</template>
<script>
    import banner from '../../components/banner/banner.vue'
    import modone from './modules/module-1/module-1.vue'
    import modtwo from './modules/module-2/module-2.vue'
    import modthree from './modules/module-3/module-3.vue'
    import modfour from './modules/module-4/module-4.vue'
    export default {
        data: function () {
            return {
                page: 'Index'
            }
        },
        created () {
            this.$store.dispatch('LOAD_MODULES_LIST')
        },
        computed: {
            modules () {
                return this.$store.state.index.modules
            }
        },
        components: {
            banner,
            modone,
            modtwo,
            modthree,
            modfour
        }
    }
</script>
<style rel="stylesheet/less">
    @import './index.less'
</style>
