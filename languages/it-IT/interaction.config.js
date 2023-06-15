/*
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
        upsell: 'Iscriviti per ricevere {count}+',
        permissions: 'Mancanti: {perms}',
        placeholders: 'Segnaposti',
        await: {
            channel: 'Menziona un canale o incolla l\'Id del canale nella chat.\nDigita {string} per rimuovere il canale.',
            category: 'Menziona una categoria o incolla l\'Id della categoria nella chat.\nDigita {string} per rimuovere la categoria.',
            role: 'Menziona un ruolo o incolla l\'Id del ruolo nella chat.\nDigita {string} per rimuovere il ruolo.',
            message: 'Invia un messaggio che dovrebbe essere usato come {what}.',
            emote: 'Invia un Emoji che dovrebbe essere usato come {what}.\nDigita {string} per rimuovere le emoji.',
            color: 'Invia un codice esadecimale che dovrebbe essere utilizzato per {what}. Ottieni un codice valido su {url}.',
            patient: 'Abilitare questo potrebbe richiedere alcuni secondi, attendere prego..'
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
            roleFail: 'Questo ruolo è gestibile solo da Discord o appartiene a un utente bot.',
            colorFail: 'Non è stato fornito alcun codice esadecimale valido. Ottieni un codice valido su {url}.',
            emoteFail: 'Non hai inviato nessun emoji valido. Sono supportati solo emoji personalizzati e emoji predefiniti.'
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
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Livello Abbonamento {tier}',
                buy: 'Compra un Abbonamento'
            }
        },
        button: {
            logging: 'Logging',
            fun: 'Fun',
            tickets: 'Ticket',
            moderation: 'Moderazione',
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
            expressions: 'Sticker/Emojis',
            welcomer: 'Accoglienza',
            byer: 'Andata'
        },
        page: {
            messages: {
                title: 'Messaggi',
                name: 'message logging',
                option: {
                    channel: 'Canale: {channel}',
                    mode: 'Modalità: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Abilita Snipe',
                        disable: 'Disabilita Snipe',
                        timeout: 'cambia la durata della snipe pulita per messaggio'
                    }
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'message logging channel'
                    }
                }
            },
            expressions: {
                title: 'Expressions',
                name: 'expressions logging',
                option: {
                    channel: 'Channel: {channel}',
                    mode: 'Mode: {mode}'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'expressions logging channel'
                    }
                }
            },
            joins: {
                title: 'Joins',
                name: 'join logging',
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
                        name: 'join logging'
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
                                name: 'CAPTCHA verified role'
                            },
                            unverifiedrole: {
                                title: 'Ruolo Non Verificato',
                                name: 'CAPTCHA unverified role'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Ruolo',
                                name: 'ruolo CAPTCHA fallito'
                            },
                            color: {
                                title: 'Colore sfondo',
                                name: 'page color',
                                description: 'Incolla un colore Hex nella chat che vuoi usare.\nTi consigliamo di usare un colore vicino al nero con saturazione molto alta.\nNota che il colore sul Passaporto sarà sempre più luminoso.\nOttieni un codice colore Hex da [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Il codice colore non è un colore Hex valido.\nOttieni un codice colore Hex da [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Benvenutore',
                name: 'welcomer',
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
                    afterleaveXautodelete: 'Non consigliamo di utilizzare **eliminazione automatica** ed **Eliminazione dopo abbandono** contemporaneamente',
                    embedXcard: 'Nella scheda incorporata sovrascrive l\'immagine incorporata personalizzata',
                    channelMissmatch: 'Canale del webhook onda è diverso dal messaggio di benvenuto'
                },
                button: {
                    nextpage: 'Pagina Successiva ({cur}/{total})',
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
                    dm: 'Messaggio DM',
                    afterleave_webedit: 'Editore Embed dopo l\'abbandono',
                    wave: 'Tasto Onda',
                    reactions: 'Reazioni'
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Ruolo',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Eliminazione Automatica',
                        name: 'auto delete',
                        description: 'Il messaggio Benvenutore, verrà eliminato dopo questo tempo.\nConsigliamo di mantenere questo tempo breve (solo pochi secondi).\nEsempio: `1m 3s`'
                    },
                    dm: { button: { disable: 'Disabilita il messaggio DM' } },
                    reactions: {
                        title: 'Reazioni',
                        option: {
                            welcomer: 'Reazioni Messaggio di Benvenuto: {emotes}',
                            firstmessage: 'Reazioni al primo messaggio: {emotes}'
                        },
                        button: {
                            welcomer: 'Messaggio di Benvenuto',
                            firstmessage: 'Primo messaggio di partecipazione'
                        },
                        page: {
                            welcomer: {
                                title: 'Benvenutore',
                                name: 'benvenuto reazione automatica'
                            },
                            firstmessage: {
                                title: 'Primo Messaggio',
                                name: 'reazione automatica'
                            }
                        }
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
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Sfondo',
                                name: 'card background',
                                description: 'Il link deve essere un **URL di immagine diretta**, deve anche essere un link di tipo {scheme}.\nConsigliamo un rapporto di {ratio} e una risoluzione minima di {resolution}.'
                            },
                            text: {
                                title: 'Text',
                                page: {
                                    color: {
                                        title: 'Color',
                                        name: 'text color'
                                    }
                                }
                            }
                        }
                    },
                    dm: { title: 'Messaggio diretto' },
                    wavebtn: {
                        title: 'Onda per dire ciao',
                        option: {
                            send: 'Invia: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Label: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Cambia Testo Pulsante',
                            ping: {
                                enable: 'Abilita Ping',
                                disable: 'Disabilita Ping'
                            },
                            type: {
                                title: 'Seleziona un tipo di risposta',
                                option: {
                                    '0': 'Adesivo Casuale',
                                    '1': 'Messaggio Personalizzato'
                                }
                            },
                            color: {
                                title: 'Seleziona un colore per il pulsante',
                                option: {
                                    blurple: 'Blu violetto',
                                    // You may leave that
                                    grey: 'Grigio',
                                    green: 'Verde',
                                    red: 'Rosso'
                                }
                            }
                        },
                        page: {
                            emoji: {
                                title: 'Emote',
                                name: 'button emote'
                            },
                            label: {
                                title: 'Label',
                                name: 'button text'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Abbandonatore',
                name: 'byer',
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
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Canale',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Messaggio',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Eliminazione Automatica',
                        name: 'auto delete',
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
            },
            position: 'Position: {type}',
            positionType: {
                top: 'At the top',
                bottom: 'On the bottom'
            }
        },
        button: {
            channelPosition: {
                top: 'Position: To top',
                bottom: 'Position: To bottom'
            },
            forceReason: {
                enable: 'Motivo forzato',
                disable: 'Motivo Opzionale'
            },
            logging: {
                set: 'Imposta Canale Logging',
                edit: 'Cambia il Canale Log'
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
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Ruolo dello Staff',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Testi',
                name: 'ticket descriptions',
                button: {
                    texts: 'Anteprima Ticket',
                    topic: 'Cambia Argomento',
                    unclaimed: 'Modifica Embed non reclamato',
                    claimed: 'Modifica Embed reclamato',
                    closeEmote: 'Change Close Emote',
                    claimEmote: 'Change Claim Emote'
                },
                page: {
                    topic: {
                        title: 'Tema',
                        name: 'tickets topic'
                    },
                    closeEmote: {
                        title: 'Close Button Emote',
                        name: 'close emote'
                    },
                    claimEmote: {
                        title: 'Claim Button Emote',
                        name: 'claim emote'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'ticket logging'
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
                name: 'bypass role'
            },
            logging: {
                title: 'Logging',
                name: 'moderation logs'
            },
            filter: {
                title: 'Filtro',
                name: 'moderation Filter',
                option: {
                    message: 'Messaggio: {message}',
                    total: 'Totale: **{amount} parole**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Cancella lista di parole',
                    editWords: 'Modifica elenco di parole',
                    message: 'Modifica messaggio',
                    timeout: 'Durata del timeout',
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
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'Aggiunto {amout} nuove parole alla blacklist con successo.',
                        added: 'Aggiunto con successo "`{word}`" come nuova parola nella blacklist.',
                        removed: 'Rimosso con successo "`{word}`" come parola dalla blacklist.'
                    },
                    message: {
                        title: 'Messaggio',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Durata del timeout',
                        name: 'timeout duration',
                        description: 'L\'utente sarà impostato su Timeout per questa durata!\nL\'input deve essere inferiore a 18 giorni.\nEsempio: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'moderation anti scam',
                option: {
                    message: 'Messaggio: {message}',
                    actions: 'Azioni: {types}',
                    actionType: {
                        reply: 'risposta',
                        delete: 'elimina',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
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
                    }
                },
                page: {
                    message: {
                        title: 'Messaggio',
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Durata del timeout',
                        name: 'timeout duration',
                        description: 'L\'utente sarà impostato su Timeout per questa durata!\nL\'input deve essere inferiore a 18 giorni.\nEsempio: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'moderation anti link',
                option: {
                    message: 'Messaggio: {message}',
                    actions: 'Azioni: {types}',
                    actionType: {
                        reply: 'risposta',
                        delete: 'elimina',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Disattiva Media',
                        enable: 'Consenti Media'
                    },
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
                    }
                },
                page: {
                    message: {
                        title: 'Messaggio',
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Durata del timeout',
                        name: 'timeout duration',
                        description: 'L\'utente sarà impostato su Timeout per questa durata!\nL\'input deve essere inferiore a 18 giorni.\nEsempio: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
                option: {
                    message: 'Messaggio: {message}',
                    actions: 'Azioni: {types}',
                    threshold: 'Soglia: **{threshold}messaggi/5s**',
                    actionType: {
                        reply: 'risposta',
                        timeout: 'timeout',
                        purge: 'elimina'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Modifica soglia',
                    message: 'Modifica messaggio',
                    timeout: 'Durata del timeout',
                    actions: {
                        title: 'Scegli un\'azione',
                        selected: 'Selezionato',
                        option: {
                            reply: 'Risposta',
                            timeout: 'Timeout',
                            purge: 'Elimina'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Messaggio',
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Durata del timeout',
                        name: 'timeout duration',
                        description: 'L\'utente sarà impostato su Timeout per questa durata!\nL\'input deve essere inferiore a 18 giorni.\nEsempio: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Soglia',
                        name: 'soglia spam',
                        description: 'Lo considererò come spam, quando questo importo viene raggiunto entro 5 secondi!\nInput deve essere compreso tra 1 e 99.'
                    }
                }
            }
        }
    },
    fun: {
        title: 'Configure Fun',
        button: {
            starboard: 'Starboard',
            counting: 'Counting'
        }
    },
    starboard: {
        title: 'Configura Starboard',
        button: {
            emoji: 'Cambia Emoji',
            color: 'Cambia colore',
            count: 'Cambia Contatore',
            nsfw: {
                disable: 'Disattiva NSFW',
                enable: 'Attiva NSFW'
            },
            bots: {
                disable: 'Disabilita I Bot',
                enable: 'Abilita Bot'
            },
            selfReact: {
                disable: 'Disabilita Reazione Di Sé',
                enable: 'Abilita Reazione Di Sé'
            },
            reply: {
                disable: 'Nascondi Risposte a',
                enable: 'Mostra risposte a'
            },
            edits: {
                disable: 'Vieta Modifiche',
                enable: 'Permetti Modifiche'
            },
            logging: {
                disable: 'Disabilita Logging',
                enable: 'Abilita Logging'
            },
            blacklist: {
                set: 'Imposta Ruolo Blacklist',
                change: 'Modifica Ruolo Blacklist'
            },
            blacklistedChannels: 'Modifica Canale Blacklist',
            delete: {
                disable: 'Disabilita Elimina <{reactions} Reazioni',
                enable: 'Abilita Elimina <{reactions} Reazioni'
            },
            display: {
                title: 'Imposta uno stile di visualizzazione',
                selected: 'Selezionato',
                option: {
                    tag: 'Tag',
                    username: 'Nomeutente',
                    nickname: 'Soprannome',
                    guildProfile: 'Profilo Gilda'
                }
            }
        },
        option: {
            channel: 'Canale: {channel}',
            color: 'Colore: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Conto: {count}',
            blacklistedRole: 'Blacklist: {role}',
            display: 'Visualizza: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Nomeutente',
                nickname: 'Soprannome',
                guildProfile: 'Profilo Gilda'
            }
        },
        page: {
            channel: {
                title: 'Canale',
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'starboard emoji'
            },
            color: {
                title: 'Colore',
                name: 'starboard color'
            },
            count: {
                title: 'Conto',
                name: 'requierd count',
                description: 'Invia un numero per impostare il requisito minimo di reazioni - {emote}.'
            },
            blacklistedRole: {
                title: 'Ruolo/i Blacklist',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Canale/i Blacklist',
                name: 'blacklist channel list',
                description: 'Menziona un canale / categoria o incolla l\'ID del canale nella chat.\nPrefissa il messaggio con `+` per aggiungere o `-` per rimuovere i canali.\nPuoi inviare più canali separati da uno spazio.\nDigita `none` per rimuovere tutti i canali.',
                missingPrefix: 'Il messaggio deve essere prefissato con `+` per aggiungere o `-` per rimuovere i canali.'
            }
        }
    },
    counting: {
        title: 'Configure Counting',
        option: {
            channel: 'Channel: {channel}',
            emojis: 'Emojis: {emojis}'
        },
        button: {
            reset: {
                enable: 'Reset on fail',
                disable: 'Don\'t reset on fail'
            },
            customSuccessEmote: 'Correct Emote',
            customFailEmote: 'Error Emote'
        },
        page: {
            channel: {
                title: 'Channel',
                name: 'counting channel'
            },
            successEmoji: {
                title: 'Correct Emoji',
                name: 'success emoji'
            },
            failEmoji: {
                title: 'Wrong Emoji',
                name: 'fail emoji'
            }
        }
    },
    misc: {
        title: 'Configura Varie',
        button: {
            embedMessages: 'Messaggi embed',
            levelRoles: 'Ruoli di Livello',
            leaderboards: 'Classifiche',
            stickymessages: 'Messaggi Adesivi'
        },
        page: {
            embedMessages: {
                title: 'Messaggi embed',
                description: '**Cos\'è?**\nSe viene inviato un link al messaggio, {name} risponderà con il contenuto di quel messaggio!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Permetti ad altre Gilde di incorporare messaggi da qui',
                        disable: 'Vieta ad altre Gilde ti incorporare Messaggi da qui'
                    },
                    color: 'Scegli un colore per l\'Embed',
                    display: {
                        title: 'Scegli uno stile di visualizzazione autore',
                        selected: 'Selezionato',
                        option: {
                            message: 'Contenuto messaggio',
                            author: 'Campo Autore',
                            footer: 'Campo Footer'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Ruoli di Livello',
                option: {
                    roles: 'Ruoli: **{count}/{max}**',
                    channel: 'Canale: {channel}',
                    channel_none: 'canale messaggi',
                    message: 'Messaggio: {message}'
                },
                button: {
                    message: 'Modifica messaggio',
                    addrole: 'Aggiungi livello',
                    select: {
                        title: 'Scegli un ruolo di livello che vuoi modificare',
                        editing: 'Modificando',
                        option: {
                            name: '{messages} messaggi',
                            description: 'Ruolo: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Messaggio',
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Canale',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'Nuovo Ruolo Di Livello',
                        limit: 'Hai raggiunto il limite di **{count}/{max} ruoli di livello**!',
                        alreadExists: 'Un ruolo di ricompensa per **{messages} messaggi** è già stato impostato con il ruolo **{role}**.',
                        success: 'Aggiunto con successo questo ruolo di livello. Ogni utente che raggiunge **{messages} messaggi** riceverà il ruolo **{role} ** ora!',
                        page: {
                            messageCount: {
                                title: 'Conto Messaggi',
                                name: 'required message count',
                                description: 'Invia un numero, che l\'utente dovrà avere come nel conteggio dei messaggi per ottenere il ruolo selezionato.'
                            },
                            role: {
                                title: 'Ruolo',
                                name: 'ruolo presente'
                            }
                        }
                    },
                    editRole: {
                        title: 'Modifica Ruolo di Livello',
                        option: {
                            role: 'Ruolo: {role}',
                            messages: 'Messaggi: {messages}'
                        },
                        button: {
                            messages: 'Cambia Conteggio Messaggi',
                            role: 'Cambia ruolo',
                            delete: 'Elimina'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Classifiche',
                option: { blacklisted: 'Blacklist: {channels}' },
                button: {
                    blacklistedChannels: 'Modifica Canali nella Blacklist',
                    reset: {
                        disable: 'Non rimuovere i dati dei membri all\'andata',
                        enable: 'Resetta i dati dei membri all\'andata'
                    },
                    roles: 'Ruoli Ricompensati'
                },
                page: {
                    roles: {
                        title: 'Ruoli Migliori',
                        option: {
                            messages: 'Ruoli del messaggio: {roles}',
                            voiceminutes: 'Ruoli vocali: {roles}'
                        },
                        warnings: {
                            order: 'Si prega di selezionare il #1 ruolo prima, poi #2 e poi #3',
                            permsOrder: 'Si prega di controllare che tutti i ruoli siano sotto il ruolo {bot}'
                        },
                        button: {
                            messages: 'Top 3 ruoli di messaggio',
                            voiceminutes: 'Top 3 ruoli dei minuti vocali'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Messaggi Adesivi',
                button: {
                    timeout: 'Cambia la durata del timeout',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Segui aggiornamenti',
        name: 'follow news'
    },
    staff: {
        title: 'Gestisci {name}',
        option: { premium: 'Livello Abbonamento {tier}' },
        button: {
            premium: 'Cambia livello premium',
            data: 'Esporta Dati'
        },
        page: {
            data: {
                title: 'Esportazione dati',
                message: 'I dati da {name} sono visualizzati di seguito.',
                error: 'Non posso mandare il messaggio :/'
            },
            premium: {
                title: 'Configura Abbonamento',
                option: { tier: 'Livello attuale: {tier}' },
                button: { tier: 'Livello {tier}' }
            }
        }
    },
    exit: { title: 'Impostazioni salvate e menu di configurazione uscito.' }
};