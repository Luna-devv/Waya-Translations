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
            channel: 'Menziona un canale o incolla l\'ID del canale nella chat.\nDigita `none` per rimuovere il canale.',
            category: 'Menziona un canale o incolla l\'ID del canale nella chat.\nDigita `none` per rimuovere il canale.',
            role: 'Menziona un ruolo o incolla l\'ID ruolo nella chat.\nDigita `none` per rimuovere il ruolo.',
            message: 'Invia un messaggio che dovrebbe essere usato come {what}.',
            emote: 'Invia un Emoji che dovrebbe essere usato come {what}.'
        },
        success: {
            set: 'Impostato {what} a **{data}** con successo.',
            add: 'Aggiunto {what} a **{data}** con successo.',
            setCodeblock: 'Impostato {what} a {data} con successo',
            removed: 'Rimosso {what} con successo.',
            remove: 'Rimosso {what} da **{data}** con successo.',
            fail: '{what} non esiste in questo Server..',
            lengthFail: '{what} è più lungo di {max} caratteri! ({length} caratteri, {relative} troppo)',
            otherLengthFail: '{what} è più corto di {min} caratteri! ({length} caratteri, {relative} troppo meno)',
            numberFail: '{what} non è un numero compreso tra {a} e {b}!',
            roleFail: 'Questo ruolo è gestibile solo da Discord o appartiene a un utente bot.'
        },
        webedit: {
            button: 'Editore Embed',
            title: 'Modifica Messaggio Web',
            description: 'Apri [questo sito Web]({url}), per iniziare a modificare il messaggio e l\'embed.',
            open: 'Apri La Modifica Web'
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
                analyst: 'Imposta su Analista',
                cozy: 'Imposta su accogliente'
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
                        enable: 'Abilita Snipe',
                        disable: 'Disabilita Snipe'
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
                    filter: 'Filtro: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filtro',
                    captcha: 'Verifica CAPTCHA'
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'Logging Unizione'
                    },
                    filter: {
                        title: 'Filtro',
                        option: {
                            trigger: 'Trigger Età: **{trigger} giorni**',
                            punishment: 'Punzione: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Espellsione',
                                timeout: 'Timeout',
                                role: 'Assegna {role}',
                                none: 'niente'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Disabilita notifiche su messaggi privati',
                                enable: 'Abilita notifiche su messaggi privati'
                            },
                            trigger: {
                                set: 'Imposta Trigger Età',
                                edit: 'Modifica il Trigger Età'
                            },
                            punishment: {
                                title: 'Imposta una punizione',
                                current: 'Attuale',
                                option: {
                                    ban: 'Banna utente',
                                    kick: 'Espelli Utente',
                                    timeout: 'Timeout Utente',
                                    role: 'Assegna ruolo'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Trigger',
                                name: 'limite età',
                                description: 'Se un account è più giovane di questa età, verrà punito!\nL\'input deve essere compreso tra 0 e 28 giorni.'
                            },
                            role: {
                                title: 'Ruolo',
                                name: 'ruolo di punizione'
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
                                title: 'Colore sfondo',
                                name: 'Colore sfondo',
                                description: 'Incolla un colore Hex nella chat che vuoi usare.\nTi consigliamo di usare un colore vicino al nero con saturazione molto alta.\nNota che il colore sul Passaporto sarà sempre più luminoso.\nOttieni un codice colore Hex da [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Il codice colore non è un colore Hex valido.\nOttieni un codice colore Hex da [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Benvenutore',
                name: 'Benvenutore',
                option: {
                    channel: 'Canale: {channel}',
                    role: 'Ruoli: {role}',
                    message: {
                        message: 'Messaggio: {message}',
                        command: 'Messaggio: usa `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'DlA Messaggio: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'DlA Messaggio: usa `{command}`'
                    },
                    pings: 'Ping: {channels}',
                    autodelete: 'Auto eliminazione: **{time}**',
                    autodelete_never: 'mai'
                },
                warnings: {
                    afterleaveXautodelete: 'Non consigliamo di utilizzare **eliminazione automatica** ed Eliminazione dopo abbandono** contemporaneamente',
                    embedXcard: 'Nella scheda incorporata sovrascrive l\'immagine incorporata personalizzata'
                },
                button: {
                    message: 'Modifica messaggio',
                    imgcard: 'Modifica carta',
                    pings: 'Modifica Canali Ping',
                    autodelete: 'Imposta Eliminazione Automatica',
                    assignRolesAfterRejoin: {
                        enable: 'Riassegna ruoli dopo la Riunione',
                        disable: 'Disabilita Riassegna ruoli dopo la Riunione'
                    },
                    afterleave: {
                        title: 'Che cosa dovrebbe accadere con il messaggio se il membro abbandona il server?',
                        selected: 'Selezionato',
                        option: {
                            nothing: 'Niente',
                            edit: 'Modifica a abbandono',
                            delete: 'Elimina a abbandono'
                        }
                    },
                    dm_webedit: 'Editore Embed in messaggi privati',
                    afterleave_webedit: 'Editore Embed dopo l\'abbandono'
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'Canale di Benvenutore'
                    },
                    message: {
                        title: 'Messaggio',
                        name: 'Messaggio Benvenutore'
                    },
                    role: {
                        title: 'Ruolo',
                        name: 'Ruolo Benvenutore'
                    },
                    autodelete: {
                        title: 'Eliminazione Automatica',
                        name: 'Eliminazione Automatica',
                        description: 'Il messaggio Benvenutore, verrà eliminato dopo questo tempo.\nConsigliamo di mantenere questo tempo breve (solo pochi secondi).\nEsempio: `1m 3s`'
                    },
                    imgcard: {
                        title: 'Scheda',
                        option: { background: 'Sfondo: {url}' },
                        button: {
                            background: {
                                set: 'Sfondo personalizzato',
                                edit: 'Modifica Sfondo personalizzato'
                            },
                            deleteBackground: 'Elimina sfondo',
                            inEmbed: {
                                enable: 'Mostra immagine in Embed',
                                disable: 'Non mostrare immagine in Embed'
                            }
                        },
                        page: {
                            background: {
                                title: 'Sfondo',
                                name: 'Sfondo Card',
                                description: 'Il link deve essere un **URL di immagine diretta**, deve anche essere un link di tipo {scheme}.\nConsigliamo un rapporto di {ratio} e una risoluzione minima di {resolution}.'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Abbandonatore',
                name: 'Abbandonatore',
                option: {
                    channel: 'Canale: {channel}',
                    message: {
                        message: 'Messaggio: {message}',
                        command: 'Messaggio: usa `{command}`'
                    },
                    autodelete: 'Auto eliminazione: **{time}**',
                    autodelete_never: 'mai'
                },
                button: {
                    message: 'Modifica messaggio',
                    autodelete: 'Imposta Eliminazione Automatica'
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'Imposta Canale Abbandonatore'
                    },
                    message: {
                        title: 'Messaggio',
                        name: 'Messaggio Abbandonatore'
                    },
                    autodelete: {
                        title: 'Eliminazione Automatica',
                        name: 'Eliminazione Automatica',
                        description: 'Il messaggio Abbandonatore, verrà eliminato dopo questo tempo.\nConsigliamo di mantenere questo tempo breve (solo pochi secondi).\nEsempio: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Configura Ticket',
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
                edit: 'Imposta canale dei Log',
                set: 'Cambia il Canale Log'
            },
            transcript: {
                disable: 'Disabilita Trascritti',
                enable: 'Salva trascrizioni'
            },
            openReason: {
                disable: 'Disabilita Motivo Apertura',
                enable: 'Abilita Motivo Apertura'
            },
            leaveAutoclose: {
                disable: 'Disabilita Chiusura Automatica ad abbandono',
                enable: 'Abilita Chiusura Automatica ad abbandono'
            },
            embeds: 'Cambia Embed',
            naming: {
                title: 'Imposta un tipo di nome',
                current: 'Attuale',
                option: {
                    username: 'Nomeutente',
                    userid: 'Id Utente',
                    random: 'Id Casuale'
                }
            }
        },
        page: {
            category: {
                title: 'Categoria',
                name: 'Categoria Ticket'
            },
            role: {
                title: 'Ruolo dello Staff',
                name: 'Ruolo Staff-Ticket'
            },
            descriptions: {
                title: 'Testi',
                name: 'Descrizione Ticket',
                button: {
                    texts: 'Anteprima Ticket',
                    topic: 'Cambia Argomento',
                    title: 'Cambia il titolo',
                    unclaimed: 'Modifica Embed non reclamato',
                    claimed: 'Modifica Embed reclamato'
                },
                page: {
                    title: {
                        title: 'Titolo',
                        name: 'Titolo Embed Ticket'
                    },
                    unclaimed: {
                        title: 'Non reclamato',
                        name: 'Descrizione Ticket non reclamato'
                    },
                    claimed: {
                        title: 'Reclamato',
                        name: 'Descrizione Ticket reclamato'
                    },
                    topic: {
                        title: 'Tema',
                        name: 'Tema Ticket'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'Logging Ticket'
            }
        }
    },
    moderation: {
        title: 'Configura Moderazione',
        option: {
            role: 'Ruolo di bypass: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Elenco esclusi',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Link',
            antiSpam: 'Anti-spam',
            bypassRole: {
                edit: 'Modifica ruolo bypass',
                set: 'Imposta ruolo bypass'
            },
            logging: {
                edit: 'Modifica Canale Logging',
                set: 'Imposta Canale Logging'
            }
        },
        page: {
            role: {
                title: 'Ruolo di bypass',
                name: 'Ruolo di bypass'
            },
            logging: {
                title: 'Logging',
                name: 'Log-Moderazione'
            },
            filter: {
                title: 'Filtro',
                name: 'Filtro Moderazione',
                option: {
                    message: 'Messaggio: {message}',
                    actions: 'Azioni: {types}',
                    actionType: {
                        reply: 'risposta',
                        delete: 'elimina',
                        timeout: 'timeout'
                    },
                    total: 'Totale: **{amount} parole**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Cancella lista di parole',
                    editWords: 'Modifica elenco di parole',
                    message: 'Modifica messaggio',
                    timeout: 'Durata del timeout',
                    actions: {
                        title: 'Scegli un\'azione',
                        selected: 'Selezionato',
                        option: {
                            reply: 'Risposta',
                            delete: 'Elimina',
                            timeout: 'Timeout'
                        }
                    },
                    export: 'Mostra elenco di parole'
                },
                page: {
                    delete: {
                        title: 'Cancella lista di parole',
                        description: 'Sei sicuro di voler cancellare tutte le parole in blacklist?',
                        page: {
                            confirm: {
                                title: 'Confermato',
                                description: 'Eliminato tutte le parole della blacklist con successo! Ora puoi scartare questo messaggio.'
                            },
                            abord: {
                                title: 'Abortito',
                                description: 'Nessuna azione intrapresa! Ora puoi scartare questo messaggio.'
                            }
                        }
                    },
                    words: {
                        title: 'Parole',
                        name: 'Parole nella Blacklist',
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