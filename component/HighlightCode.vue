<template>
    <div class="HighlightCode">
        <pre v-html="handledCode"></pre>
    </div>
</template>
<script>
    /*使用代码高亮工具查看代码 */
    const highlight=require("highlight.js")
    import "highlight.js/styles/github.css";
    export default {
        props: {
            code: {
                required: true,
                type: String
            },
            //是否显示行号
            showLine: {
                required: false,
                type: Boolean,
            }
        },
        computed: {
            handledCode() {
                if (!this.code) return ""
                var code = highlight.highlightAuto(this.code);
                code = code.value;
                //为了显示行号，把全部\n换成<li>
                if (this.showLine) {
                    code = `<ol><li>${code.replace(/\n/g,"\n</li><li>")}\n</li></ol>`;
                }
                return code
            }
        }
    };
</script>

<style lang="less">
    .HighlightCode {
        pre {
            font-family: "Ubuntu Mono", Consolas;
            font-size: 24px;
            line-height: 25px;
            .hljs-keyword {
                color: blue;
            }
            .hljs-params {
                color: #089fa5;
            }
            .hljs-number {
                color: blue;
            }
            .hljs-string {
                color: green;
            }
            .hljs-literal {
                color: blueviolet;
            }
            .hljs-attr {
                color: rgb(0, 174, 255);
            }
        }
    }
</style>