module.exports = {
    alreadyExists: 'Eine Stickymessage in diesem Kanal existiert bereits!',
    stickymessagesLimit: 'Du hast das Serverlimit von **{count}/{max} Stickybessages** erreicht!',
    invalidstickymessage: 'In diesem Kanal existiert keine Stickymessage!',
    overview: {
        title: 'Stickymessage Konfiguration',
        state: 'Status: {state}',
        state_status: {
            enabled: 'Aktiviert',
            disabled: 'Deaktiviert'
        },
        permissions: 'Fehlt: {perms}',
        message: 'Nachricht',
        embed: 'Embed',
        note: 'Button Notiz',
        note_status: {
            show: 'Anzeigen',
            hide: 'Versteckt'
        },
        button: {
            state: {
                enable: 'Aktivieren',
                disable: 'Deaktivieren'
            },
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
        formName: '{name}\'s Stickymessage',
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
        message: 'Eine Stickymessage wurde erfolgreich in {channel} erstellt.',
        try: 'Probiere es aus, indem du ein paar Nachrichten sendest!'
    },
    list: {
        title: ';[Stickymessage, Stickymessages]',
        none: 'keine fixierten nachrichten'
    },
    deleted: 'Stickymessage erfolgreich in {channel} gelöscht.'
};