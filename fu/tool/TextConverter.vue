粘贴一个包含秒数或者毫秒数的字符串，把其中包含的时间展示出来。
<template>
    <div>
        <textarea v-model="s" @change="onchange" style="width: 100%;height:100px;" autofocus
                  placeholder="请粘贴包含时间秒数的字符串">

        </textarea>
        <el-switch
                v-model="autoConvert"
                inactive-text="自动转换"
                active-color="#13ce66"
                inactive-color="black">
        </el-switch>
        <el-button @click="handle" type="primary">执行转换</el-button>
        <pre class="view">
            {{content}}
        </pre>
    </div>
</template>
<script>
    const lib = require("../pages/lib.ts")
    export default {
        props: {
            textPlaceholder: {
                type: String,
            },
            convert: {
                type: Function,
            },
        },
        data() {
            return {
                autoConvert: false,
                s: "",
                content: ""
            }
        },
        methods: {
            onchange() {
                if (this.autoConvert) {
                    this.handle();
                }
            },
            handle() {
                this.content = this.convert(this.s);
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