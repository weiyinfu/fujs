测试返回msgpack
<template>
    <div class="Msgpack">
        {{JSON.stringify(info)}}
    </div>
</template>
<script>
    const api = require("./api.ts");
    const msgpack = require('msgpack-lite');
    const axios = require("axios")
    export default {
        data() {
            return {
                info: {},
            }
        },
        mounted() {
            api.cli.get("/label/api/test_msgpack", {
                responseType: "arraybuffer",
            }).then(api.msgpackDecode).then(api.camelCase).then(resp => {
                this.info = resp.data;
            })
        }
    }
</script>
<style lang="less">

</style>