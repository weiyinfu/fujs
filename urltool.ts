import {camelCase} from "./lib";

export function parseQueryString(s: string) {
    //解析形如x=y&z=a的字符串
    if (!s) {
        return {}
    }
    let pairs = s.split('&')

    let ma: { [key: string]: any } = {}
    for (let i of pairs) {
        let res = i.split('=')
        if (res.length === 2) {
            const [k, v] = res
            ma[k] = decodeURIComponent(v)
        } else {
            ma[res[0]] = true
        }
    }
    return ma;
}

export function parseQuery() {
    //解析当前location中的query，返回一个JSON对象
    if (location.hash) {
        const ind = location.hash.indexOf('?')
        if (ind === -1) {
            return {}
        }
        const q = location.hash.substring(ind + 1)
        return parseQueryString(q)
    }
    return parseQueryString(location.search.substring(1))
}

export function parseQueryCamelCase() {
    //解析query，并且将数据转换为camelCase
    const a = parseQuery();
    return camelCase(a);
}



export function packUrl(url: string, ma: { [index: string]: string }) {
    //给定URL和query，构建一个字符串URL
    let a :string[]= []
    for (let i of Object.keys(ma)) {
        let v = ma[i];
        a.push(`${i}=${encodeURIComponent(v)}`)
    }
    let s = a.join("&")
    if (url.indexOf("?") == -1) {
        return url + "?" + s;
    }
    return url + '&' + s;
}

export function rewriteUrlParams(url: string, params: { [index: string]: string }): string {
    //重写URL路径
    const ind = url.indexOf('?')
    if (ind != -1) {
        url = url.substring(0, ind)
    }
    return packUrl(url, params)
}


export function updateQuery(obj: { [index: string]: any }) {
    //更新地址栏中的query
    const q = parseQuery();
    const ans = {...q, ...obj}
    history.pushState(null, "", rewriteUrlParams(location.href, ans))
}
