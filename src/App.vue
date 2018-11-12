<template>
    <div id="app" class="app-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- <router-view v-if="show"></router-view> -->
    </div>
</template>

<script>
/**
 * @file 首页请求方法
 * @author zhouqinghuaicumt@163.com
 * @date 2018-11-12
 */
export default {
    name: 'App',

    mounted() {
        // this.show = false;
        // console.log(this.$route);
    },

    data() {
        return {
            // show: false
        };
    }
};
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

</style>
