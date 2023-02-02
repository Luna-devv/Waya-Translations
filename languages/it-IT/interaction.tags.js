module.exports = {
    lengthFail: 'Il nome Tag non può essere più lungo di {max} caratteri!',
    alreadyExists: 'Un tag con quel nome esiste già!',
    tagsLimit: 'Hai raggiunto il limite di **{count}/{max} tag**!',
    regexFail: 'La convalida del nome del tag non è riuscita per l\'utilizzo di SlashCommands!\nNota che i caratteri speciali non sono consentiti.',
    alreadyExistsDefault: 'Esiste già un comando personalizzato con quel nome!',
    invalidTag: 'Un Tag con questo nome non esiste!',
    info: {
        title: {
            created: 'Creato',
            author: 'Autore',
            usesWeek: 'Utilizzazione in una settimana',
            uses: 'Usi',
            last: 'Ultimo utilizzato',
            name: 'Nome tag',
            slash: 'Slash Command',
            channels: 'Canali',
            tags: 'Tag',
            totalUses: 'Utilizzi totali',
            totalTags: 'Tag totali',
            totalChannels: 'Canali Totali'
        },
        description: {
            usesWeek: '{number}/s',
            // wk: week;; example: 43/wk
            slash: {
                true: 'attivo',
                false: 'non attivo'
            },
            channelUses: '{number} ;[usa, usi]'
        },
        noData: 'nessun dato'
    },
    overview: {
        title: 'Configurazione Tag',
        message: 'Messaggio',
        embed: 'Embed',
        placeholder: 'Segnaposti Utilizzabili',
        button: {
            exit: 'Salva ed esci',
            permission: 'Seleziona un permesso di cui l\'utente ha bisogno',
            color: {
                enabled: 'Scegli un colore per l\'Embed',
                disabled: 'Usa Embed e seleziona un colore'
            },
            group: {
                ticket: {
                    disable: 'Disabilita Tag Ticket',
                    enable: 'Abilita Tag Ticket'
                }
            },
            aliases: 'Gestisci Alias Del Nome',
            permissions: {
                Administrator: 'Amministratore',
                ManageChannels: 'Gestire i canali',
                ManageGuild: 'Gestire Server',
                ManageMessages: 'Gestire messaggi',
                ManageNicknames: 'Gestire i soprannomi',
                ManageRoles: 'Gestire i ruoli',
                ManageWebhooks: 'Gestire i Webhook',
                ManageEmojisAndStickers: 'Gestire Emoji e Adesivi',
                ManageEvents: 'Gestisci Eventi',
                ManageThreads: 'Gestisci Discussioni',
                none: 'Nessuno'
            }
        }
    },
    form: {
        formName: '{name} tag',
        message: { content: 'Contenuto' },
        embed: {
            title: 'Titolo',
            description: 'Descrizione',
            thumbnail: 'Miniatura',
            image: 'Immagine',
            footer: 'Piè di Pagina'
        },
        aliases: { name: 'Nome Alias ({max} max)' }
    },
    success: {
        message: 'Il Tag {name} è stato aggiunto con successo.',
        command: 'Provalo con {command}'
    },
    list: {
        title: {
            text: 'Testo ;[Comando, Comandi]',
            slash: 'Slash ;[Comando, Comandi]'
        },
        none: 'nessun tag',
        disabled: '{amount} ;[tag è, tag sono] nascosti a causa di permessi mancanti',
        // ;[singular, plural]
        amount: '{amount} tag • Usa con {command}'
    },
    deleted: 'Il Tag {name} è stato rimosso con successo**.'
};