import _ from "lodash"

export function copyText(text: string) {
    //把字符串复制到粘贴板
    let currentFocus: any = document.activeElement; //当前获得焦点的元素
    let toolBoxwrap: any = document.querySelector("#copydiv"); //将文本框插入到NewsToolBox这个之后
    let textarea = document.createElement("textarea"); //创建input对象
    if (!toolBoxwrap) {
        //需要设置这个wrapper的位置
        toolBoxwrap = document.createElement("div");
        toolBoxwrap.style.width = '0px';
        toolBoxwrap.style.height = '0px';
        toolBoxwrap.id = "copydiv"
        toolBoxwrap.style.left = 0;
        toolBoxwrap.style.right = 0;
        toolBoxwrap.style.position = "fixed";
        document.body.appendChild(toolBoxwrap)
    }
    toolBoxwrap.appendChild(textarea); //添加元素
    textarea.value = text;
    textarea.focus();
    if (textarea.setSelectionRange) {
        textarea.setSelectionRange(0, textarea.value.length); //获取光标起始位置到结束位置
    } else {
        textarea.select();
    }
    let flag = document.execCommand("copy"); //执行复制
    toolBoxwrap.removeChild(textarea); //删除元素
    currentFocus.focus();
    return flag;
}


export function listObject2dict(a: any[], k: string, v: string) {
    //把一个list转为一个map，list是一个对象列表，对象的k属性表示key，对象的v属性表示value
    const b: { [index: string]: any } = {};
    for (let i of a) {
        b[i[k]] = i[v];
    }
    return b;
}

export function size2string(t: number) {
    const ind = Math.floor(Math.log2(t) / 10);
    const sizes = 'B k M G'.split(/\s+/);
    let ans = Math.floor(t / (2 ** (10 * ind))) + sizes[ind + 1];
    if (!ans) return '';
    if (ans.endsWith('B')) return ans;
    return ans + 'B';
}


export function camelCase(data: any) {
    //把response中的data转换成驼峰命名法
    function to(s: string) {
        if (/[a-z0-9_]*/.test(s)) {
            let ss = []
            let upper = false
            for (let i = 0; i < s.length; i++) {
                if (s[i] == '_') {
                    upper = true
                } else {
                    if (upper) {
                        ss.push(s[i].toUpperCase())
                        upper = false;
                    } else {
                        ss.push(s[i])
                    }
                }
            }
            return ss.join("")
        }
        return s;
    }

    function go(data: any): any {
        if (_.isPlainObject(data)) {
            const da: { [index: string]: any } = {}
            for (let [k, v] of Object.entries(data)) {
                da[to(k)] = go(v)
            }
            return da;
        } else if (_.isArray(data)) {
            const da = [];
            for (let i of data) {
                da.push(go(i));
            }
            return da;
        }
        return data;
    }

    return go(data);
}

