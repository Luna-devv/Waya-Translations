module.exports = {
    lengthFail: 'Naziv oznake ne može biti dulji od {max} znakova!',
    alreadyExists: 'Oznaka s ovim imenom već postoji!',
    tagsLimit: 'Dosegli ste ograničenje servera od **{count}/{max} oznaka**!',
    regexFail: 'Provjera naziva oznake nije uspjela za korištenje SlashCommands!\nImajte na umu da posebni znakovi nisu dopušteni.',
    alreadyExistsDefault: 'Zadana naredba s ovim imenom već postoji!',
    invalidTag: 'Oznaka s ovim imenom ne postoji!',
    info: {
        title: {
            created: 'Napravljeno',
            author: 'Autor',
            usesWeek: 'Iskorištenja tjedno',
            uses: 'Korištenja',
            last: 'Zadnje Korišteno',
            name: 'Naziv oznake',
            slash: 'Slash Komanda',
            channels: 'Kanali',
            tags: 'Oznake',
            totalUses: 'Ukupna upotreba',
            totalTags: 'Ukupno oznaka',
            totalChannels: 'Ukupno kanala'
        },
        description: {
            usesWeek: '{number}/tjedno',
            // wk: week;; example: 43/wk
            slash: {
                true: 'aktivno',
                false: 'nije aktivno'
            },
            channelUses: '{number} ;[korištenje, korištenja]'
        },
        noData: 'nema podataka'
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
            },
            group: {
                ticket: {
                    disable: 'Onemogući Oznaku Ulaznice',
                    enable: 'Omogući Oznaku Ulaznice'
                }
            },
            aliases: 'Upravljanje nadimcima imena',
            permissions: {
                Administrator: 'Administrator',
                ManageChannels: 'Upravljanje Kanalima',
                ManageGuild: 'Upravljajte Serverom',
                ManageMessages: 'Upravljajte Porukama',
                ManageNicknames: 'Upravljajte Nadimcima',
                ManageRoles: 'Upravljajte Ulogama',
                ManageWebhooks: 'Upravljajte Webhookovima',
                ManageEmojisAndStickers: 'Upravljajte Emojijima i Stikerima',
                ManageEvents: 'Upravljajte Događajima',
                ManageThreads: 'Upravljajte Nitima',
                none: 'Nijedno'
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
            footer: 'Podnožje'
        },
        aliases: { name: 'Aliasi imena ({max} max)' }
    },
    success: {
        message: 'Uspješno je dodana oznaka {name}.',
        command: 'Isprobajte s {command}'
    },
    list: {
        title: {
            text: 'Tekst ;[Naredba, Naredbe]',
            slash: 'Kosa crta ;[Naredba, Naredbe]'
        },
        none: 'nema oznaka',
        disabled: '{amount} ;[oznaka je, oznake su] skrivene zbog nedostajućih dopuštenja',
        // ;[singular, plural]
        amount: '{amount} oznake • Koristite s {command}'
    },
    deleted: 'Oznaka **{name}** uspješno je izbrisana.'
};