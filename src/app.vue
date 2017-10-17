<template>
    <div>
        <vHeader></vHeader>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import header from './components/header.vue'
export default {
    data: function () {
        return {

        }
    },
    components: {
        vHeader: header
    }
}
</script>
<style lang="stylus" scoped>
    .nav a
        display inline-block
        color #3490de
        text-decoration none
        margin 5px
        padding: 3px
        &:hover
            color #2283d4
        &.active
            border-bottom 2px solid #3490de
    .view
        margin-top 30px

</style>
