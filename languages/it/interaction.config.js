/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Convalidazione dei dati...',
    notAllowed: 'You can\'t use this menu.',
    prefix: {
        name: 'Prefisso',
        set: 'Hai aggiornato con successo il prefisso della gilda a {prefix}!',
        noSpace: 'Si prega di notare che non è possibile utilizzare spazi all\'interno del prefisso! È consentito solo alla fine.',
        disclaimer: 'Questo NON si applica ai comandi "/" (Slash)-comandi'
    },
    global: {
        // will be the same everywhere
        none: 'nessuno',
        useButtons: 'Selezionare un\'opzione che si desidera modificare utilizzando i pulsanti qui sotto.',
        developer: {
            bypass: 'Non hai i permessi `MANAGE_GUILD` per accedere a questo pannello...\nVuoi ancora continuare?',
            choice: {
                access: 'Si sono sicuro',
                abord: 'Lascia stare'
            },
            notice: 'prudente - privilegi di sviluppatore forzati..'
        },
        permissions: 'Mancanti: {perms}',
        placeholders: 'Segnaposti',
        await: {
            channel: 'Mention a Channel or paste the Channel ID into the chat.\nType `none` to remove the channel.',
            category: 'Mention a Category or paste the Category ID into the chat.\nType `none` to remove the category.',
            role: 'Mention a Role or paste the Role ID into the chat.\nType `none` to remove the role.',
            message: 'Send a Message which should be used as {what}.',
            emote: 'Send an Emoji which should be used as {what}.'
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
            numberFail: 'Il {what} non è un numero compreso tra {a} e {b}!',
            roleFail: 'Questo ruolo è gestibile solo da Discord o appartiene a un utente del bot.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Message Web Edit',
            description: 'Open [this Website]({url}) to start editing the message & embed.',
            open: 'Open Web Edit'
        },
        type: {
            text: 'Canale di testo',
            category: 'Canale categoria',
            role: 'Ruolo',
            emoji: 'Emote'
        },
        state: {
            enabled: 'Abilitato',
            disabled: 'Disattivato'
        },
        option: {
            required: 'Necessaria',
            optional: 'Opzionale'
        },
        button: {
            back: 'Indietro',
            disable: 'Disabilita',
            enable: 'Abilita',
            channel: {
                set: 'Imposta Canale',
                edit: 'Modifica Canale'
            },
            category: {
                set: 'Imposta categoria',
                edit: 'Modifica Categoria'
            },
            role: {
                set: 'Imposta Ruolo',
                edit: 'Modifica Ruolo'
            },
            mode: {
                analyst: 'Analisti',
                cozy: 'Accogliente'
            },
            modeChange: {
                analyst: 'Set to Analyst',
                cozy: 'Set to Cozy'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Abilita dupaw',
                disable: 'Disabilita dupaw'
            }
        }
    },
    main: {
        title: 'Configura {name}',
        option: {
            premium: {
                text: 'Livello Abbonamento {tier}',
                buy: 'Compra un Abbonamento'
            }
        },
        button: {
            logging: 'Logging',
            tickets: 'Ticket',
            moderation: 'Moderazione',
            starboard: 'Starboard',
            misc: 'Misc',
            followNews: 'Segui Notizie',
            staff: 'Gestire la Gilda',
            exit: 'Chiudi',
            help: 'Assistenza'
        }
    },
    logging: {
        title: 'Configura Logging',
        button: {
            messages: 'Messaggi',
            joins: 'Joins',
            welcomer: 'Accoglienza',
            byer: 'Andata'
        },
        page: {
            messages: {
                title: 'Messaggi',
                name: 'Logging Messaggi',
                option: {
                    channel: 'Canale: {channel}',
                    mode: 'Modalità: {mode}'
                },
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe'
                    }
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'Canale Logging messaggi'
                    }
                }
            },
            joins: {
                title: 'Joins',
                name: 'Logging Unizione',
                option: {
                    channel: 'Canale: {channel}',
                    mode: 'Modalità: {mode}',
                    filter: 'Filter: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filter',
                    captcha: 'CAPTCHA Verification'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Join Logging'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Age Trigger: **{trigger} days**',
                            punishment: 'Punishment: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Kick',
                                timeout: 'Timeout',
                                role: 'Assign {role} role',
                                none: 'none'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Disable DM notification',
                                enable: 'Enable DM notification'
                            },
                            trigger: {
                                set: 'Set Age Trigger',
                                edit: 'Edit Age Trigger'
                            },
                            punishment: {
                                title: 'Set a punishment',
                                current: 'Current',
                                option: {
                                    ban: 'Ban User',
                                    kick: 'Kick User',
                                    timeout: 'Timeout User',
                                    role: 'Assign Role'
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
                                title: 'Role',
                                name: 'punishment role'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Ruolo verificato: {role}',
                            unverifiedrole: 'Ruolo non verificato: {role}',
                            channel: 'Canale del log: {channel}',
                            color: 'Colore: {color}'
                        },
                        disclaimer: 'Continua con {command}',
                        button: {
                            verifiedrole: {
                                set: 'Imposta Ruolo Verificato',
                                edit: 'Modifica Ruolo Verificato'
                            },
                            unverifiedrole: {
                                set: 'Imposta Ruolo Non Verificato',
                                edit: 'Modifica Ruolo Non Verificato'
                            },
                            type: {
                                title: 'Imposta un tipo CAPTCHA',
                                selected: 'Selezionato'
                            },
                            color: 'Cambia colore della pagina'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Ruolo Verificato',
                                name: 'Ruolo verificato dal CAPTCHA'
                            },
                            unverifiedrole: {
                                title: 'Ruolo Non Verificato',
                                name: 'Ruolo non verificato dal CAPTCHA'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'Canale di registrazione CAPTCHA'
                            },
                            role: {
                                title: 'Ruolo',
                                name: 'ruolo CAPTCHA fallito'
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
                button: {
                    message: 'Edit Message',
                    card: {
                        enable: 'Enabled Welcomer Card',
                        disable: 'Disable Welcomer Card'
                    },
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
                    afterleave_webedit: 'After Leave Embed Editor'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Welcomer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Welcomer Message'
                    },
                    role: {
                        title: 'Role',
                        name: 'Welcomer Role'
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'Auto Delete',
                        description: 'The Welcomer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    }
                }
            },
            byer: {
                title: 'Byer',
                name: 'Byer',
                option: {
                    channel: 'Channel: {channel}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    },
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                button: {
                    message: 'Edit Message',
                    card: {
                        enable: 'Enabled Welcomer Card',
                        disable: 'Disable Welcomer Card'
                    },
                    autodelete: 'Set Autodelete'
                },
                page: {
                    channel: {
                        title: 'Channel',
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
        title: 'Configura Ticketing',
        option: {
            channel: 'Categoria: {channel}',
            staff: 'Personale: {role}',
            logging: 'Logging: {channel}',
            forceReason: 'Motivo: {state}',
            naming: 'Denominazione: {type}',
            namingType: {
                username: 'Nomeutente',
                userid: 'Idutente',
                random: 'Casuale'
            }
        },
        button: {
            forceReason: {
                enable: 'Motivo forzato',
                disable: 'Motivo Opzionale'
            },
            logging: {
                disable: 'Disabilita Logging',
                enable: 'Abilita Logging'
            },
            transcript: {
                disable: 'Disabilita Trascritti',
                enable: 'Salva trascrizioni'
            },
            openReason: {
                disable: 'Disable Open Reason',
                enable: 'Enable Open Reason'
            },
            leaveAutoclose: {
                disable: 'Disable Leave Autoclose',
                enable: 'Enable Leave Autoclose'
            },
            texts: 'Change Texts',
            naming: {
                title: 'Set a naming type',
                current: 'Current',
                option: {
                    username: 'Username',
                    userid: 'User Id',
                    random: 'Random Id'
                }
            }
        },
        page: {
            category: {
                title: 'Category',
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
                    texts: 'Preview ticket',
                    topic: 'Change topic',
                    title: 'Change title text',
                    unclaimed: 'Change unclaimed text',
                    claimed: 'Change claimed text'
                },
                page: {
                    title: {
                        title: 'Title',
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
                        title: 'Topic',
                        name: 'Tickets Topic'
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
            antiScam: 'Anti Scam',
            antiLink: 'Anti Link',
            antiSpam: 'Anti Spam',
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
                title: 'Filter',
                name: 'Moderation Filter',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
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
                    }
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
                                title: 'Aborded',
                                description: 'No actions have been taken! You can now dismiss this message.'
                            }
                        }
                    },
                    words: {
                        title: 'Words',
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
            emoji: 'Change Emoji',
            color: 'Change Color',
            count: 'Change Count',
            nsfw: {
                disable: 'Disable NSFW',
                enable: 'Enable NSFW'
            },
            bots: {
                disable: 'Disable Bots',
                enable: 'Enable Bots'
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