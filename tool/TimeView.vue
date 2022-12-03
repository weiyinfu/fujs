粘贴一个包含秒数或者毫秒数的字符串，把其中包含的时间展示出来。
<template>
  <div>
        <textarea v-model="s" @change="onchange" style="width: 100%;height:100px;" autofocus
                  placeholder="请粘贴包含时间秒数的字符串">

        </textarea>
    <pre class="view">
            {{ content }}
        </pre>
  </div>
</template>
<script>
import * as lib from "../time.ts"

export default {
  data() {
    return {
      s: "",
      content: ""
    }
  },
  mounted() {
    document.title = "时间字符串查看工具"
  },
  methods: {
    onchange() {
      let now = new Date().getTime() / 1000
      const maxSeconds = 3600 * 24 * 365 * 10//最近十年
      this.content = this.s.replace(/\d+/g, (s) => {
        let time = parseInt(s)
        if (Math.abs(time / 1000 - now) < maxSeconds) {
          return `${lib.second2string(time / 1000)} (${time})`
        }
        if (Math.abs(time - now) < maxSeconds) {
          //只展示最近十年的数字
          return `${lib.second2string(time)} (${time})`
        }
        return s
      })
    }
  }
}
</script>
<style lang="less">
.view {
  word-break: break-all;
  white-space: pre-wrap;
}
</style>