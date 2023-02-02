module.exports = {
    alreadyExists: 'Eine fixierte Nachricht existiert für diesen Channel bereits!',
    stickymessagesLimit: 'Du hast das Serverlimit von **{count}/{max} fixierten Nachrichten** erreicht!',
    invalidStickymessage: 'Keine fixierte Nachricht existiert nicht in diesem Channel!',
    overview: {
        title: 'Sticky Message Konfiguration',
        message: 'Nachricht',
        embed: 'Embed',
        note: 'Button Notiz',
        note_status: {
            show: 'Anzeigen',
            hide: 'Versteckt'
        },
        button: {
            exit: 'Speichern & Verlassen',
            color: {
                enabled: 'Setzte eine Farbe für das Embed',
                disabled: 'Benutzte Embeds und wähle eine Farbe'
            },
            note: {
                show: 'Notizen Zeigen',
                hide: 'Notizen Ausblenden'
            }
        }
    },
    form: {
        formName: '{name} fixierte Nachricht',
        message: { content: 'Content' },
        embed: {
            title: 'Titel',
            description: 'Beschreibung',
            thumbnail: 'Vorschaubild',
            image: 'Bild',
            footer: 'Fußzeile'
        }
    },
    success: {
        message: 'Fixierte Nachricht in {channel} erfolgreich hinzugefügt.',
        try: 'Probiere es aus, indem du ein paar Nachrichten sendest!'
    },
    list: {
        title: 'Fixierte ;[Nachricht, Nachrichten]',
        none: 'keine fixierten nachrichten'
    },
    deleted: 'Fixierte Nachricht in {channel} erfolgreich gelöst.'
};