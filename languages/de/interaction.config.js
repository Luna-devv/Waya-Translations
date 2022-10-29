/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Validiere Daten...',
    notAllowed: 'Du kannst mit diesem Menü nicht interagieren.',
    prefix: {
        name: 'Prefix',
        set: 'Servers Prefix erfolgreich auf {prefix} geändert!',
        noSpace: 'Bitte beachte, dass innerhalb des Prefixes keine Leerzeichen verwenden werden können! Dies ist nur am Ende möglich.',
        disclaimer: 'Das gilt NICHT für "/" (Slash)-Commands'
    },
    global: {
        // will be the same everywhere
        none: 'keinen',
        useButtons: 'Editiere eine Option mit einem Button unten.',
        developer: {
            bypass: 'Dir fehlen die `MANAGE_GUILD` Berechtigungen, um auf dieses Menü zuzugreifen..\nWillst du dennoch fortfahren?',
            choice: {
                access: 'Ja, ich will',
                abord: 'Nein danke'
            },
            notice: 'Pass auf! - entwickler Modus aktive'
        },
        permissions: 'Fehlt: {perms}',
        placeholders: 'Platzhalter',
        await: {
            channel: 'Erwähne einen Channel oder sende die Id in den Chat.\nSchreibe `none`, um den Channel zu entfernen.',
            category: 'Erwähne eine Kategorie oder sende die Id in den Chat.\nSchreibe `none`, um die Kategorie zu entfernen.',
            role: 'Erwähne eine Rolle oder sende die Id in den Chat.\nSchreibe `none`, um die Rolle zu entfernen.',
            message: 'Sende eine Nachricht, die als {what} benutzt werden soll.',
            emote: 'Sende ein Emoji, welches als {what} benutzt werden soll.'
        },
        success: {
            set: 'Erfolgreich {what} auf **{data}** gesetzt.',
            add: 'Successfully add {what} to **{data}**.',
            setCodeblock: '{what} ist somit nun {data}',
            removed: '{what} wurde erfolgreich entfernt.',
            remove: 'Successfully remove {what} from **{data}**.',
            fail: '{what} existiert nicht in diesem Server..',
            lengthFail: '{what} ist länger als {max} Buchstaben! ({length} Buchstaben, {relative} zu viel)',
            otherLengthFail: '{what} ist kürzer als {min} Buchstaben! ({length} Buchstaben, {relative} zu wenig)',
            numberFail: '{what} ist keine Zahl zwischen {a} und {b}!',
            roleFail: 'Diese Rolle wird entweder von Discord selber oder wird von einem Bot verwaltet.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Message Web Edit',
            description: 'Open [this Website]({url}) to start editing the message & embed.',
            open: 'Open Web Edit'
        },
        type: {
            text: 'Text Kanal',
            category: 'Kategorie',
            role: 'Rolle',
            emoji: 'Emoji'
        },
        state: {
            enabled: 'Aktiv',
            disabled: 'Inaktiv'
        },
        option: {
            required: 'Erforderlich',
            optional: 'Optional'
        },
        button: {
            back: 'Zurück',
            disable: 'Deaktivieren',
            enable: 'Aktivieren',
            channel: {
                set: 'Kanal Einrichten',
                edit: 'Kanal Bearbeiten'
            },
            category: {
                set: 'Kategorie Setzen',
                edit: 'Kategorie Bearbeiten'
            },
            role: {
                set: 'Rolle Setzen',
                edit: 'Rolle Bearbeiten'
            },
            mode: {
                analyst: 'Daten reich',
                cozy: 'Übersichtlich'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'dupaw Aktivieren',
                disable: 'dupaw Deaktivieren'
            }
        }
    },
    main: {
        title: '{name} Konfigurieren',
        option: {
            premium: {
                text: 'Enterprise Level {tier}',
                buy: 'Enterprise Kaufen'
            }
        },
        button: {
            logging: 'Loggen',
            tickets: 'Tickets',
            moderation: 'Moderation',
            starboard: 'Starboard',
            misc: 'Sonstiges',
            followNews: 'News Folgen',
            staff: 'Server Verwalten',
            exit: 'Speichern',
            help: 'Support'
        }
    },
    logging: {
        title: 'Logging Konfigurieren',
        button: {
            messages: 'Nachrichten',
            joins: 'Beitretungen',
            welcomer: 'Begrüßung',
            byer: 'Verabschiedungen'
        },
        page: {
            messages: {
                title: 'Nachrichten',
                name: 'Nachrichten Loggen',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Modus: {mode}'
                },
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Nachrichten Logging Kanal'
                    }
                }
            },
            joins: {
                title: 'Beitretungen',
                name: 'Beitretungen Loggen',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Modus: {mode}',
                    filter: 'Filter: {state}'
                },
                button: { filter: 'Filter' },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Beitretungen Loggen'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Alterstrigger: **{trigger} tage**',
                            punishment: 'Bestrafung: **{type}**',
                            punishmentType: {
                                ban: 'User Bannen',
                                kick: 'User Kicken',
                                timeout: 'User Muten',
                                role: '{role} Rolle zuweisen',
                                none: 'keine'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'DM Benachrichtigung deaktivieren',
                                enable: 'DM Benachrichtigung aktiviert'
                            },
                            trigger: {
                                set: 'Alterstrigger setzen',
                                edit: 'Alterstrigger bearbeiten'
                            },
                            punishment: {
                                title: 'Bestrafung setzten',
                                current: 'Aktuell',
                                option: {
                                    ban: 'User Bannen',
                                    kick: 'User Kicken',
                                    timeout: 'User Muten',
                                    role: 'Rolle zuweisen'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Trigger',
                                name: 'Alters Voraussetzung',
                                description: 'Wenn ein Account jünger als dieses Alter ist, dann wird dieser Bestraft!\nEingabe muss zwischen 0 und 28 Tagen sein.'
                            },
                            role: {
                                title: 'Rolle',
                                name: 'Bestrafungs Rolle'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Willkommenheißer',
                name: 'Willkommenheißer',
                option: {
                    channel: 'Kanal: {channel}',
                    role: 'Rolle: {role}',
                    message: {
                        message: 'Nachricht: {message}',
                        command: 'Nachricht: Benutze `{command}`'
                    },
                    pings: 'Pings: {channels}',
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                button: {
                    message: 'Nachricht Bearbeiten',
                    pings: 'Edit Ping Channels',
                    autodelete: 'Set Autodelete'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Begrüßungskanal'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'Begrüßungsnachricht'
                    },
                    role: {
                        title: 'Rolle',
                        name: 'Beitretungsrolle'
                    },
                    pings: {
                        title: 'Pings',
                        name: 'Pings list',
                        description: 'Mention a Channel or paste the Channel ID into the chat.\nPrefix the message with `+` to add or `-` to remove Channels.\nYou can send multiple Channels seperated with a space.\nType `none` to remove all Channels.',
                        missingPrefix: 'The message must be prefixed with `+` to add or `-` to remove Channels.'
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'Auto Delete',
                        description: 'The Welcomer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    }
                }
            },
            byer: {
                title: 'Verabschieder',
                name: 'Verabschieder',
                option: {
                    channel: 'Kanal: {channel}',
                    message: {
                        message: 'Nachricht: {message}',
                        command: 'Nachricht: Benutze `{command}`'
                    },
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                button: {
                    message: 'Nachricht Bearbeiten',
                    autodelete: 'Set Autodelete'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Verabschiedungskanal'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'Verabschiedungsnachricht'
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
        title: 'Tickets Konfigurieren',
        option: {
            channel: 'Kategorie: {channel}',
            staff: 'Staff: {role}',
            logging: 'Logging: {channel}',
            forceReason: 'Grund: {state}',
            naming: 'Benennung: {type}',
            namingType: {
                username: 'Benutzername',
                userid: 'UserId',
                random: 'Zufällig'
            }
        },
        button: {
            forceReason: {
                enable: 'Grund Erzwingen',
                disable: 'Optionaler Grund'
            },
            logging: {
                disable: 'Logging Deaktivieren',
                enable: 'Logging Aktivieren'
            },
            transcript: {
                disable: 'Transkripts Deaktivieren',
                enable: 'Transkripts Speichern'
            },
            openReason: {
                disable: 'Öffnungsgrund Deaktivieren',
                enable: 'Öffnungsgrund Aktivieren'
            },
            leaveAutoclose: {
                disable: 'Deaktivere Member Leave Auto-Schließen',
                enable: 'Aktiviere Member Leave Auto-Schließen'
            },
            texts: 'Texte Bearbeiten',
            naming: {
                title: 'Setze einen Benennung Typ',
                current: 'Aktuell',
                option: {
                    username: 'Benutzername',
                    userid: 'userId',
                    random: 'Zufällig'
                }
            }
        },
        page: {
            category: {
                title: 'Kategorie',
                name: 'Ticket Kategorie'
            },
            role: {
                title: 'Staff Rolle',
                name: 'Ticket Staff Rolle'
            },
            descriptions: {
                title: 'Texte',
                name: 'Ticket Beschreibungen',
                button: {
                    texts: 'Vorschau Ticket',
                    topic: 'Topic Bearbeiten',
                    title: 'Titel ändern',
                    unclaimed: 'Unclaim Text Bearbeiten',
                    claimed: 'Claim Text Bearbeiten'
                },
                page: {
                    title: {
                        title: 'Titel',
                        name: 'Ticket Embed Titel'
                    },
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket Beschreibung'
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket Beschreibung'
                    },
                    topic: {
                        title: 'Thema',
                        name: 'Ticket Thema'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'Tickets Loggen'
            }
        }
    },
    moderation: {
        title: 'Moderation Konfigurieren',
        option: {
            role: 'Umgehungsrolle: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Links',
            antiSpam: 'Anti Spam',
            bypassRole: {
                edit: 'Umgehungsrolle Bearbeiten',
                set: 'Umgehungsrolle Setzten'
            },
            logging: {
                edit: 'Logging Kanal Bearbeiten',
                set: 'Logging Kanal Setzten'
            }
        },
        page: {
            role: {
                title: 'Umgehungsrolle',
                name: 'Umgehungsrolle'
            },
            logging: {
                title: 'Loggen',
                name: 'Moderationslogs'
            },
            filter: {
                title: 'Filter',
                name: 'Moderation Filter',
                option: {
                    message: 'Nachricht: {message}',
                    actions: 'Aktionen: {types}',
                    actionType: {
                        reply: 'nachricht',
                        delete: 'löschen',
                        timeout: 'muten'
                    },
                    total: 'Insgesamt: **{amount} Wörter**',
                    timeout: 'Stumm: {time}'
                },
                button: {
                    deleteAll: 'Wortliste Leeren',
                    editWords: 'Wörterliste Bearbeiten',
                    message: 'Nachricht Bearbeiten',
                    timeout: 'Stumm Dauer',
                    actions: {
                        title: 'Aktionen Verwalten',
                        selected: 'Ausgewählt',
                        option: {
                            reply: 'Nachricht',
                            delete: 'Löschen',
                            timeout: 'Muten'
                        }
                    }
                },
                page: {
                    delete: {
                        title: 'Wortliste Leeren',
                        description: 'Bist du sicher, dass du alle Blacklisted Wörter löschen willst?',
                        page: {
                            confirm: {
                                title: 'Bestätigt',
                                description: 'Alle Blacklisted Wörter wurden erfolgreich gelöscht! Du kannst diese Nachricht verwerfen.'
                            },
                            abord: {
                                title: 'Abgebrochen',
                                description: 'Es wurden keine Aktionen durchgeführt! Du kannst diese Nachricht verwerfen.'
                            }
                        }
                    },
                    words: {
                        title: 'Wörter',
                        name: 'Gespenstes Wort',
                        awaitMessage: 'Sende eine oder mehrere Wörter, die auf die Blacklist kommen sollen.\nBitte **nur** Buchstaben zwischen `A-Z` verwenden\num die Wörter voneinander zu trennen, benutze `, `.',
                        bulkAdded: 'Erfolgreich {amout} neue Wörter auf die Blacklist hinzugefügt.',
                        added: 'Erfolgreich "`{word}`" als ein neues Wort auf der Blacklist hinzugefügt.',
                        removed: 'Erfolgreich das Wort "`{word}`" von der Blacklist entfernt.'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'Blacklisted Wort Nachricht'
                    },
                    timeout: {
                        title: 'Mute Dauer',
                        name: 'Mute Dauer',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Anti Scam Moderation',
                option: {
                    message: 'Nachricht: {message}',
                    actions: 'Aktionen: {types}',
                    actionType: {
                        reply: 'nachricht',
                        delete: 'löschen',
                        timeout: 'muten'
                    },
                    timeout: 'Stumm: {time}'
                },
                button: {
                    message: 'Nachricht bearbeiten',
                    timeout: 'Stumm Dauer',
                    actions: {
                        title: 'Aktionen Verwalten',
                        selected: 'Ausgewählt',
                        option: {
                            reply: 'Nachricht',
                            delete: 'Löschen',
                            timeout: 'Muten'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Nachricht',
                        name: 'Anti Scam Antwort'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'Stumm Dauer',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Links',
                name: 'Anti Link Moderation',
                option: {
                    message: 'Nachricht: {message}',
                    actions: 'Aktionen: {types}',
                    actionType: {
                        reply: 'nachricht',
                        delete: 'löschen',
                        timeout: 'muten'
                    },
                    timeout: 'Stumm: {time}'
                },
                button: {
                    media: {
                        disable: 'Medien Deaktivieren',
                        enable: 'Medien Aktivieren'
                    },
                    message: 'Nachricht Bearbeiten',
                    timeout: 'Stumm Dauer',
                    actions: {
                        title: 'Aktionen Verwalten',
                        selected: 'Ausgewählt',
                        option: {
                            reply: 'Nachricht',
                            delete: 'Löschen',
                            timeout: 'Muten'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Nachricht',
                        name: 'Anti Link Antwort'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'Stumm Dauer',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Anti Spam Moderation',
                option: {
                    message: 'Nachricht: {message}',
                    actions: 'Aktionen: {types}',
                    threshold: 'Schwelle: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'nachricht',
                        timeout: 'muten',
                        purge: 'säubern'
                    },
                    timeout: 'Stumm: {time}'
                },
                button: {
                    threshold: 'Schwelle Bearbeiten',
                    message: 'Nachricht Bearbeiten',
                    timeout: 'Stumm Dauer',
                    actions: {
                        title: 'Aktionen Verwalten',
                        selected: 'Ausgewählt',
                        option: {
                            reply: 'Nachricht',
                            timeout: 'Muten',
                            purge: 'Säubern'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Nachricht',
                        name: 'Anti Spam Nachricht'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'Stumm Dauer',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Schwelle',
                        name: 'spam Schwellenwert',
                        description: 'Ich werde alles als Spam zählen, wenn diese Zahl inerhalb von 5 Sekunden erreicht wird!\nUnput muss zwichen 1 und 99 sein.'
                    }
                }
            }
        }
    },
    starboard: {
        title: 'Starboard Konfigurieren',
        button: {
            emoji: 'Emoji Bearbeiten',
            color: 'Farbe Bearbeiten',
            count: 'Reaktionen Bearbeiten',
            nsfw: {
                disable: 'NSFW Deaktivieren',
                enable: 'NSFW Aktivieren'
            },
            bots: {
                disable: 'Bots Deaktivieren',
                enable: 'Bots Aktivieren'
            },
            selfReact: {
                disable: 'Selbst-Reaktionen Deaktivieren',
                enable: 'Selbst-Reaktionen Aktivieren'
            },
            reply: {
                disable: 'Originale Nachricht Verstecken',
                enable: 'Originale Nachricht Anzeigen'
            },
            edits: {
                disable: 'Bearbeitungen verbieten',
                enable: 'Bearbeiten zulassen'
            },
            logging: {
                disable: 'Logging Deaktivieren',
                enable: 'Logging Aktivieren'
            },
            blacklist: {
                set: 'Blacklist Rolle Setzten',
                change: 'Blacklist Rolle Bearbeiten'
            },
            display: {
                title: 'Anzeigestil Festlegen',
                selected: 'Ausgewählt',
                option: {
                    tag: 'Tag',
                    username: 'Benutzername',
                    nickname: 'Nickname',
                    guildProfile: 'Server Profil'
                }
            }
        },
        option: {
            channel: 'Kanal: {channel}',
            color: 'Farbe: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Reaktionen: {count}',
            blacklistedRole: 'Blacklisted: {role}',
            display: 'Stiel: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Benutzername',
                nickname: 'Nickname',
                guildProfile: 'Server Profil'
            }
        },
        page: {
            channel: {
                title: 'Kanal',
                name: 'Starboard Kanal'
            },
            emoji: {
                title: 'Emoji',
                name: 'Starboard Emoji'
            },
            color: {
                title: 'Farbe',
                name: 'Starboard Farbe',
                description: 'Füge einen HEX Farbcode in den Chat ein. \nEinen HEX Farbcode kannst du hier finden [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'Dieser Farbcode ist keine gültige HEX Farbe.\nEinen HEX Farbcode kannst du hier finden [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Reaktionen',
                name: 'erforderliche Reaktionen',
                description: 'Sende eine gültige Zahl, um die Minimum-Anzahl an {emote} Reaktionen festzulegen.'
            },
            blacklistedRole: {
                title: 'Blacklist Rolle',
                name: 'Blacklisted Rolle'
            }
        }
    },
    misc: {
        title: 'Sonstiges Konfigurieren',
        button: {
            embedMessages: 'Nachrichten Einbetten',
            levelRoles: 'Level Rollen'
        },
        page: {
            embedMessages: {
                title: 'Nachrichten Einbetten',
                description: '**Was ist das?**\nWenn ein Nachrichtenlink gesendet wird, wird {name} mit dem Inhalt dieser Nachricht antworten!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Erlaube anderen Serverm Nachrichten von hier einzubetten',
                        disable: 'Verbiete anderen Serverm Nachrichten von hier einzubetten'
                    },
                    color: 'Wähle eine Farbe für das Embed',
                    display: {
                        title: 'Wählen Sie einen Autoranzeigestil',
                        selected: 'Ausgewählt',
                        option: {
                            message: 'Nachrichteninhalt',
                            author: 'Autor Feld',
                            footer: 'Footer Feld'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Level Rollen',
                option: {
                    roles: 'Rollen: **{count}/{max}**',
                    roles_upsell: 'Abonniere für +{count}',
                    channel: 'Kanal: {channel}',
                    channel_none: 'nachrichten kanal',
                    message: 'Nachricht: {message}'
                },
                button: {
                    message: 'Nachricht Bearbeiten',
                    addrole: 'Level Hinzufügen',
                    select: {
                        title: 'Wähle einen Trigger, den du bearbeiten möchtest',
                        editing: 'Bearbeitung',
                        option: {
                            name: '{messages} nachrichten',
                            description: 'Rolle: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Nachricht',
                        name: 'Level Up nachricht'
                    },
                    channel: {
                        title: 'Kanal',
                        name: 'Level Up Kanal'
                    },
                    addRole: {
                        title: 'Neue Level Rolle',
                        limit: 'Du hast das Serverlimit von **{count}/{max} Level Rollen erreicht**!',
                        alreadExists: 'Eine Belohnung Rolle für **{messages} Nachrichten** wurde bereits mit der **{role} Rolle gesetzt.',
                        success: 'Diese Level Rolle wurde erfolgreich hinzugefügt. Jeder User, der **{messages} Nachrichten erreicht** erhält jetzt die **{role} Rolle**!',
                        page: {
                            messageCount: {
                                title: 'Nachrichtenanzahl',
                                name: 'erforderliche Nachrichtenanzahl',
                                description: 'Senden Sie eine Nummer, die der User als Nachrichtenanzahl benötigt, um die ausgewählte Rolle zu erhalten.'
                            },
                            role: {
                                title: 'Rolle',
                                name: 'geschenk Rolle'
                            }
                        }
                    },
                    editRole: {
                        title: 'Level Rolle Bearbeiten',
                        option: {
                            role: 'Rolle: {role}',
                            messages: 'Nachrichten: {messages}'
                        },
                        button: {
                            messages: 'Nachrichtenanzahl ändern',
                            role: 'Rolle ändern',
                            delete: 'Löschen'
                        }
                    }
                }
            }
        }
    },
    followNews: {
        title: 'News Updates Folgen',
        name: 'News Folgen'
    },
    staff: {
        title: '{name} Verwalten',
        option: { premium: 'Enterprise: {tier}' },
        button: {
            premium: 'Enterprise Stufe Bearbeiten',
            data: 'Daten Exportieren'
        },
        page: {
            data: {
                title: 'Datenexport',
                message: 'Die Daten von {name} werden hier drunter angezeigt.',
                error: 'Nachricht kann nicht gesendet werden :/'
            },
            premium: {
                title: 'Enterprise Konfigurieren',
                option: { tier: 'Aktuelle Stufe: {tier}' },
                button: { tier: 'Stufe {tier}' }
            }
        }
    },
    exit: { title: 'Einstellungen gespeichert und Config Menü verlassen.' }
};