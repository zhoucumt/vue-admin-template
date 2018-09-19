<template>
    <div class="user-add-page">
        <div>新增用户</div>
        <div>收入数据 {{income}}</div>
        <div>{{message}}</div>

        <div>
            <pie-chart :options="pieChartOptions"></pie-chart>
        </div>
    </div>
</template>

<script>
    import api from '@/api/index.js';
    import PieChart from '@/components/PieChart';

    export default {
        name: 'user-add',

        beforeCreate() {
            console.log('beforeCreate 创建前状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        created() {
            console.log('created 创建完毕状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        activated() {
            console.log('activated 激活状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        deactivated() {
            console.log('deactivated 激活状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        beforeMount() {
            console.log('beforeMount 挂载前状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        mounted() {
            this.getIncomeData();
            console.log('mounted 挂载结束状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        beforeUpdate() {
            console.log('beforeUpdate 更新前状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        updated() {
            console.log('updated 更新完成状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        beforeDestroy() {
            console.log('beforeDestroy 销毁前状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },

        destroyed() {
            console.log('destroyed 销毁完成状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
        },


        data() {
            console.log('data 数据初始化状态===============》');
            var state = {
                'el': this.$el,
                'data': this.$data,
                'message': this.message
            };
            console.log(this.$el);
            console.log('state====', state);
            console.log('//////////分割线//////////');
            return {
                message: 'this is a message',
                income: '',

                pieChartOptions: {
                    id: 'pie-chart',
                    className: 'pie-chart',
                    title: '收入饼图',
                    data: [
                        {
                            value: 55,
                            name: 'IOS'
                        },
                        {
                            value: 70,
                            name: '安卓国内'
                        },
                        {
                            value: 25,
                            name: "安卓海外"
                        }
                    ],
                    value: '',
                    colorList: ['#66c5d7', '#11c88c', '#989cff']
                }
            };
        },

        components: {
            PieChart
        },

        methods: {
            getIncomeData() {
                api.getIncome({
                }).then((res) => {
                    let data = res.data;

                    this.income = data.income.value;

                    this.pieChartOptions = Object.assign(this.pieChartOptions, {
                        value: this.income
                    });

                });
            }
        }
    };
</script>

<style lang="stylus">
    .user-add-page
        width: 100%
        height: 800px
        
        .pie-chart
            width: 100%
            height: 300px
            background-color: #fff
</style>
