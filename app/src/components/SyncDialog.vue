<template>
  <div class="custom-overlay" v-show="visible" @click="handleClick"></div>
</template>
<script>
export default {
  props: {
    // 对外暴露visible属性，用于显示隐藏弹框
    visible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    // 对外抛出cancel事件
    handleClick() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
