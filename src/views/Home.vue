<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <i class="iconfont icon-search"></i>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/index.js'

export default {
  name: 'home',

  mounted () {
    this.getBasicDatas()
  },

  components: {
    HelloWorld
  },
  methods: {
    getBasicDatas () {
      api.getBasicData({
      }).then(res => {
        console.log('res: ', res)
      })
    }
  }
}
</script>
