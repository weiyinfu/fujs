随便粘贴一个数据点列表，展示它的折线图
<template>
    <div class="TvView">
          <textarea v-model="s" @change="onchange" style="width: 100%;height:100px;" autofocus
                    placeholder="请粘贴tvmap格式的JSON串">

        </textarea>
        <div v-if="points.length">
            <indicator-chart :points="points"></indicator-chart>
        </div>
    </div>
</template>
<script>
    import IndicatorChart from "../component/IndicatorChart";

    export default {
        components: {IndicatorChart},
        data() {
            return {
                s: "",
                points: [],//llint类型的数据
            }
        },
        methods: {
            onchange() {
                const ma = JSON.parse(this.s)
                this.points = lib.tvmap2llint(ma);
            }
        }
    }
</script>
<style lang="less">
    .TvView {
        .IndicatorChart {
            height: 600px;
            width: 100%;
        }
    }
</style>