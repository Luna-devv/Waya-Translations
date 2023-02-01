/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Validation des données...',
    notAllowed: 'Vous ne pouvez pas utiliser ce menu.',
    prefix: {
        name: 'Préfixe',
        set: 'Le préfixe pour ce serveur a bien été changé en {prefix} !',
        noSpace: 'Veuillez ne pas entrer d\'espace dans le préfixe ! Vous ne pouvez en ajouter qu\'à la fin.',
        disclaimer: 'Ceci ne s\'applique PAS aux commandes "/" (Slash)'
    },
    global: {
        // will be the same everywhere
        none: 'aucun',
        useButtons: 'Sélectionnez l\'option que vous souhaitez modifier avec les boutons ci-dessous.',
        developer: {
            bypass: 'Vous n\'avez pas `MANAGE_GUILD` pour accéder à cette interface..\nVoulez-vous tout de même continuer ?',
            choice: {
                access: 'Je suis sûr(e), oui',
                abord: 'Laissez tomber'
            },
            notice: 'attention - Privilèges développeurs activés..'
        },
        permissions: 'Manquant : {perms}',
        placeholders: 'Placeholders',
        await: {
            channel: 'Mentionnez un salon ou envoyez l\'ID d\'un salon dans le chat.\nTaper `none` pour supprimer le salon.',
            category: 'Mentionnez une catégorie ou envoyez l\'ID d\'une catégorie dans le chat.\nTaper `none` pour supprimer la catégorie.',
            role: 'Mentionnez un rôle ou envoyez l\'ID d\'un rôle dans le chat.\nTaper `none` pour supprimer le rôle.',
            message: 'Envoyez le message qui sera utilisé en tant que {what}.',
            emote: 'Envoyez l\'émoji qui sera utilisé en tant que {what}.'
        },
        success: {
            set: 'Successfully set {what} to **{data}**.',
            add: 'Successfully add {what} to **{data}**.',
            setCodeblock: 'Successfully set {what} to {data}',
            removed: 'Successfully removed the {what}.',
            remove: 'Successfully remove {what} from **{data}**.',
            fail: 'This {what} does not exist in this guild..',
            lengthFail: 'The {what} is longer than {max} characters! ({length} characters, {relative} too much)',
            otherLengthFail: 'The {what} is shorter than {min} characters! ({length} characters, {relative} too less)',
            numberFail: 'The {what} is not a number between {a} and {b}!',
            roleFail: 'Ce rôle n\'est modifiable que par Discord ou est lié à un bot.'
        },
        webedit: {
            button: 'Editeur d\'embed',
            title: 'Éditer le message en ligne',
            description: 'Allez sur [ce site]({url}) pour modifier le message et l\'embed.',
            open: 'Ouvrir l\'éditeur en ligne'
        },
        type: {
            text: 'Salon textuel',
            category: 'Catégorie du salon',
            role: 'Rôle',
            emoji: 'Emote'
        },
        state: {
            enabled: 'Activé',
            disabled: 'Désactivé'
        },
        option: {
            required: 'Required',
            optional: 'Optionnel'
        },
        button: {
            back: 'Précédent',
            disable: 'Désactiver',
            enable: 'Activer',
            channel: {
                set: 'Définir le salon',
                edit: 'Modifier le salon'
            },
            category: {
                set: 'Définir la catégorie',
                edit: 'Modifier la catégorie'
            },
            role: {
                set: 'Définir le rôle',
                edit: 'Modifier le rôle'
            },
            mode: {
                analyst: 'Analyste',
                cozy: 'Confort'
            },
            modeChange: {
                analyst: 'Définir sur Analyste',
                cozy: 'Définir sur Confort'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Activer dupaw',
                disable: 'Désactiver dupaw'
            }
        }
    },
    main: {
        title: 'Configurer {name}',
        option: {
            premium: {
                text: 'Entreprise Niveau {tier}',
                buy: 'S\'abonner à Entreprise'
            }
        },
        button: {
            logging: 'Historique',
            tickets: 'Tickets',
            moderation: 'Moderation',
            starboard: 'Starboard',
            misc: 'Autres',
            followNews: 'Suivre les nouveautés',
            staff: 'Gérer le serveur',
            exit: 'Quitter',
            help: 'Support'
        }
    },
    logging: {
        title: 'Configure Logging',
        button: {
            messages: 'Messages',
            joins: 'Joins',
            welcomer: 'Welcoming',
            byer: 'Bying'
        },
        page: {
            messages: {
                title: 'Messages',
                name: 'Historique des messages',
                option: {
                    channel: 'Salon : {channel}',
                    mode: 'Mode : {mode}'
                },
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe'
                    }
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Salon d\'historique des messages'
                    }
                }
            },
            joins: {
                title: 'Joins',
                name: 'Join Logging',
                option: {
                    channel: 'Salon : {channel}',
                    mode: 'Mode : {mode}',
                    filter: 'Filtre : {state}',
                    captcha: 'CAPTCHA : {state}'
                },
                button: {
                    filter: 'Filtre',
                    captcha: 'Vérification CAPTCHA'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Rejoindre l\'historique'
                    },
                    filter: {
                        title: 'Filtre',
                        option: {
                            trigger: 'Age Trigger: **{trigger} days**',
                            punishment: 'Punishment: **{type}**',
                            punishmentType: {
                                ban: 'Bannir',
                                kick: 'Expulser',
                                timeout: 'Exclure',
                                role: 'Assigner le rôle {role}',
                                none: 'aucun'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Désactiver les notifications en MP',
                                enable: 'Activer les notifications en MP'
                            },
                            trigger: {
                                set: 'Set Age Trigger',
                                edit: 'Edit Age Trigger'
                            },
                            punishment: {
                                title: 'Définir une sanction',
                                current: 'Current',
                                option: {
                                    ban: 'Bannir un utilisateur',
                                    kick: 'Expulser un utilisateur',
                                    timeout: 'Exclure un utilisateur',
                                    role: 'Assigner un rôle'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Trigger',
                                name: 'age requirement',
                                description: 'If an account is younger than this age, they\'ll get punished!\nInput must be between 0 and 28 days.'
                            },
                            role: {
                                title: 'Rôle',
                                name: 'rôle sanction'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Rôle vérifié : {role}',
                            unverifiedrole: 'Rôle non vérifié : {role}',
                            channel: 'Historique : {channel}',
                            color: 'Couleur : {color}'
                        },
                        disclaimer: 'Continuez avec {command}',
                        button: {
                            verifiedrole: {
                                set: 'Définir le rôle vérifié',
                                edit: 'Modifier le rôle vérifié'
                            },
                            unverifiedrole: {
                                set: 'Définir le rôle non vérifié',
                                edit: 'Modifier le rôle non vérifié'
                            },
                            type: {
                                title: 'Définir un type de CAPTCHA',
                                selected: 'Sélectionné'
                            },
                            color: 'Changer la couleur de la page'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Rôle vérifié',
                                name: 'Rôle vérifié CAPTCHA'
                            },
                            unverifiedrole: {
                                title: 'Rôle non vérifié',
                                name: 'Rôle non vérifié CAPTCHA'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging Channel'
                            },
                            role: {
                                title: 'Role',
                                name: 'failed CAPTCHA role'
                            },
                            color: {
                                title: 'Page Color',
                                name: 'Page Color',
                                description: 'Paste a Hex color into the chat you want to use.\nWe recommend you using a color near to black with very high saturation.\nNote that the color on the Passport will always look brighter.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Welcomer',
                name: 'Welcomer',
                option: {
                    channel: 'Channel: {channel}',
                    role: 'Roles: {role}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'AL Message: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'AL Message: use `{command}`'
                    },
                    pings: 'Pings: {channels}',
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                warnings: {
                    afterleaveXautodelete: 'We don\'t recommend using **Auto Delete** and **Delete After Leave** simultaneously',
                    embedXcard: 'In embed card overwrites your custom embed image'
                },
                button: {
                    message: 'Edit Message',
                    imgcard: 'Edit Card',
                    pings: 'Edit Ping Channels',
                    autodelete: 'Set Autodelete',
                    assignRolesAfterRejoin: {
                        enable: 'Reassign Roles after Rejoin',
                        disable: 'Disable Reassign Roles after Rejoin'
                    },
                    afterleave: {
                        title: 'What should happen with the message if the member leaves?',
                        selected: 'Selected',
                        option: {
                            nothing: 'Nothing',
                            edit: 'Edit on leave',
                            delete: 'Delete on leave'
                        }
                    },
                    dm: 'DM Message',
                    afterleave_webedit: 'After Leave Embed Editor'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Salon de bienvenue'
                    },
                    message: {
                        title: 'Message',
                        name: 'Message de bienvenue'
                    },
                    role: {
                        title: 'Rôle',
                        name: 'Rôle de bienvenue'
                    },
                    autodelete: {
                        title: 'Suppression Automatique',
                        name: 'Suppression Automatique',
                        description: 'The Welcomer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    },
                    dm: { button: { disable: 'Disable DM message' } },
                    imgcard: {
                        title: 'Card',
                        option: { background: 'Background: {url}' },
                        button: {
                            background: {
                                set: 'Set Custom Background',
                                edit: 'Edit Custom Background'
                            },
                            deleteBackground: 'Delete Background',
                            inEmbed: {
                                enable: 'Show Image in Embed',
                                disable: 'Don\'t Show Image in Embed'
                            }
                        },
                        page: {
                            background: {
                                title: 'Background',
                                name: 'Card Background',
                                description: 'The link must be a **direct image URL**, it also must be a {scheme} type link.\nWe recommend a ratio of {ratio} and a min resolution of {resolution}.'
                            }
                        }
                    },
                    dm: { title: 'Direct Message' }
                }
            },
            byer: {
                title: 'Byer',
                name: 'Byer',
                option: {
                    channel: 'Salon : {channel}',
                    message: {
                        message: 'Message : {message}',
                        command: 'Message : utiliser `{command}`'
                    },
                    autodelete: 'Suppression automatique : **{time}**',
                    autodelete_never: 'jamais'
                },
                button: {
                    message: 'Modifier le message',
                    autodelete: 'Set Autodelete'
                },
                page: {
                    channel: {
                        title: 'Salon',
                        name: 'Byer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Byer Message'
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'Auto Delete',
                        description: 'The Byer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Configure Ticketing',
        option: {
            channel: 'Category: {channel}',
            staff: 'Staff : {role}',
            logging: 'Logging: {channel}',
            forceReason: 'Raison : {state}',
            naming: 'Naming: {type}',
            namingType: {
                username: 'Nom d\'utilisateur',
                userid: 'UserId',
                random: 'Aléatoire'
            }
        },
        button: {
            forceReason: {
                enable: 'Force Reason',
                disable: 'Raison facultative'
            },
            logging: {
                edit: 'Set Logging Channel',
                set: 'Change Logging Channel'
            },
            transcript: {
                disable: 'Disable Transcripts',
                enable: 'Save Transcripts'
            },
            openReason: {
                disable: 'Disable Open Reason',
                enable: 'Enable Open Reason'
            },
            leaveAutoclose: {
                disable: 'Disable Leave Autoclose',
                enable: 'Enable Leave Autoclose'
            },
            embeds: 'Change Embeds',
            naming: {
                title: 'Set a naming type',
                current: 'Current',
                option: {
                    username: 'Nom d\'utilisateur',
                    userid: 'User Id',
                    random: 'Id aléatoire'
                }
            }
        },
        page: {
            category: {
                title: 'Catégorie',
                name: 'Tickets Category'
            },
            role: {
                title: 'Staff Role',
                name: 'Ticket Staff role'
            },
            descriptions: {
                title: 'Texts',
                name: 'Ticket descriptions',
                button: {
                    texts: 'Preview Ticket',
                    topic: 'Change Topic',
                    title: 'Change title text',
                    unclaimed: 'Change Unclaimed Embed',
                    claimed: 'Change Claimed Embed'
                },
                page: {
                    title: {
                        title: 'Titre',
                        name: 'Ticket embed title'
                    },
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket description'
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket description'
                    },
                    topic: {
                        title: 'Sujet',
                        name: 'Sujet du ticket'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'Ticket Logging'
            }
        }
    },
    moderation: {
        title: 'Configure Moderation',
        option: {
            role: 'Bypass Role: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti-Arnaques',
            antiLink: 'Anti-Lien',
            antiSpam: 'Anti-Spam',
            bypassRole: {
                edit: 'Edit bypass Role',
                set: 'Set bypass Role'
            },
            logging: {
                edit: 'Edit logging Channel',
                set: 'Set logging Channel'
            }
        },
        page: {
            role: {
                title: 'Bypass Role',
                name: 'Bypass role'
            },
            logging: {
                title: 'Logging',
                name: 'Moderation logs'
            },
            filter: {
                title: 'Filtre',
                name: 'Filtre de modération',
                option: {
                    message: 'Message : {message}',
                    actions: 'Actions : {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    total: 'Total: **{amount} words**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Clear word list',
                    editWords: 'Edit word list',
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    },
                    export: 'Show word list'
                },
                page: {
                    delete: {
                        title: 'Clear Word List',
                        description: 'Are you sure that you want to clear out all blacklisted words?',
                        page: {
                            confirm: {
                                title: 'Confirmed',
                                description: 'Successfully cleared out all blacklisted words! You can now dismiss this message.'
                            },
                            abord: {
                                title: 'Annulé',
                                description: 'No actions have been taken! You can now dismiss this message.'
                            }
                        }
                    },
                    words: {
                        title: 'Mots',
                        name: 'Blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nPlease **only use** characters from `A-Z`\nSplit words with `, ` to bulk add words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Moderation Anti Scam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anit Scam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'Moderation Anti Link',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Disallow Media',
                        enable: 'Allow Media'
                    },
                    message: 'Éditer le message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Sélectionné',
                        option: {
                            reply: 'Reply',
                            delete: 'Delete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anit Link reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Moderation Anti Spam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    threshold: 'Threshold: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'reply',
                        timeout: 'timeout',
                        purge: 'purge'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Edit Threshold',
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
                    actions: {
                        title: 'Manage an action',
                        selected: 'Selected',
                        option: {
                            reply: 'Reply',
                            timeout: 'Timeout',
                            purge: 'Purge'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Anti Spam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Threshold',
                        name: 'spam Threshold',
                        description: 'I will consider it as spam, when this amount gets reached within 5 seconds!\nInput must be between 1 and 99.'
                    }
                }
            }
        }
    },
    starboard: {
        title: 'Configure Starboard',
        button: {
            emoji: 'Changer l\'émoji',
            color: 'Changer la couleur',
            count: 'Change Count',
            nsfw: {
                disable: 'Désactiver NSFW',
                enable: 'Activer NSFW'
            },
            bots: {
                disable: 'Désactiver les Bots',
                enable: 'Activer les Bots'
            },
            selfReact: {
                disable: 'Disable Self Reaction',
                enable: 'Enable Self Reaction'
            },
            reply: {
                disable: 'Hide Replied to',
                enable: 'Show Replied to'
            },
            edits: {
                disable: 'Disalow Edits',
                enable: 'Allow Edits'
            },
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging'
            },
            blacklist: {
                set: 'Set Blacklisted Role',
                change: 'Edit Blacklisted Role'
            },
            blacklistedChannels: 'Edit Blacklisted Channels',
            delete: {
                disable: 'Disable Delete <{reactions} Reactions',
                enable: 'Enable Delete <{reactions} Reactions'
            },
            display: {
                title: 'Set a display style',
                selected: 'Selected',
                option: {
                    tag: 'Tag',
                    username: 'Username',
                    nickname: 'Nickname',
                    guildProfile: 'Guild Profile'
                }
            }
        },
        option: {
            channel: 'Channel: {channel}',
            color: 'Color: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Count: {count}',
            blacklistedRole: 'Blacklisted: {role}',
            display: 'Display: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Username',
                nickname: 'Nickname',
                guildProfile: 'Guild Profile'
            }
        },
        page: {
            channel: {
                title: 'Channel',
                name: 'Starboard Channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'Starboard Emoji'
            },
            color: {
                title: 'Color',
                name: 'Starboard Color',
                description: 'Paste a Hex color into the chat you want to use.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Count',
                name: 'requierd Count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            },
            blacklistedRole: {
                title: 'Blacklist Role',
                name: 'blacklisted Role'
            },
            blacklistedChannels: {
                title: 'Blacklist Channels',
                name: 'Blacklist Channel list',
                description: 'Mention a Channel/Category or paste the Channel ID into the chat.\nPrefix the message with `+` to add or `-` to remove Channels.\nYou can send multiple Channels seperated with a space.\nType `none` to remove all Channels.',
                missingPrefix: 'The message must be prefixed with `+` to add or `-` to remove Channels.'
            }
        }
    },
    misc: {
        title: 'Configure Miscellaneous',
        button: {
            embedMessages: 'Embed Messages',
            levelRoles: 'Level Roles',
            leaderboards: 'Leaderboards'
        },
        page: {
            embedMessages: {
                title: 'Embed Messages',
                description: '**What\'s This?**\nIf a message link is being send, {name} will reply with the content of that message!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Allow other Guilds to Embed Messages from here',
                        disable: 'Disalow other Guilds to Embed Messages from here'
                    },
                    color: 'Choose a Color for the Embed',
                    display: {
                        title: 'Choose a Author display style',
                        selected: 'Selected',
                        option: {
                            message: 'Message Content',
                            author: 'Author Field',
                            footer: 'Footer Field'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Level Roles',
                option: {
                    roles: 'Roles: **{count}/{max}**',
                    roles_upsell: 'Subscribe to get {count}+',
                    channel: 'Channel: {channel}',
                    channel_none: 'message channel',
                    message: 'Message: {message}'
                },
                button: {
                    message: 'Edit Message',
                    addrole: 'Add Level',
                    select: {
                        title: 'Chose a Level Role you want to edit',
                        editing: 'Editing',
                        option: {
                            name: '{messages} messages',
                            description: 'Role: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Level Up reply'
                    },
                    channel: {
                        title: 'Channel',
                        name: 'Level Up Channel'
                    },
                    addRole: {
                        title: 'New Level Role',
                        limit: 'You have reached the guild limit of **{count}/{max} level roles**!',
                        alreadExists: 'A reward role for **{messages} messages** already has been set with the **{role} role**.',
                        success: 'Successfully added this Level Role. Each user who reaches **{messages} messages** will recieve the **{role} role** now!',
                        page: {
                            messageCount: {
                                title: 'Message Count',
                                name: 'required Message Count',
                                description: 'Send a number, that the user will required to have as in message count to get the selected role.'
                            },
                            role: {
                                title: 'Role',
                                name: 'present Role'
                            }
                        }
                    },
                    editRole: {
                        title: 'Edit Level Role',
                        option: {
                            role: 'Role: {role}',
                            messages: 'Messages: {messages}'
                        },
                        button: {
                            messages: 'Change Message Count',
                            role: 'Change Role',
                            delete: 'Delete'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Leaderboards',
                option: { blacklisted: 'Blacklisted: {channels}' },
                button: { blacklistedChannels: 'Edit Blacklisted Channels' }
            }
        }
    },
    followNews: {
        title: 'Follow News Updates',
        name: 'Follow News'
    },
    staff: {
        title: 'Manage {name}',
        option: { premium: 'Enterprise: {tier}' },
        button: {
            premium: 'Change premium Tier',
            data: 'Export Data'
        },
        page: {
            data: {
                title: 'Data Export',
                message: 'The data from {name} is displayed below.',
                error: 'Cannot send message :/'
            },
            premium: {
                title: 'Configure Enterprise',
                option: { tier: 'Current Tier: {tier}' },
                button: { tier: 'Tier {tier}' }
            }
        }
    },
    exit: { title: 'Saved settings and exited config menu.' }
};