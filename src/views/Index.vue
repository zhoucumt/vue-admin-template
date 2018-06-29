<template>
    <div class="index-view" :class="{'main-hide-text': isCollapsed}">
        <!-- 侧边导航栏 -->
        <div class="side-bar-wrap" :style="{width: isCollapsed ? '60px': '240px', overflow: isCollapsed ? 'visible' : 'auto'}">
            <side-bar
                @on-change="handleSubmenuChange"
            >
            </side-bar>
        </div>

        <!-- 头部部分 -->
        <div class="header-nav-wrap" :style="{paddingLeft: isCollapsed?'60px':'240px'}">
            <header-nav
            @toggleSideBar="toggleSideBar"
            >
            </header-nav>
        </div>

        <!-- 主体部分 -->
        <div class="single-page-con" :style="{left: isCollapsed?'60px':'240px'}">
            <div class="single-page">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar';
    import HeaderNav from '@/components/HeaderNav';

    export default {
        name: 'index',

        created () {
        },

        data() {
            return {
                isCollapsed: false
            };
        },

        components: {
            SideBar,
            HeaderNav
        },

        methods: {
            toggleSideBar() {
                console.log(222);
                this.isCollapsed = !this.isCollapsed;
            },

            handleSubmenuChange(val) {
                console.log(val);
                this.$router.push(val);
            }
        }
    }
</script>

<style lang="stylus">
    .index-view
        position: absolute
        width: 100%
        height: 100%


        .side-bar-wrap
            height: 100%
            position: fixed
            top: 0
            left: 0
            z-index: 21
            transition: width .3s
            background: rgb(73, 80, 96)


        .header-nav-wrap
            box-sizing: border-box
            position: fixed
            display: block
            padding-left: 200px
            width: 100%
            height: 100px
            z-index: 20
            box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1)
            transition: padding .3s
        
        .single-page-con
            position: absolute
            top: 100px
            right: 0
            bottom: 0
            overflow: auto
            background-color: #F0F0F0
            z-index: 1
            transition: left .3s

            .single-page
                margin: 10px

</style>
