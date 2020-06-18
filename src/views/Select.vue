<template>
    <div class="select-wrap">
        <h1>This is an select page</h1>
        <div>
            <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>

            <Checkbox
            :indeterminate="indeterminate2"
            :value="cancelAll"
            @click.prevent.native="cancelCheckAll">反选</Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox
                v-for="(item, index) in projectList"
                :label="item.projectCode"
                :disabled="item.disabled"
                >
                {{item.projectName}}
            </Checkbox>
        </CheckboxGroup>
        <Button @click="handleSubmit">提交</Button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/index.js'

export default {
    name: 'home',

    mounted () {
    },

    data() {
        return {
            checkAllGroup: [],
            indeterminate: true,
            indeterminate2: true,
            checkAll: false,
            cancelAll: false,
            projectList: [
                {
                    projectCode: 123,
                    personId: '',
                    checkField: 'personId',
                    projectName: '项目1',
                    personList: [
                        {
                            name: 'Tom',
                            personId: 501
                        }
                    ],
                    productId: 'jc-ad',
                    productName: '产品段1',

                },
                {
                    projectCode: 124,
                    disabled: true,
                    projectName: '项目2',
                    personId: '',
                    checkField: 'personId',
                    personList: [
                        {
                            name: 'Jack',
                            personId: 502
                        },
                        {
                            name: 'Lucy',
                            personId: 503
                        }
                    ],
                    productId: 'jc-ad',
                    productName: '产品段1',
                },
                                {
                    projectCode: 125,
                    projectName: '项目3-这是另外一个项目',
                    personId: '',
                    checkField: 'personId',
                    personList: [
                        {
                            name: 'Jack',
                            personId: 504
                        },
                        {
                            name: 'Lucy',
                            personId: 505
                        }
                    ],
                    productId: 'jc-ad',
                    productName: '产品段1',
                }
            ]
        };
    },

    components: {
        HelloWorld
    },
    methods: {
        handleSubmit() {
            
        },

        handleCheckAll (data) {
            // console.log('data in all', data);
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                // this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                this.projectList.forEach(item => {
                    if (!item.disabled) {
                        this.checkAllGroup.push(item.projectCode);
                    }
                });
            } else {
                this.checkAllGroup = [];
            }
            console.log('data in all', this.checkAllGroup);
        },

        checkAllGroupChange(data) {
            console.log('data: ', data);
        },

        cancelCheckAll(data) {
            this.checkAllGroup = [];
            this.indeterminate2 = !this.indeterminate2;
        }
    }
}
</script>
<style lang="less">
    .select-wrap {
        width: 200px;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid green;

        .ivu-checkbox-group-item {
            display: block;
            margin-bottom: 10px;
        }
    }

</style>
