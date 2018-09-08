<template>
    <div class="pie-chart-component">
        <div :id="options.id" :class="options.className"></div>
        <slot name="pieChart"></slot>
        <div>{{options.value}}---</div>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: 'pie-chart',

        mounted() {
            this.createPieChart(this.options);
        },

        props: {
            options: {
                type: Object,
                default: {}
            }
        },

        data() {
            return {
            };
        },

        watch: {
            options: function (val) {
                console.log('val:====', val);
            },
            '$route': function (to, from) {
                console.log('to: ', to);
            }
        },

        methods: {
            createPieChart(options) {
                let pieChart = echarts.init(document.getElementById(options.id));

                pieChart.setOption({
                    backgroundColor:'#fff',

                    title: [
                        {
                            text: options.title,
                            left: '49%',
                            top: '46%',
                            textAlign: 'center',
                            textBaseline: 'middle',
                            textStyle: {
                                color: 'red',
                                fontWeight: 'normal',
                                fontSize: 20
                            }
                        },
                        {
                            text: options.value,
                            left: '49%',
                            top: '60%',
                            textAlign: 'center',
                            textBaseline: 'middle',
                            textStyle: {
                                color: '#666',
                                fontWeight: 'normal',
                                fontSize: 40
                            }
                        }
                    ],

                    series: [
                        {
                            radius: [100, 150],
                            type: 'pie',
                            color: options.colorList,
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: options.data
                        }
                    ]
                });
            }
        }
    };
</script>

<style scoped lang="stylus">
    .pie-chart-component
        position: relative
        height: 800px
</style>
