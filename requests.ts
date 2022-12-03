import axios from "axios";
import * as lib from "./lib";
import * as msgpack from "msgpack-lite"
import json5 from "json5";

export function getCliWithUrlRewrite(rewriteUrl: (url: string) => string) {
    const cli = axios.create()

    cli.interceptors.request.use((config) => {
        if (!config.url) return config;
        config.url = rewriteUrl(config.url)
        return config
    })
    return cli;
}

export function rewriteUrl(url: string): string {
    //url重写示例
    const ApiPrefix = "/anomaly"
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
