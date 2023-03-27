module.exports = {
    alreadyExists: 'A stickymessage in this channel already exists!',
    stickymessagesLimit: 'You have reached the guild limit of **{count}/{max} stickymessages**!',
    invalidstickymessage: 'No stickymessage exists in this channel!',
    overview: {
        title: 'Stickymessage Config',
        permissions: 'Missing: {perms}',
        message: 'Poruka',
        embed: 'Embed',
        note: 'Napomena gumba',
        note_status: {
            show: 'Pokazivanje',
            hide: 'Skriven'
        },
        button: {
            exit: 'Spremi i izađi',
            color: {
                enabled: 'Odaberite boju za Embed',
                disabled: 'Koristite Embed i odaberite boju'
            },
            note: {
                show: 'Prikaži bilješku',
                hide: 'Sakrij bilješku'
            }
        }
    },
    form: {
        formName: '{name}\'s Stickymessage',
        message: { content: 'Sadržaj' },
        embed: {
            title: 'Naslov',
            description: 'Opis',
            thumbnail: 'Sličica',
            image: 'Slika',
            footer: 'Podnožje'
        }
    },
    success: {
        message: 'Successfully added a stickymessage in {channel}.',
        try: 'Isprobajte ga tako što ćete tamo poslati nekoliko poruka!'
    },
    list: {
        title: ';[Stickymessage, Stickymessages]',
        none: 'nema ljepljivih poruka'
    },
    deleted: 'Successfully deleted the stickymessage in {channel}.'
};