<template>
    <div>文章管理</div>
</template>

<script>
    /**
     * @file 首页请求方法
     * @author zhouqinghuaicumt@163.com
     * @date 2018-11-12
     */
    import {getList} from '@/api/table';
    export default {
        name: 'article-manage',
        created() {
            getList(this.listQuery).then(response => {
                // console.log('response: ', response);
            });
        }
    };
</script>

<style scoped lang="stylus">

</style>