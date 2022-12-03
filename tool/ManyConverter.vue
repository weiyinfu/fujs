多个文本转换器的组合
<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="URL Encode Decode" name="UrlConverter">
      <url-converter></url-converter>
    </el-tab-pane>
    <el-tab-pane label="TextConverter" name="TextConverter">
      <text-converter></text-converter>
    </el-tab-pane>
    <el-tab-pane label="TimeView" name="TimeView">
      <time-view></time-view>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import TextConverter from "./TextConverter.vue";
import UrlConverter from "./UrlConverter.vue";
import TimeView from "./TimeView.vue";

export default {
  components: {UrlConverter, TextConverter, TimeView},
  data() {
    return {
      activeName: "UrlConverter"
    }
  },
  methods: {},
}
</script>
<style lang="less">

</style>