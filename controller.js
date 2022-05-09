module.exports = class I18n {
    constructor(options) {
        this.options = options;
        this.fallback = this.getData(this.options.type, 'en');

        this._global = this.getData(5, null, 'global');
        this.fallback_global = this.getData(5, 'en', 'global');
    }

    getData(type, language, command) {
        try {
            this.command = `${type == 0 ? `interaction.` :
                (type == 1 ? `context.` :
                    (type == 2 ? `button.` :
                        (type == 3 ? `modal.` :
                            (type == 4 ? `module.` :
                                (type == 5 ? `_` : '')))))}${command || this.options.command.replace(/ +/, '')}`;
            return require(`./languages/${language || this.options.language.toLowerCase()}/${this.command}`, () => null, () => null);
        } catch (e) {
            return null;
        };
    }

    get(path, replace, fallback) {
        let data = this.getData(this.options.type);
        if (fallback || !data || Object?.keys(data)?.length == 0) data = this.fallback;
        data._global = this._global;
        if (fallback || !data._global || Object?.keys(data._global) == 0) data._global = this.fallback_global;
        const paths = path.split('.');

        function getNested(object, ...args) {
            return args.reduce((object, arg) => object && object[arg], object);
        };

        let string = getNested(data, ...paths);
        if (string) replace?.forEach(r => {
            string = string.replaceAll(`{${r.text}}`, r.value);
        });

        if (!string && !fallback) string = this.get(path, replace, true);
        return string;
    }
}