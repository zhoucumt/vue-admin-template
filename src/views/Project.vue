<template>
    <div class="project">
        <h1>This is an project page</h1>

        <div style="width: 700px; margin: 0 auto;">
            <div v-for="(value, key) in infos.formValidate" :key="key">
                <div v-for="(item, index) in value" :key="index">
                    <Form :ref="'formValidate' + key + index" :model="item" :rules="infos.ruleValidate" :label-width="80">
                        <FormItem label="Name" prop="name">
                            <Input v-model="item.name" placeholder="Enter your name"></Input>
                        </FormItem>
                        <FormItem label="E-mail" prop="mail">
                            <Input v-model="item.mail" placeholder="Enter your e-mail"></Input>
                        </FormItem>
                    </Form>
                </div>
            </div>
            <Button type="primary" @click.native="handleSubmit()">Submit</Button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/index.js'

export default {
    name: 'project',

    mounted () {
    },

    data() {
        return {
            infos: {
                formValidate: [
                    [
                        {
                            name: '',
                            mail: ''
                        }
                    ],
                    [
                        {
                            name: '',
                            mail: ''
                        }
                    ]
                ],
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ]
                }
            }
        };
    },

    components: {
        HelloWorld
    },
    methods: {
        handleSubmit() {
            console.log(this.$refs);
            let arr = [];
            this.infos.formValidate.forEach((item, index) => {
                item.forEach((data, key) => {
                    let form = 'formValidate' + index + key;
                    this.$refs[form][0].validate((valid) => {
                        if (valid) {
                            arr.push(true);
                        } else {
                            arr.push(false);
                        }
                    });
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
    .eforms-wrap {
        width: 200px;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid green;
    }
</style>
