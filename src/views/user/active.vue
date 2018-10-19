<template>
    <div>
        <div class="active-user-page">
            <div>活跃用户</div>
            <div>test</div>
            <div>test2</div>
            <div>test3</div>
            <div>test4</div>
            <Button @click="goAddPage">进入add页面</Button>
            <Button @click="getAnswer">找到答案</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'active',

        data() {
            return {
                answer: false
            };
        },

        methods: {
            goAddPage() {
                this.$router.push('/user/add');
            },

            getAnswer() {
                this.answer = true;
            }
        },

        // 应用场景：阻止用户进行页面跳转（但是不能阻止用户关闭页面），如有未保存的草稿等等
        beforeRouteLeave (to, from , next) {
            if (this.answer) {
                next();
            }
            else {
                this.$Message.warning({
                    content: 'can not leave'
                });
                next(false);
            }
        }
    };
</script>

<style scoped lang="stylus">
    .active-user-page
        width: 100%
        height: 800px
        
</style>