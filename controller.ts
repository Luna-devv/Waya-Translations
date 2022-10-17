type Options = {
    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '';
    command: string | undefined;
    language: string | undefined;
}

export type Get = {
    path: string, replace?: { text: string; value: any; }[], plural?: boolean, fallback?: boolean
}

export default class I18n {
    constructor(options: Options) {

        this.options = options;
        this.command = '';

        this.fallback = this.getData(this.options.type, "en");
        this._global = this.getData(5, null, "global");
        this.fallback_global = this.getData(5, "en", "global");
    };

    private options: Options;
    private command: string;

    private fallback: unknown;
    private _global: unknown;
    private fallback_global: unknown;


    getData(type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | '', language?: string | null, command?: string) {
        try {
            this.command = `${type == 0
                ? `interaction.`
                : type == 1
                    ? `context.`
                    : type == 2
                        ? `button.`
                        : type == 3
                            ? `modal.`
                            : type == 4
                                ? `module.`
                                : type == 5
                                    ? `_`
                                    : type == 6
                                        ? "command."
                                        : ""
                }${command || this.options.command?.replace(/ +/, "")}`;
            return require(`./languages/${language || this.options.language?.toLowerCase()}/${this.command}`);
        } catch (e) {
            return null;
        };
    };

    get(path: string, replace?: { text: string; value: any; }[], plural?: boolean, fallback?: boolean) {
        let data = this.getData(this.options.type);
        if (fallback || !data || Object?.keys(data)?.length == 0) data = this.fallback;
        if (!this.fallback) data = {};

        data._global = this._global;
        if (fallback || !data._global || Object?.keys(data._global)?.length == 0)
            data._global = this.fallback_global;
        const paths = path.split(".");

        function getNested(object, ...args) {
            return args.reduce((object, arg) => object && object[arg], object);
        };

        let string = getNested(data, ...paths);
        if (string)
            replace?.forEach((r) => {
                string = string.replaceAll(`{${r.text}}`, r.value);
            });

        const pluraRex = /\;\[.+?\]/gi;
        if (string && typeof string === "string" && string.match(pluraRex)) {
            string.match(pluraRex)?.forEach((_string) => {
                string = string.replaceAll(
                    _string,
                    _string.slice(2, -1).split(", ")[plural ? 1 : 0]
                );
            });
        };

        if (!string && !fallback)
            string = this.get(path, replace, plural, true);
        return string;
    };
};