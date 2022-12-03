
//公共的时间选择组件
export const commonTimePickerOption = function () {
    const options = [
        {text: "最近一小时", seconds: 3600},
        {text: "最近3小时", seconds: 3600 * 3,},
        {text: "最近6小时", seconds: 3600 * 6,},
        {text: "最近12小时", seconds: 3600 * 12,},
        {text: "最近1天", seconds: 3600 * 24},
        {text: "最近2天", seconds: 3600 * 24 * 2},
        {text: "最近3天", seconds: 3600 * 24 * 3},
        {text: "最近4天", seconds: 3600 * 24 * 4},
        {text: "最近一周", seconds: 3600 * 24 * 7},
    ]
    const ops = options.map(op => {
        return {
            text: op.text,
            onClick(picker: any) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - op.seconds * 1000);
                picker.$emit('pick', [start, end]);
            }
        }
    })
    return {
        shortcuts: ops,
    }
}()
