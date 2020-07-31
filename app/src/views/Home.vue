<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{name}}</div>
    <Tree :data="treeData"></Tree>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Tree from '@/components/Tree/Tree.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Tree,
  },
  data() {
    return {
      name: 'name',
      treeData: [
        {
          title: 'Web全栈架构师',
          children: [
            {
              title: 'Java架构师',
            },
            {
              title: 'JS高级',
              children: [
                {
                  title: 'ES6',
                },
                {
                  title: '动效',
                },
              ],
            },
            {
              title: 'Web全栈',
              children: [
                {
                  title: 'Vue训练营',
                  expand: true,
                  children: [
                    {
                      title: '组件化',
                    },
                    {
                      title: '源码',
                    },
                    {
                      title: 'docker部署',
                    },
                  ],
                },
                {
                  title: 'React',
                  children: [
                    {
                      title: 'JSX',
                    },
                    {
                      title: '虚拟DOM',
                    },
                  ],
                },
                {
                  title: 'Node',
                },
              ],
            },
          ],
        },
        {
          title: '大数据工程师',
          children: [
            {
              title: '数据分析',
            },
            {
              title: '数据挖掘',
            },
          ],
        },
      ],
    };
  },
};
</script>
