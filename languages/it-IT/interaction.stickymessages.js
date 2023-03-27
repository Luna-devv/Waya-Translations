module.exports = {
    alreadyExists: 'A stickymessage in this channel already exists!',
    stickymessagesLimit: 'You have reached the guild limit of **{count}/{max} stickymessages**!',
    invalidstickymessage: 'No stickymessage exists in this channel!',
    overview: {
        title: 'Stickymessage Config',
        permissions: 'Missing: {perms}',
        message: 'Messaggio',
        embed: 'Embed',
        note: 'Nota Bottone',
        note_status: {
            show: 'Mostrando',
            hide: 'Nascosto'
        },
        button: {
            exit: 'Salva ed esci',
            color: {
                enabled: 'Scegli un colore per l\'Embed',
                disabled: 'Usa Embed e seleziona un colore'
            },
            note: {
                show: 'Mostra nota',
                hide: 'Nascondi nota'
            }
        }
    },
    form: {
        formName: '{name}\'s Stickymessage',
        message: { content: 'Contenuto' },
        embed: {
            title: 'Titolo',
            description: 'Descrizione',
            thumbnail: 'Miniatura',
            image: 'Immagine',
            footer: 'Piè di Pagina'
        }
    },
    success: {
        message: 'Successfully added a stickymessage in {channel}.',
        try: 'Provalo inviando alcuni messaggi lì!'
    },
    list: {
        title: ';[Stickymessage, Stickymessages]',
        none: 'nessun messaggio adesivo'
    },
    deleted: 'Successfully deleted the stickymessage in {channel}.'
};