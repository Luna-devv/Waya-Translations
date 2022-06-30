module.exports = {
    alreadyExists: 'Oznaka s ovim imenom već postoji!',
    alreadyExistsDefault: 'Zadana naredba s ovim imenom već postoji!',
    invalidTag: 'Oznaka s ovim imenom ne postoji!',
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
        disabled: '{amount} ;[oznaka je, oznake su] skrivene zbog nedostajućih dopuštenja'    // ;[singular, plural]
    },
    deleted: 'Oznaka **{name}** uspješno je izbrisana.'
};