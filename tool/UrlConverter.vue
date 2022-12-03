<template>
    <div class="UrlConverter">
        <el-radio-group v-model="funcName">
            <el-radio-button v-for="i in methodList" :key="i.name" :label="i.name"></el-radio-button>
        </el-radio-group>
        <text-converter text-placeholder="请粘贴URL" :convert="go"></text-converter>
    </div>
</template>
<script>
    import TextConverter from "./TextConverter.vue";

    export default {
        components: {
            TextConverter,
        },
        data() {
            return {
                methodList: [encodeURIComponent, encodeURI, decodeURIComponent, decodeURI],
                funcName: encodeURI.name,
            }
        },
        methods: {
            go(s) {
                let f;
                for (let i of this.methodList) {
                    if (i.name === this.funcName) {
                        f = i;
                    }
                }
                return f(s);
            }
        }
    }
</script>
<style lang="less">

</style>