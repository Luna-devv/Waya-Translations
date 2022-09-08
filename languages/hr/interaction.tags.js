module.exports = {
    lengthFail: 'Naziv oznake ne može biti dulji od {max} znakova!',
    alreadyExists: 'Oznaka s ovim imenom već postoji!',
    tagsLimit: 'Dosegli ste ograničenje od **{count}/{max} oznaka**, [kontaktirajte podršku]({support})!',
    regexFail: 'Provjera naziva oznake nije uspjela za korištenje SlashCommands!\nImajte na umu da posebni znakovi nisu dopušteni.',
    alreadyExistsDefault: 'Zadana naredba s ovim imenom već postoji!',
    invalidTag: 'Oznaka s ovim imenom ne postoji!',
    info: {
        title: {
            created: 'Napravljeno',
            author: 'Autor',
            usesWeek: 'Iskorištenja tjedno',
            uses: 'Korištenja',
            last: 'Last Used',
            name: 'Tag Name',
            slash: 'Slashcommand',
            channels: 'Channels'
        },
        description: {
            usesWeek: '{number}/wk',
            // wk: week;; example: 43/wk
            slash: {
                true: 'active',
                false: 'not active'
            },
            channelUses: '{number} uses'
        },
        noData: 'no data'
    },
    overview: {
        title: 'Konfiguracija oznake',
        message: 'Poruka',
        embed: 'Embed',
        placeholder: 'Upotrebljivi predlošci',
        button: {
            exit: 'Spremi i izađi',
            permission: 'Odaberite dopuštenje koje korisniku treba',
            color: {
                enabled: 'Odaberite boju Embeda',
                disabled: 'Koristite Embedove i odaberite boju'
            }
        }
    },
    form: {
        formName: 'oznaka {name}',
        message: { content: 'Sadržaj' },
        embed: {
            title: 'Naslov',
            description: 'Opis',
            thumbnail: 'Sličica',
            image: 'Slika',
            footer: 'Footer'
        }
    },
    success: {
        message: 'Uspješno je dodana oznaka {name}.',
        command: 'Isprobajte s {command}'
    },
    list: {
        title: 'Popis oznaka',
        none: 'nema oznaka',
        disabled: '{amount} ;[oznaka je, oznake su] skrivene zbog nedostajućih dopuštenja'
    },
    deleted: 'Oznaka **{name}** uspješno je izbrisana.'
};