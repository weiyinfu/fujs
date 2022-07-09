import axios from "axios";
import * as lib from "./lib";
import * as msgpack from "msgpack-lite"
import json5 from "json5";


export const cli = axios.create()
const ApiPrefix = "/anomaly"

cli.interceptors.request.use((config) => {
    if (!config.url) return config;
    config.url = rewriteUrl(config.url)
    return config
})

cli.interceptors.request.use((config) => {
    if (!config.url) return config;
    config.url = rewriteUrlLabel(config.url)
    return config
})

function rewriteUrlLabel(url: string) {
    //如果是本地，直接使用本地的数据集
    if (location.host === "localhost:7777") {
        return url;
    }
    //如果是goofy线上，则去掉label前缀
    if (url.startsWith("/label/")) {
        return rewriteUrl(url.substring("/label".length))
    }
    return url;
}

export function rewriteUrl(url: string): string {
    if (!url) return url;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    if (url.startsWith("/api/")) {
        //根据当前前端路径获取后端的host地址
        let prefix = ""
        if (location.host === "10.227.30.19:1235") {
            prefix = "http://10.227.30.19:1235" + ApiPrefix;
        } else if (location.host.startsWith("localhost")) {
            // prefix = ApiPrefix;
            prefix = "http://10.227.30.19:1235" + ApiPrefix;
        } else {
            prefix = ApiPrefix;
        }
        url = prefix + url;
    }
    return url
}

export function camelCase(resp: any) {
    resp.data = lib.camelCase(resp.data);
    return resp;
}

export function useJson5(resp: any) {
    if (typeof resp.data === "string") {
        resp.data = json5.parse(resp.data)
    }
    return resp;
}

export function msgpackDecode(resp: any) {
    resp.data = msgpack.decode(new Buffer(resp.data))
    return resp;
}
