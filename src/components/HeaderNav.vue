<template>
    <div class="main-header">
        <div class="navicon-con">
            <Button :style="{transform: 'rotateZ(' + (this.isCollapsed ? '-90' : '0') + 'deg)'}" type="text" @click.prevent="toggleSideBar">
                <Icon type="navicon" size="32"></Icon>
            </Button>
        </div>

        <div class="header-middle-con">
            <div class="main-breadcrumb">
                头部部分
                <!-- <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header-nav',

        data () {
            return {
            };
        },

        props: {
            isCollapsed: {
                default: false
            }
        },

        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },

            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },

        methods: {
            toggleSideBar () {
                this.$emit('toggleSideBar', {});
            }
        }
    }
</script>

<style scoped lang="stylus">
    .main-header
        height: 60px
        background: #fff
        box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1)
        position: relative
        z-index: 11


        .header-middle-con
            position: absolute
            left: 60px
            top: 0
            right: 340px
            bottom: 0
            padding: 10px
            overflow: hidden
            
            .main-breadcrumb
                height: 60px;
                line-height: 60px;
</style>
