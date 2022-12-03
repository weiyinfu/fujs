<template>
    <list-object-table :item-list="table" :prop-list="propList"></list-object-table>
</template>
<script>
    import ListObjectTable from "./ListObjectTable";

    export default {
        components: {ListObjectTable},
        props: {
            dic: {
                type: Object,
                required: true,
            },
            fieldList: {//对key进行排序的列表
                type: Array,
                required: false,
            },
            keyName: {type: String, required: true,},
            valueName: {type: String, required: true,},
        },
        data() {
            return {
                table: [],
                propList: [],
            }
        },
        mounted() {
            this.update();
        },
        watch: {
            dic() {
                this.update();
            }
        },
        methods: {
            update() {
                this.table = [];
                let fieldList = this.fieldList;
                if (!fieldList) {
                    fieldList = []
                    for (let k of Object.keys(this.dic)) {
                        fieldList.push([k, k])
                    }
                }
                for (let [prop, label] of fieldList) {
                    this.table.push({k: label, v: this.dic[prop]})
                }
                this.propList = [["k", this.keyName], ['v', this.valueName]]
            }
        }
    }
</script>