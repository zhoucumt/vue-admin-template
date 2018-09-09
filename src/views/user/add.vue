<template>
    <div class="user-add-page">
        <div>新增用户</div>
        <div>收入数据 {{income}}</div>

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

        mounted() {
            console.log('api, ', api);
            this.getIncomeData();
        },

        data() {
            return {
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
                    console.log(res);
                    let data = res.data;

                    this.income = data.income.value;

                    this.pieChartOptions = Object.assign(this.pieChartOptions, {
                        value: this.income
                    });

                    console.log('this.pieChartOptions: ', this.pieChartOptions);
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
