<template>
    <div>文章管理</div>
</template>

<script>
    import {getList} from '@/api/table'
    export default {
        name: 'article-manage',
        created() {
            getList(this.listQuery).then(response => {
                console.log('response: ', response);
            })
        }
    };
</script>

<style scoped lang="stylus">

</style>