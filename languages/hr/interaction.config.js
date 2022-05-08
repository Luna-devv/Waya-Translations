/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/

module.exports = {
    validate: 'Provjera podataka...',
    global: {   // will be the same everywhere
        none: 'nijedan',
        useButtons: 'Odaberite opciju koju želite urediti gumbima ispod.',
        permissions: 'Nedostaje: {perms}',
        await: {
            channel: 'Unesite kanal ili ID kanala u razgovor.\razgovor `none` da izbrišete kanal.',
            category: 'Unesite kategoriju ili ID kategorije u razgovoe.\nUpišite `none` da izbrišete kategoriju.',
            role: 'Unesite ulogu ili ID uloge u razgovor.\nUpišite `none` da izbrišete ulogu.',
            message: 'Pošaljite poruku koje će biti korištena kao {what}.',
            emote: 'Pošaljite emotikon koji će biti korišten kao {what}.',
        },
        success: {
            set: 'Uspješno postavljen/o/a {what} na **{data}**',
            removed: 'Uspješno izbrisano {what}.',
            fail: '{what} ne postoji u ovom serveru..',
            lengthFail: '{what} je više od {max} znakova! ({length} znakovi, {relative} previše)',
            otherLengthFail: '{what} je manje od {min} znakova! ({length} znakovi, {relative} premalo)',
            numberFail: '{what} nije broj između {a} i {b}!',
            roleFail: 'Ta uloga je upravljana od strane Discorda ili robota.'
        },
        type: {
            text: 'Tekstualni Kanal',
            category: 'Kategorija Kanala',
            role: 'Uloga'
        },
        state: {
            enabled: 'Uključeno',
            disabled: 'Isključeno',
        },
        button: {
            back: 'Natrag',
            disable: 'Isključi',
            enable: 'Uključi',
            channel: {
                set: 'Postavi Kanal',
                edit: 'Uredi Kanal'
            },
            category: {
                set: 'Postavi Kategoriju',
                edit: 'Uredi Kategoriju'
            },
            role: {
                set: 'Postavi Ulogu',
                edit: 'Uredi Ulogu'
            },
            mode: {
                analyst: 'Analist',
                cozy: 'Udobno'
            },
            dupaw: {    // This is a name, can't be translated
                enable: 'Uključi dupaw',
                disable: 'Isključi dupaw'
            }
        }
    },

    main: {
        title: 'Konfiguriraj {name}',
        button: {
            logging: 'Bilježenje',
            tickets: 'Ulaznice',
            moderation: 'Moderacija',
            starboard: 'Starboard',
            staff: 'Upravljaj Serverom',
            exit: 'Izlaz',
            help: 'Pomoć'
        }
    },
    logging: {
        title: 'Konfiguriraj Bilježenje',
        button: {
            messages: 'Poruka',
            joins: 'Ulazaka',
            welcomer: 'Dobrodošlica',
            byer: 'Pozdrava'
        },
        page: {

            messages: {
                title: 'Poruka',
                name: 'Bilježenje Poruka',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način: {mode}'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal za Bilježenje Poruka'
                    }
                }
            },

            joins: {
                title: 'Ulazi',
                name: 'Bilježenje Ulazaka',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način: {mode}',
                    filter: 'Filter: {state}'
                },
                button: {
                    filter: 'Filter'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Bilježenje Ulazaka'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Starost: **{trigger} days**',
                            punishment: 'Kazna: **{type}**',
                            punishmentType: {
                                ban: 'Banuj',
                                kick: 'Izbaci',
                                timeout: 'Utišaj',
                                role: 'Dodaj {role} ulogu',
                                none: 'ništa'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Isključi DM obavijest',
                                enable: 'Uključi DM obavijest'
                            },
                            trigger: {
                                set: 'Postavi Starost',
                                edit: 'Uredi Starost'
                            },
                            punishment: {
                                title: 'Postavi Kaznu',
                                current: 'Trenutno',
                                option: {
                                    ban: 'Banuj Korisnika',
                                    kick: 'Izbaci Korisnika',
                                    timeout: 'Utišaj Korisnika',
                                    role: 'Dodaj Ulogu'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Okidač',
                                name: 'zahtjev starosti',
                                description: 'Ako je račun mlađi od toliko dana, bit će kažnjen!\nUnos mora biti između 0 i 28 dana.',
                            },
                            role: {
                                title: 'Uloga',
                                name: 'kaznena uloga'
                            }
                        }
                    }
                }
            },

            welcomer: {
                title: 'Dobrodošlica',
                name: 'Dobrodošlica',
                option: {
                    channel: 'Kanal: {channel}',
                    role: 'Uloga: {role}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristi `{command}`'
                    }
                },
                button: {
                    message: 'Uredi Poruku'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal Dobrodošlice'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Poruka Dobrodošlice'
                    },
                    role: {
                        title: 'Uloga',
                        name: 'Uloga Dobrodošlice'
                    }
                }
            },

            byer: {
                title: 'Pozdravljač',
                name: 'Pozdravljač',
                option: {
                    channel: 'Kanal: {channel}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristi `{command}`'
                    }
                },
                button: {
                    message: 'Uredi Poruku'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Welcomer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Welcomer Message'
                    }
                }
            }

        }
    },

    tickets: {
        title: 'Configure Ticketing',
        option: {
            channel: 'Category: {channel}',
            staff: 'Staff: {role}',
            logging: 'Logging: {channel}',
            naming: 'Naming: {type}',
            namingType: {
                username: 'Username',
                userid: 'UserId',
                random: 'Random'
            }
        },
        button: {
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging',
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
                    unclaimed: 'Change unclaimed text',
                    claimed: 'Change claimed text'
                },
                page: {
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket description',
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket description',
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
        title: 'Moderation',
        option: {
            role: 'Bypass Role: {role}',
            logging: 'Logging: {channel}',
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti Scam',
            antiSpam: 'Anti Spam'
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
                    words: {
                        title: 'Words',
                        name: 'Blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nPlease **only use** characters from `A-Z`\nSplit words with `, ` to bulk add words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as new blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
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
                    total: 'Total: **{amount} words**',
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
                    }
                }
            },
            anitSpam: {
                title: 'Anti Spam',
                name: 'Moderation Anti Spam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    threshold: 'Threshold: {threshold}msgs/5s',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    total: 'Total: **{amount} words**',
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
                            pruge: 'Purge'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
                    },
                    threshold: {
                        title: 'Threshold',
                        name: 'spam Threshold',
                        description: 'I will consider it as spam, when this amount gets reached within 5 seconds!\nInput must be between 1 and 99.',
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
            selfReact: {
                disable: 'Disable Self Reaction',
                enable: 'Enable Self Reaction'
            },
            logging: {
                disable: 'Disable Logging',
                enable: 'Disable Logging'
            },
            reply: {
                disable: 'Hide Replied to',
                enable: 'Show Replied to'
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
                name: 'Starboard Emoji',
            },
            color: {
                title: 'Color',
                name: 'Starboard Color',
                description: 'Paste the HEX color code into the chat.\nGet a HEX color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid HEX color.\nGet a HEX color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Count',
                name: 'requierd Count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            }
        }
    },

    staff: {
        title: 'Manage {name}',
        option: {
            premium: 'Premium: {tier}'
        },
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
                title: 'Configure Premium',
                option: {
                    tier: 'Current Teir: {tier}'
                },
                button: {
                    tier: 'Tier {tier}'
                }
            }
        }
    },

    exit: {
        title: 'Saved settings and exited config menu.'
    }
};