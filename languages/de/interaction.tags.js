module.exports = {
    lengthFail: 'Der Tag Name kann nicht länger als {max} Zeichen lang sein!',
    alreadyExists: 'Ein Tag mit diesem Namen existiert bereits!',
    tagsLimit: 'Du hast das Serverlimit von **{count}/{max} Tags** erreicht!',
    regexFail: 'Überprüfung des Tag Namens fehlgeschlagen bei Verwendung von SlashCommands!\nBeachten Sie, dass Sonderzeichen nicht erlaubt sind.',
    alreadyExistsDefault: 'Ein Standard Befehl mit diesen Namen exestiert bereits!',
    invalidTag: 'Es existiert kein Tag mit diesen Namen!',
    info: {
        title: {
            created: 'Erstellt',
            author: 'Ersteller',
            usesWeek: 'Verwendung pro Woche',
            uses: 'Verwenden',
            last: 'Zuletzt Verwendet',
            name: 'Tag Name',
            slash: 'Slash Command',
            channels: 'Kanäle',
            tags: 'Tags',
            totalUses: 'Insgesamte Verwendungen',
            totalTags: 'Tags Anzahl',
            totalChannels: 'Alle Kanäle'
        },
        description: {
            usesWeek: '{number}/woche',
            // wk: week;; example: 43/wk
            slash: {
                true: 'aktiv',
                false: 'nicht aktiv'
            },
            channelUses: '{number} verwendet'
        },
        noData: 'keine Daten'
    },
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
            },
            group: {
                ticket: {
                    disable: 'Deaktiviere Ticket-Tag',
                    enable: 'Aktiviere Ticket-Tag'
                }
            },
            permissions: {
                Administrator: 'Administrator',
                ManageChannels: 'Kanäle Verwalten',
                ManageGuild: 'Server Verwalten',
                ManageMessages: 'Nachrichten Verwalten',
                ManageNicknames: 'Nickname Verwalten',
                ManageRoles: 'Rollen Verwalten',
                ManageWebhooks: 'WebHooks Verwalten',
                ManageEmojisAndStickers: 'Emoji & Sticker Verwalten',
                ManageEvents: 'Events Verwalten',
                ManageThreads: 'Threads Verwalten',
                none: 'Keine'
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
        title: {
            text: 'Text ;[Command, Commands]',
            slash: 'Slash ;[Command, Commands]'
        },
        none: 'keine Tags',
        disabled: '{amount} ;[Tag, Tags] sind versteckt aufgrund fehlender rechte'
    },
    deleted: '**{name}** wurde erfolgreich gelöscht.'
};