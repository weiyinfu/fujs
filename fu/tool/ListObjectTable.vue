根据一个ListObject产生一个Table
<template>
    <el-table :data="itemList">
        <el-table-column v-for="[prop,label] in propList"
                         sortable
                         :key="prop"
                         :prop="prop"
                         :label="label"
                         :formatter="formatter"
        >
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        props: {
            itemList: {
                type: Array,
                required: true,
            },
            propList: {
                type: Array,
                required: true,
            },//需要展示的table中的属性列表
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            formatter(row, column, cellValue, index) {
                return cellValue;
            }
        }
    }
</script>
<style lang="less">

</style>