多个文本转换器的组合
<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="URL Encode Decode" name="UrlConverter">
            <url-converter></url-converter>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import TextConverter from "../component/TextConverter";
    import UrlConverter from "../component/UrlConverter";

    export default {
        components: {UrlConverter, TextConverter},
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