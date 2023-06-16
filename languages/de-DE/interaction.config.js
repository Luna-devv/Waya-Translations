/*
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
        upsell: 'Abonniere für +{count}',
        permissions: 'Fehlt: {perms}',
        placeholders: 'Platzhalter',
        await: {
            channel: 'Erwähne einen Channel oder sende die Id in den Chat.\nSchreibe {string}, um den Channel zu entfernen.',
            category: 'Erwähne eine Kategorie oder sende die Id in den Chat.\nSchreibe {string}, um die Kategorie zu entfernen.',
            role: 'Erwähne eine Rolle oder sende die Id in den Chat.\nSchreibe {string}, um die Rolle zu entfernen.',
            message: 'Sende eine Nachricht, die als {what} benutzt werden soll.',
            emote: 'Sende einen Emoji, der als {what} verwendet werden soll.\nTippe {string}, um die Emotes zu entfernen.',
            color: 'Sende einen Hex-Farbcode, der für {what} verwendet werden soll. Bekomme einen gültigen Code von {url}.',
            patient: 'Aktivieren kann ein paar Sekunden dauern, bitte warten..'
        },
        success: {
            set: 'Erfolgreich {what} auf **{data}** gesetzt.',
            add: 'Erfolgreich {what} zu **{data}** hinzugefügt.',
            setCodeblock: '{what} ist somit nun {data}',
            removed: '{what} wurde erfolgreich entfernt.',
            remove: '{what} wurde erfolgreich von {data} entfernt.',
            fail: '{what} existiert nicht in diesem Server..',
            lengthFail: '{what} ist länger als {max} Buchstaben! ({length} Buchstaben, {relative} zu viel)',
            otherLengthFail: '{what} ist kürzer als {min} Buchstaben! ({length} Buchstaben, {relative} zu wenig)',
            numberFail: '{what} ist keine Zahl zwischen {a} und {b}!',
            roleFail: 'Diese Rolle wird entweder von Discord selber oder wird von einem Bot verwaltet.',
            colorFail: 'Es wurde kein gültiger Hex-Farbcode angegeben. Bekomme einen gültigen Code von {url}.',
            emoteFail: 'Du hast keine gültigen Emotes gesendet. Nur Discord und Standard-Emojis werden unterstützt.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Nachricht Web Editor',
            description: 'Öffne [diese Website]({url}), um die Nachricht zu bearbeiten und einzubetten.',
            open: 'Web Editor öffnen'
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
            modeChange: {
                analyst: 'Auf Analyst Setzen',
                cozy: 'Auf Cozy Setzen'
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
            logging: 'Nachrichten, Beitretungen, Captcha, Willkommer',
            fun: 'Starboard, Zählen',
            premium: {
                text: 'Enterprise Level {tier}',
                buy: 'Enterprise Kaufen'
            }
        },
        button: {
            logging: 'Loggen',
            fun: 'Spaß',
            tickets: 'Tickets',
            moderation: 'Moderation',
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
            expressions: 'Sticker/Emojis',
            welcomer: 'Begrüßung',
            byer: 'Verabschiedungen'
        },
        page: {
            messages: {
                title: 'Nachrichten',
                name: 'Nachrichten loggen',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Modus: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Aktiviere Snipes',
                        disable: 'Deaktiviere Snipes',
                        timeout: 'ändere Snipe Löschdauer pro Nachricht'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Nachrichten logging Kanal'
                    }
                }
            },
            expressions: {
                title: 'Ausdrücke',
                name: 'Ausdrücke logging',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Modus: {mode}'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Ausdrücke logging Kanal'
                    }
                }
            },
            joins: {
                title: 'Beitretungen',
                name: 'beitretungen logging',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Modus: {mode}',
                    filter: 'Filter: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filter',
                    captcha: 'CAPTCHA Verifizierung'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'beitretungen logging'
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
                                set: 'Alterstrigger Setzen',
                                edit: 'Alterstrigger Bearbeiten'
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
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Verifizierte Rolle: {role}',
                            unverifiedrole: 'Unverifizierte Rolle: {role}',
                            channel: 'Logging: {channel}',
                            color: 'Farbe: {color}'
                        },
                        disclaimer: 'Mit {command} fortfahren',
                        button: {
                            verifiedrole: {
                                set: 'Verifizierte Rolle Setzen',
                                edit: 'Verifizierte Rolle Bearbeiten'
                            },
                            unverifiedrole: {
                                set: 'Unverifizierte Rolle Setzen',
                                edit: 'Unverifizierte Rolle Bearbeiten'
                            },
                            type: {
                                title: 'CAPTCHA Typ festlegen',
                                selected: 'Ausgewählt'
                            },
                            color: 'Farbe der Seite ändern'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Verifiziert Rolle',
                                name: 'CAPTCHA verifizierte Rolle'
                            },
                            unverifiedrole: {
                                title: 'Unverifiziert Rolle',
                                name: 'CAPTCHA unverifizierte Rolle'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Rolle',
                                name: 'fehlgeschlagene CAPTCHA-Rolle'
                            },
                            color: {
                                title: 'Seitenfarbe',
                                name: 'page color',
                                description: 'Sende eine Hex-Farbe in den Chat, die verwenden werden soll.\nWir empfehlen dir, eine Farbe in der Nähe von Schwarz mit sehr hoher Sättigung zu verwenden.\nBeachte, dass die Farbe im Passport immer heller aussieht.\nErhalte einen Hex-Farbcode von [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Dieser Farbcode ist keine gültige HEX Farbe.\nEinen HEX Farbcode kannst du hier finden [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Willkommenheißer',
                name: 'welcomer',
                option: {
                    channel: 'Kanal: {channel}',
                    role: 'Rollen: {role}',
                    message: {
                        message: 'Nachricht: {message}',
                        command: 'Nachricht: Benutze `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'NV Nachricht: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'NV Nachricht: Benutze `{command}`'
                    },
                    pings: 'Pings: {channels}',
                    autodelete: 'Auto Löschen: **{time}**',
                    autodelete_never: 'niemals'
                },
                warnings: {
                    afterleaveXautodelete: 'Wir empfehlen nicht, **Auto löschen** und **Beim Verlassen löschen** gleichzeitig zu verwenden',
                    embedXcard: 'Die in Embed Begrüßungskarte überschreibt das eigene Embed Bild',
                    channelMissmatch: 'Der Kanal der Webhook ist anders als der Willkommenskanal'
                },
                button: {
                    nextpage: 'Nächste Seite ({cur}/{total})',
                    message: 'Nachricht Bearbeiten',
                    imgcard: 'Begrüßungskarte Bearbeiten',
                    pings: 'Ping Kanäle bearbeiten',
                    autodelete: 'Auto Löschen Festlegen',
                    assignRolesAfterRejoin: {
                        enable: 'Rollen nach Rejoinen neu zuweisen',
                        disable: 'Deaktiviere die Neuzuordnung von Rollen nach Rejoin'
                    },
                    afterleave: {
                        title: 'Was sollte mit der Nachricht passieren, wenn der User wieder verlässt?',
                        selected: 'Ausgewählt',
                        option: {
                            nothing: 'Nichts',
                            edit: 'Beim Verlassen bearbeiten',
                            delete: 'Beim Verlassen löschen'
                        }
                    },
                    dm: 'PN Nachricht',
                    afterleave_webedit: 'Nach Verlassen Embed Editor',
                    wave: 'Wave Button',
                    reactions: 'Reaktionen'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Rolle',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Automatisch löschen',
                        name: 'auto delete',
                        description: 'Die Willkommensnachricht wird nach dieser Zeit gelöscht.\nWir empfehlen dir, diese Zeit kurz zu halten (nur wenige Sekunden).\nBeispiel: `1m 3s`'
                    },
                    dm: { button: { disable: 'Deaktiviere DM Nachricht' } },
                    reactions: {
                        title: 'Reaktionen',
                        option: {
                            welcomer: 'Auf Willkommensnachricht: {emotes}',
                            firstmessage: 'Ersten Nachricht: {emotes}'
                        },
                        button: {
                            welcomer: 'Willkommensnachricht',
                            firstmessage: 'Erste Member Nachricht'
                        },
                        page: {
                            welcomer: {
                                title: 'Willkommenheißer',
                                name: 'willkommenheißer Auto-Reaktion'
                            },
                            firstmessage: {
                                title: 'Erste Nachricht',
                                name: 'Auto Reaktion'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Begrüßungskarte',
                        option: { background: 'Hintergrund: {url}' },
                        button: {
                            background: {
                                set: 'Benutzerdefinierten Hintergrund Setzen',
                                edit: 'Benutzerdefinierten Hintergrund Bearbeiten'
                            },
                            deleteBackground: 'Hintergrund Löschen',
                            inEmbed: {
                                enable: 'Karte im Embed anzeigen',
                                disable: 'Karte nicht im Embed anzeigen'
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Hintergrund',
                                name: 'card background',
                                description: 'Der Link muss eine **direkte Bild URL** sein, es muss auch ein Link vom Typ {scheme} sein.\nWir empfehlen ein Verhältnis von {ratio} und eine mindeste Auflösung von {resolution}.'
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
                    dm: { title: 'Privatnachricht' },
                    wavebtn: {
                        title: 'Winke, um Hallo zu sagen',
                        option: {
                            send: 'Sende: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Label: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Ändern Button Text',
                            ping: {
                                enable: 'Aktiviere Ping',
                                disable: 'Deaktiviere Ping'
                            },
                            type: {
                                title: 'Antwortstyp auswählen',
                                option: {
                                    '0': 'Zufälliger Sticker',
                                    '1': 'Eigene Nachricht'
                                }
                            },
                            color: {
                                title: 'Setzte eine Farbe für den button',
                                option: {
                                    blurple: 'Burple',
                                    // You may leave that
                                    grey: 'Grau',
                                    green: 'Grün',
                                    red: 'Rot'
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
                title: 'Verabschieder',
                name: 'byer',
                option: {
                    channel: 'Kanal: {channel}',
                    message: {
                        message: 'Nachricht: {message}',
                        command: 'Nachricht: Benutze `{command}`'
                    },
                    autodelete: 'Auto Delete: **{time}**',
                    autodelete_never: 'niemals'
                },
                button: {
                    message: 'Nachricht Bearbeiten',
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Automatisch löschen',
                        name: 'auto delete',
                        description: 'Die Verabschiedungssnachricht wird nach dieser Zeit gelöscht.\nWir empfehlen dir, diese Zeit kurz zu halten (nur wenige Sekunden).\nBeispiel: `1m 3s`'
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
                enable: 'Grund Erzwingen',
                disable: 'Optionaler Grund'
            },
            logging: {
                set: 'Setze Logging Kanal',
                edit: 'Ändere Logging Kanal'
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
            embeds: 'Embeds Editieren',
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
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Staff Rolle',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Texte',
                name: 'ticket descriptions',
                button: {
                    texts: 'Ticket Vorschau',
                    topic: 'Kanal Thema Bearbeiten',
                    unclaimed: 'Unclaimed Embed Bearbeiten',
                    claimed: 'Claimed Embed Bearbeiten',
                    closeEmote: 'Change Close Emote',
                    claimEmote: 'Change Claim Emote'
                },
                page: {
                    topic: {
                        title: 'Thema',
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
                name: 'bypass role'
            },
            logging: {
                title: 'Loggen',
                name: 'moderation logs'
            },
            filter: {
                title: 'Filter',
                name: 'moderation Filter',
                option: {
                    message: 'Nachricht: {message}',
                    total: 'Insgesamt: **{amount} Wörter**',
                    timeout: 'Stumm: {time}'
                },
                button: {
                    deleteAll: 'Wortliste Leeren',
                    editWords: 'Wörterliste Bearbeiten',
                    message: 'Nachricht Bearbeiten',
                    timeout: 'Stumm Dauer',
                    export: 'Wörterliste Anschauen'
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
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'Erfolgreich {amout} neue Wörter auf die Blacklist hinzugefügt.',
                        added: 'Erfolgreich "`{word}`" als ein neues Wort auf der Blacklist hinzugefügt.',
                        removed: 'Erfolgreich das Wort "`{word}`" von der Blacklist entfernt.'
                    },
                    message: {
                        title: 'Nachricht',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Mute Dauer',
                        name: 'timeout duration',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'moderation anti scam',
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
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'timeout duration',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Links',
                name: 'moderation anti link',
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
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'timeout duration',
                        description: 'Der User wird gestummt für die folgende Dauer!\nInput muss kürzer als 28 Tage sein.\nBeispiel: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
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
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Stumm Dauer',
                        name: 'timeout duration',
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
    fun: {
        title: 'Configure Fun',
        button: {
            starboard: 'Starboard',
            counting: 'Counting'
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
            blacklistedChannels: 'Blacklist Channels Bearbeiten',
            delete: {
                disable: 'Lösche <{reactions} Reaktionen deaktivieren',
                enable: 'Aktiviere Lösche <{reactions} Reaktionen'
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
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'starboard emoji'
            },
            color: {
                title: 'Farbe',
                name: 'starboard color'
            },
            count: {
                title: 'Reaktionen',
                name: 'requierd count',
                description: 'Sende eine gültige Zahl, um die Minimum-Anzahl an {emote} Reaktionen festzulegen.'
            },
            blacklistedRole: {
                title: 'Blacklist Rolle',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Blacklist Channels',
                name: 'blacklist channel list',
                description: 'Erwähne einen Channel/Kategorie oder sende die Id in den Chat.\nPräfix die Nachricht mit `+` zum Hinzufügen oder `-` um Kanäle zu entfernen.\nDu kannst mehrere Kanäle mit einem Leerzeichen trennen.\nSchreibe `none`, um alle Channels zu entfernen.',
                missingPrefix: 'Der Nachricht muss ein `+` vorangestellt werden, um Kanäle hinzuzufügen, oder ein `-`, um Kanäle zu entfernen.'
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
        title: 'Sonstiges Konfigurieren',
        button: {
            embedMessages: 'Nachrichten Einbetten',
            levelRoles: 'Level Rollen',
            leaderboards: 'Leaderboards',
            stickymessages: 'Stickymessages'
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
                    channel: 'Kanal: {channel}',
                    channel_none: 'nachrichten kanal',
                    message: 'Nachricht: {message}'
                },
                button: {
                    message: 'Nachricht Bearbeiten',
                    addrole: 'Level Hinzufügen',
                    select: {
                        title: 'Wähle eine Level Rolle, die du bearbeiten möchtest',
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
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Kanal',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'Neue Level Rolle',
                        limit: 'Du hast das Serverlimit von **{count}/{max} Level Rollen erreicht**!',
                        alreadExists: 'Eine Belohnung Rolle für **{messages} Nachrichten** wurde bereits mit der **{role} Rolle gesetzt.',
                        success: 'Diese Level Rolle wurde erfolgreich hinzugefügt. Jeder User, der **{messages} Nachrichten erreicht** erhält jetzt die **{role} Rolle**!',
                        page: {
                            messageCount: {
                                title: 'Nachrichtenanzahl',
                                name: 'required message count',
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
            },
            leaderboards: {
                title: 'Leaderboards',
                option: { blacklisted: 'Blacklisted: {channels}' },
                button: {
                    blacklistedChannels: 'Blacklist Channels Bearbeiten',
                    reset: {
                        disable: 'Mitgliederdaten beim Verlassen nicht zurücksetzen',
                        enable: 'Mitgliederdaten beim Verlassen zurücksetzen'
                    },
                    roles: 'Belohnungs Rollen'
                },
                page: {
                    roles: {
                        title: 'Top Rollen',
                        option: {
                            messages: 'Nachrichten Rollen: {roles}',
                            voiceminutes: 'Sprach Rollen: {roles}'
                        },
                        warnings: {
                            order: 'Bitte wähle zuerst die #1 Rolle aus, dann #2 und dann #3',
                            permsOrder: 'Bitte überprüfe, dass alle Rollen unter der Rolle {bot} liegen'
                        },
                        button: {
                            messages: 'Top 3 Messange Rollen',
                            voiceminutes: 'Top 3 Sprach Minuten Rollen'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Stickymessages',
                button: {
                    timeout: 'Timeout Dauer ändern',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'News Updates Folgen',
        name: 'follow news'
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