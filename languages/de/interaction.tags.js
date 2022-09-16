module.exports = {
    lengthFail: 'Der Tag Name kann nicht länger als {max} Zeichen lang sein!',
    alreadyExists: 'Ein Tag mit diesem Namen existiert bereits!',
    tagsLimit: 'Du hast das Serverlimit von **{count}/{max} Tags** erreicht, bitte [Support kontaktieren]({support})!',
    regexFail: 'Überprüfung des Tag Namens fehlgeschlagen bei Verwendung von SlashCommands!\nBeachten Sie, dass Sonderzeichen nicht erlaubt sind.',
    alreadyExistsDefault: 'Ein Standard Befehl mit diesen Namen exestiert bereits!',
    invalidTag: 'Es existiert kein Tag mit diesen Namen!',
    info: {
        title: {
            created: 'Erstellt',
            author: 'Ersteller',
            usesWeek: 'Verwendung pro Woche',
            uses: 'Verwenden',
            last: 'Last Used',
            name: 'Tag Name',
            slash: 'Slash Command',
            channels: 'Channels',
            tags: 'Tags',
            totalUses: 'Total Uses',
            totalTags: 'Total Tags',
            totalChannels: 'Total Channels'
        },
        description: {
            usesWeek: '{number}/wk',
            // wk: week;; example: 43/wk
            slash: {
                true: 'active',
                false: 'not active'
            },
            channelUses: '{number} ;[use, uses]'
        },
        noData: 'no data'
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
                    disable: 'Disable Ticket Tag',
                    enable: 'Enable Ticket Tag'
                }
            },
            permissions: {
                Administrator: 'Administrator',
                ManageChannels: 'Manage Channels',
                ManageGuild: 'Manage Guild',
                ManageMessages: 'Manage Messages',
                ManageNicknames: 'Manage Nicknames',
                ManageRoles: 'Manage Roles',
                ManageWebhooks: 'Manage Webhooks',
                ManageEmojisAndStickers: 'Manage Emojis & Stickers',
                ManageEvents: 'Manage Events',
                ManageThreads: 'Manage Threads',
                none: 'None'
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
        disabled: '{amount} ;[Tag, Tags] sind versteckt aufgrund fehlender rechte'
    },
    deleted: '**{name}** wurde erfolgreich gelöscht.'
};