<template>
    <div id="app" class="app-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- <router-view v-if="show"></router-view> -->
    </div>
</template>

<script>

export default {
    name: 'App',

    mounted() {
        // this.show = false;
        console.log(this.$route);
    },

    data() {
        return {
            // show: false
        }
    }
}
</script>

<style lang="stylus">
    html,
    body
        width: 100%
        height: 100%
        background: #f0f0f0
        overflow: hidden

        .app-main
            width: 100%
            height: 100%
    
    .icon
       width: 1em; height: 1em
       vertical-align: -0.15em
       fill: currentColor
       overflow: hidden

</style>
