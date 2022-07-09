const fs = require("fs");

export class DumpOptions {
    indent?: number = 2;
    encoding?: string = 'utf8';
}

const defaultDumpOptions: DumpOptions = new DumpOptions();

export function loads(s: string) {
    return JSON.parse(s);
}

export function dumps(s: string, options: DumpOptions): string {
    if (!options) options = defaultDumpOptions;
    return JSON.stringify(s, null, options.indent);
}

export function load(filepath: string) {
    const content = fs.readFileSync(filepath, {encoding: 'utf8'});
    return loads(content);
}


export function dump(obj: any, filepath: string, options: DumpOptions) {
    if (!options) options = defaultDumpOptions;
    fs.writeFileSync(filepath, dumps(obj, options), options.encoding);
}
