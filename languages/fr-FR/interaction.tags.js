module.exports = {
    lengthFail: 'Le nom du Tag doit être plus court que {max} caractères !',
    alreadyExists: 'Un Tag ayant le même nom existe déjà !',
    tagsLimit: 'Vous avez atteint la limite de **{count}/{max} tags** !',
    regexFail: 'Le nom du Tag est invalide pour être utilisé dans une commande Slash !\n(Les caractères spéciaux ne sont pas autorisés).',
    alreadyExistsDefault: 'Une commande par défaut portant ce nom existe déjà !',
    invalidTag: 'Aucun Tag portant ce nom n\'existent !',
    info: {
        title: {
            created: 'Créé',
            author: 'Auteur',
            usesWeek: 'Utilisations par semaine',
            uses: 'Utilisations',
            last: 'Dernière utilisation',
            name: 'Nom du Tag',
            slash: 'Commande Slash',
            channels: 'Salons',
            tags: 'Tags',
            totalUses: 'Utilisations au total',
            totalTags: 'Tags au total',
            totalChannels: 'Salons au total'
        },
        description: {
            usesWeek: '{number}/semaine',
            // wk: week;; example: 43/wk
            slash: {
                true: 'actif',
                false: 'inactif'
            },
            channelUses: '{number} ;[utilisation, utilisations]'
        },
        noData: 'pas de données'
    },
    overview: {
        title: 'Configuration des Tags',
        message: 'Message',
        embed: 'Embed',
        placeholder: 'Variables disponibles',
        button: {
            exit: 'Enregistrer et quitter',
            permission: 'Sélectionnez la permission dont l\'utilisateur a besoin',
            color: {
                enabled: 'Sélectionnez une couleur d\'embed',
                disabled: 'Utiliser un embed et sélectionner une couleur'
            },
            group: {
                ticket: {
                    disable: 'Disable Ticket Tag',
                    enable: 'Enable Ticket Tag'
                }
            },
            aliases: 'Gérer les Alias',
            permissions: {
                Administrator: 'Administrateur',
                ManageChannels: 'Gérer les Salons',
                ManageGuild: 'Gérer le Serveur',
                ManageMessages: 'Gérer les Messages',
                ManageNicknames: 'Gérer les Pseudos',
                ManageRoles: 'Gérer les Rôles',
                ManageWebhooks: 'Gérer les Webhooks',
                ManageEmojisAndStickers: 'Gérer les Émojis & les Autocollants',
                ManageEvents: 'Gérer les Évènements',
                ManageThreads: 'Gérer les Fils',
                none: 'Aucun'
            }
        }
    },
    form: {
        formName: 'Tag {name}',
        message: { content: 'Contenu' },
        embed: {
            title: 'Titre',
            description: 'Description',
            thumbnail: 'Miniature',
            image: 'Image',
            footer: 'Pied d\'embed'
        },
        aliases: { name: 'Alias ({max} max)' }
    },
    success: {
        message: 'Le Tag {name} a bien été ajouté.',
        command: 'Essayez-le avec {command}'
    },
    list: {
        title: {
            text: ';[Commande, Commandes] Texte',
            slash: ';[Commande, Commandes] Slash'
        },
        none: 'pas de tag',
        disabled: '{amount} ;[tag est masqué, tags sont masqués] en raison d\'un manque de permissions',
        // ;[singular, plural]
        amount: '{amount} tags • Utilisez-les avec {command}'
    },
    deleted: 'Le Tag **{name}** a bien été supprimé.'
};