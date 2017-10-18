<template>
    <div class="main">
        <vBanner></vBanner>
        <vModone></vModone>
        <vModthree></vModthree>
        <vModtwo></vModtwo>
    </div>
</template>
<script>
    import vBanner from '../../components/banner.vue'
    import vModone from './modules/module-1.vue'
    import vModtwo from './modules/module-2.vue'
    import vModthree from './modules/module-3.vue'
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
            vBanner,
            vModone,
            vModtwo,
            vModthree
        }
    }
</script>
<style rel="stylesheet/less">
    @import './index.less'
</style>
