<template>
    <div class="menue-list-in">
        <Menu :theme="theme" width="auto" @on-select="changeMenu">

            <template v-for="item in menueList">
                <!-- 如果没有子菜单，走该逻辑 -->
                <MenuItem v-if="!item.children" :name="item.path" :key="'menuitem' + item.name">
                    <Icon :type="item.icon" :key="'menuicon' + item.name"></Icon>
                    <span class="layout-text">{{item.name}}</span>
                </MenuItem>

                <!-- 如果有子菜单，走该逻辑 -->
                <Submenu v-else :name="item.name" :key="item.name">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        <span class="layout-text">{{item.name}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <MenuItem :name="child.path" :key="'menuitem' + child.name">
                            <Icon :type="child.icon" :key="'icon' + child.name"></Icon>
                            <span class="layout-text">{{child.name}}</span>
                        </MenuItem>
                    </template>
                </Submenu>
            </template>

        </Menu>
    </div>
</template>

<script>
    export default {
        name: 'side-bar',

        data () {
            return {
                theme: 'dark',

                isCollapsed: false,

                menueList: [
                    {
                        icon: 'ios-navigate',
                        name: '内容管理',
                        path: '/content',
                        id: 0,
                        children: [
                            {
                                icon: '',
                                name: '文章管理',
                                path: '/content/articleManage'
                            },
                            {
                                icon: '',
                                name: '评论管理',
                                path: '/content/commentManage'
                            }
                        ]
                    },
                    {
                        icon: 'search',
                        name: '用户管理',
                        path: '/user',
                        id: 1,
                        children: [
                            {
                                icon: '',
                                name: '新增用户',
                                path: '/user/add'
                            },
                            {
                                icon: '',
                                name: '活跃用户',
                                path: '/user/active'
                            }
                        ]
                    },
                    {
                        icon: 'settings',
                        name: '权限管理',
                        path: '/access',
                        id: 2
                    },
                    {
                        icon: 'ios-analytics',
                        name: '统计分析',
                        path: '/analysis',
                        id: 3,
                        children: [
                            {
                                icon: '',
                                name: '用户分析',
                                path: '/userAnalysis'
                            },
                            {
                                icon: '',
                                name: '时段分析',
                                path: '/timeAnalysis'
                            }
                        ]
                    }
                ]
            };
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
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },

            /**
             * 点击子菜单时触发的逻辑，这里子组件只抛一个事件，具体逻辑由父组件实现
             * @param  {string} active 事件参数
             */
            changeMenu(active) {
                this.$emit('on-change', active);
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>
