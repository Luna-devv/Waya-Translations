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
        disclaimer: 'This does NOT apply to "/" (Slash)-Commands'
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
            set: '{what} ist somit nun **{data}**',
            removed: '{what} wurde erfolgreich entfernt.',
            fail: '{what} existiert nicht in diesem Server..',
            lengthFail: '{what} ist länger als {max} Buchstaben! ({length} Buchstaben, {relative} zu viel)',
            otherLengthFail: '{what} ist kürzer als {min} Buchstaben! ({length} Buchstaben, {relative} zu wenig)',
            numberFail: '{what} ist keine Zahl zwischen {a} und {b}!',
            roleFail: 'Diese Rolle wird entweder von Discord selber oder wird von einem Bot verwaltet.'
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
                    }
                },
                button: { message: 'Nachricht Bearbeiten' },
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
                    }
                },
                button: { message: 'Nachricht Bearbeiten' },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Verabschiedungskanal'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'Verabschiedungsnachricht'
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
                    topic: 'Thema Bearbeiten',
                    unclaimed: 'Unclaim Text Bearbeiten',
                    claimed: 'Claim Text Bearbeiten'
                },
                page: {
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
                title: 'Logging',
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
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