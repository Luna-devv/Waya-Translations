declare type Options = {
    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '';
    command: string | undefined;
    language: string | undefined;
};
export declare type Get = {
    get: (path: string, replace?: {
        text: string;
        value: any;
    }[], plural?: boolean, fallback?: boolean) => string;
};
export default class I18n {
    constructor(options: Options);
    private options;
    private command;
    private fallback;
    private _global;
    private fallback_global;
    getData(type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '', language?: string | null, command?: string): any;
    get(path: string, replace?: {
        text: string;
        value: any;
    }[], plural?: boolean, fallback?: boolean): any;
}
export {};
