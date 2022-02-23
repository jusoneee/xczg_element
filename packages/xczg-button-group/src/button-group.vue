<template>
  <div class="el-button-group" :style="style">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'XczgButtonGroup',
    props: {
      marginR: Number
    },
    computed: {
      style() {
        const ret = {};
        if (this.marginR) {
          ret.marginLeft = `-${this.marginR / 2}px`;
          ret.marginRight = ret.marginLeft;
          // ret.boxSizing = "border-box";
          // ret.position = "relative";
        }
        return ret;
      }
    }
  };
</script>