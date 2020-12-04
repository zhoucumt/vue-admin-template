<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{name2}}</div>
    <!--外部使用方式 confirm cancel 是自定义的事件 opened是包装el-dialog的事件，通过$listeners传入到el-dialog里面-->
    <custom-dialog
      title="测试弹框"
      :visible.sync="visibleDialog"
      @confirm="handleConfirm"
      @cancel="handleCancel">
      这是一段内容
    </custom-dialog>
    <el-button type="primary" @click="doOpen">打开</el-button>

    <custom-overlay :visible.sync="visible" />
    <el-button type="primary" @click="doOpenSync">打开syncDialog</el-button>
    <h2>{{count}}</h2>
    <h2>{{countAlias}}</h2>
    <h2>{{countPlusLocalState}}</h2>
    <h2>{{number}}</h2>
    <h2>{{name}}</h2>
    <el-button type="primary" @click="handleCount">改变count</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import CustomDialog from '@/components/CustomDialog.vue';
import SyncDialog from '@/components/SyncDialog.vue';

export default {
  name: 'About',

  components: {
    HelloWorld,
    'custom-dialog': CustomDialog,
    'custom-overlay': SyncDialog,
  },

  computed: mapState({
    count: (state) => state.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    number: 2, // 不会显示
    name: 'name',
  }),

  data() {
    return {
      name2: 'about',
      visibleDialog: false,
      visible: false,
      localCount: 1,
    };
  },

  methods: {
    // 改变store count
    handleCount() {
      console.log('aa');
      this.$store.commit('increment');
      // this.countPlusLocalState();
    },
    handleConfirm() {
      console.log('confirm');
      this.visibleDialog = false;
    },

    handleCancel() {
      console.log('cancel');
      this.visibleDialog = false;
    },

    doOpen() {
      this.visibleDialog = !this.visibleDialog;
    },

    doOpenSync() {
      this.visible = !this.visible;
    },
  },
};
</script>
