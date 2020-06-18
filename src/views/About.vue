<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div
            class="forms-wrap"
            v-for="(item, index) in projectList"
            :key="index">
            <Button @click="remove(index)">删除</Button>
            <Form
                :model="item"
                :rules="rules"
                :label-width="80">
                <FormItem
                    label="项目选择"
                    class="form-item"
                    prop="personId">
                        <Select
                            class="select-test"
                            v-model="item.personId">
                            <Option
                                v-for="(n, i) in item.personList"
                                v-model="n.personId"
                                :key="i"
                                >{{n.name}}</Option>
                        </Select>
                </FormItem>
                <FormItem
                    label="填写项目code"
                    prop="projectCode">
                    <Input v-model="item.projectCode"></Input>
                </FormItem>
            </Form>
        </div>
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
            // personId: 501,
            projectList: [
                {
                    projectCode: '',
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
                    projectCode: '',
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
                }
            ],

            rules: {
                personId: [
                    {
                        required: true,
                        message: '您还未选择项目人员22',
                        trigger: 'blur',
                        type: 'number'
                    }
                ],
                projectCode: [
                    {
                        required: true,
                        message: '您还未填写code',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },

    components: {
        HelloWorld
    },
    methods: {
        remove(index) {
            console.log('index: ', index);
            // let selectRef = 'formValidates' + index;
            // this.$refs[selectRef].setQuery('');
            // this.$refs.formValidates.setQuery(''); 
            this.projectList.splice(index, 1);
        },
        handleSubmit() {
            let arr = [];
            // this.formValidate = [];
            // 动态计算有多少个需要校验的分组，和项目个数相等
            // this.projectList.forEach(item => {
            //     this.formValidate.push([{
            //         personId: '',
            //         projectCode: ''
            //     }]);
            // });
            // console.log('formValidate: ', this.formValidate);
            // 对校验数组进行循环检测
            this.projectList.forEach((item, index) => {
                let form = 'formValidate' + index;
                    this.$refs[form][0].validate(valid => {
                        console.log('valid: ', valid);
                        if (valid) {
                            arr.push(true);
                        }
                        else {
                            arr.push(false);
                        }
                    });
            });

            let flag = arr.every((item) => {
                return item === true;
            });
            if (flag) {
                this.$Message.success('success');
            } else {
                this.$Message.error('filed');
            }
        }
    }
}
</script>
<style lang="less">
    .forms-wrap {
        width: 300px;
        margin-top: 10px;
        padding: 30px;
        border: 1px solid green;
    }
</style>
