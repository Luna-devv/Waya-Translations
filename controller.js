module.exports = class I18n {
    constructor(options) {
        this.options = options;
        this.fallback = this.getData(this.options.type, 'en');
    }

    getData(type, language) {
        this.command = `${type == 0 ? `interaction.` :
            (type == 1 ? `context.` :
                (type == 2 ? `button.` :
                    (type == 3 ? `modal.` :
                        (type == 4 ? `module.` :
                            (type == 5 ? `_.` : '')))))}${this.options.command}`;
        return require(`./languages/${language || this.options.language.toLowerCase()}/${this.command}`, () => null, () => null);
    }

    get(path, replace) {
        let data = this.getData(this.options.type);
        if (!data) data = this.fallback;
        const paths = path.split('.');

        function getNested(object, ...args) {
            return args.reduce((object, arg) => object && object[arg], object);
        };

        let string = getNested(data, ...paths);
        replace?.forEach(r => {
            string = string.replaceAll(`{${r.text}}`, r.value);
        });

        return string;
    }
}