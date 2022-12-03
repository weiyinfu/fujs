导航中的超链接应该是可以新标签页打开的
<template>
  <el-menu-item class="LinkMenuItem" :index="index"><a :href="'#/'+index">{{ content }}</a>
  </el-menu-item>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
    },
    index: {
      type: String,
    }
  },
}
</script>
<style lang="less">
.LinkMenuItem {
  user-select: none;

  a {
    text-decoration: none;
    color: unset;
  }
}
</style>