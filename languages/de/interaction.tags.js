module.exports = {
    alreadyExists: 'Ein Tag mit diesem Namen existiert bereits!',
    alreadyExistsDefault: 'Ein Standard Befehl mit diesen Namen exestiert bereits!',
    invalidTag: 'Es existiert kein Tag mit diesen Namen!',
    overview: {
        title: 'Tag Konfiguration',
        message: 'Nachricht',
        embed: 'Embed',
        placeholder: 'Benutzbare Platzhalter',
        button: {
            exit: 'Speichern & Verlassen',
            permission: 'Wähle Permissions die der user braucht',
            color: {
                enabled: 'Setzte eine Farbe für das Embed',
                disabled: 'Benutzte Embeds und wähle eine Farbe'
            }
        }
    },
    form: {
        formName: '{name} Tag',
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
        message: 'Erfolgreich den Tag {name} hinzugefügt.',
        command: 'Teste aus mit {command}'
    },
    list: {
        title: 'Tag liste',
        none: 'keine Tags',
        disabled: '{amount} ;[Tag, Tags] sind versteckt aufgrund fehlender rechte'    // ;[singular, plural]
    },
    deleted: '**{name}** wurde erfolgreich gelöscht.'
};