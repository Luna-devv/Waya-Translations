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
            tickets: 'Tiketi',
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
                        name: 'Kanal Pozdrava'
                    },
                    message: {
                        title: 'Message',
                        name: 'Poruka Pozdrava'
                    }
                }
            }

        }
    },

    tickets: {
        title: 'Konfiguriraj Tikete',
        option: {
            channel: 'Kategorija: {channel}',
            staff: 'Osoblje: {role}',
            logging: 'Bilježenje: {channel}',
            naming: 'Imenovanje: {type}',
            namingType: {
                username: 'Korisničko Ime',
                userid: 'Korisnički ID',
                random: 'Nasumično'
            }
        },
        button: {
            logging: {
                disable: 'Isključi Bilježenje',
                enable: 'Uključi Bilježenje',
            },
            texts: 'Promijeni Tekstove',
            naming: {
                title: 'Postavi tip imenovanja',
                current: 'Trenutno',
                option: {
                    username: 'Korisničko Ime',
                    userid: 'Korisnički ID',
                    random: 'Nasumično'
                }
            }
        },
        page: {
            category: {
                title: 'Kategorija',
                name: 'Kategorija Tiketa'
            },
            role: {
                title: 'Uloga Osoblja',
                name: 'Ulogu Osoblja u Tiketa'
            },
            descriptions: {
                title: 'Tekstovi',
                name: 'Opis Tiketa',
                button: {
                    unclaimed: 'Promijeni nezatraženi tekst',
                    claimed: 'Promijeni zatraženi tekst'
                },
                page: {
                    unclaimed: {
                        title: 'Nezatražena',
                        name: 'Opis nezatražene Tiketa',
                    },
                    claimed: {
                        title: 'Zatražena',
                        name: 'Opis zatražene Tiketa',
                    },
                    topic: {
                        title: 'Tema',
                        name: 'Tema Tiketa'
                    }
                }
            },
            logging: {
                title: 'Bilježenje',
                name: 'Bilježenje Tiketa'
            }
        }
    },

    moderation: {
        title: 'Moderacija',
        option: {
            role: 'Zaobilazna uloga: {role}',
            logging: 'Bilježenje: {channel}',
        },
        button: {
            filter: 'Crna lista',
            antiScam: 'Anti Scam',
            antiSpam: 'Anti Spam'
        },
        page: {
            role: {
                title: 'Zaobilazna uloga',
                name: 'Zaobilaznu ulogu'
            },
            logging: {
                title: 'Bilježenje',
                name: 'Bilježenje moderacije'
            },
            filter: {
                title: 'Filter',
                name: 'Moderacijski Filter',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcija: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbriši',
                        timeout: 'utišaj'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Utišaj: {time}'
                },
                button: {
                    editWords: 'Uredi listu riječi',
                    message: 'Uredi Poruku',
                    timeout: 'Trajanje Utišavanja',
                    actions: {
                        title: 'Upravljaj akcijom',
                        selected: 'Odabrano',
                        option: {
                            reply: 'odgovor',
                            delete: 'izbriši',
                            timeout: 'utišaj'
                        }
                    }
                },
                page: {
                    words: {
                        title: 'Riječi',
                        name: 'Zabranjena riječ',
                        awaitMessage: 'Unesite jednu ili više riječi koje će biti zabranjene.\nMolimo **samo koristite** znakove od `A-Z`\nOdvojite riječi `, ` (zarezom) da ih dodate više.',
                        bulkAdded: 'Uspješno dodano {amout} novih riječi na crnu listu.',
                        added: 'Uspješno dodano "`{word}`" na crnu listu.',
                        removed: 'Uspješno izbrisano "`{word}`" sa crne liste.'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Odgovor na zabranjenu riječ'
                    },
                    timeout: {
                        title: 'Trajanje Utišavanja',
                        name: 'Trajanje Utišavaja',
                        description: 'Korisnik će biti utišan za zadano vrijeme!\nOdabir mora biti između 0 i 1440 minuta.',
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Moderacija Anti Scam',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcija: {types}',
                    aactionType: {
                        reply: 'odgovor',
                        delete: 'izbriši',
                        timeout: 'utišaj'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Utišaj: {time}'
                },
                button: {
                    message: 'Uredi Poruku',
                    timeout: 'Trajanje Utišavanja',
                    actions: {
                        title: 'Upravljaj akcijom',
                        selected: 'Odabrano',
                        option: {
                            reply: 'odgovor',
                            delete: 'izbriši',
                            timeout: 'utišaj'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'Anit Scam odgovor'
                    },
                    timeout: {
                        title: 'Trajanje Utišavanja',
                        name: 'Trajanje Utišavaja',
                        description: 'Korisnik će biti utišan za zadano vrijeme!\nOdabir mora biti između 0 i 1440 minuta.',
                    }
                }
            },
            anitSpam: {
                title: 'Anti Spam',
                name: 'Moderacija Anti Spam',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcija: {types}',
                    threshold: 'Prekršaj: {threshold}poruka/5s',
                    aactionType: {
                        reply: 'odgovor',
                        delete: 'izbriši',
                        timeout: 'utišaj'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Utišaj: {time}'
                },
                button: {
                    threshold: 'Uredi Prekršaj',
                    message: 'Uredi Poruku',
                    timeout: 'Trajanje Utišavanja',
                    actions: {
                        title: 'Upravljaj akcijom',
                        selected: 'Odabrano',
                        option: {
                            reply: 'odgovor',
                            delete: 'izbriši',
                            timeout: 'utišaj'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'Anti Spam odgovor'
                    },
                    timeout: {
                        title: 'Trajanje Utišavanja',
                        name: 'Trajanje Utišavaja',
                        description: 'Korisnik će biti utišan za zadano vrijeme!\nOdabir mora biti između 0 i 1440 minuta.',
                    },
                    threshold: {
                        title: 'Prekršaj',
                        name: 'spam Prekršaj',
                        description: 'Smatrat ću prekršajem kada odabrani broj poruka je poslan u 5 seconds!\nOdabir mora biti između 1 i 99.',
                    }
                }
            }
        }
    },

    starboard: {
        title: 'Konfiguriraj Starboard',
        button: {
            emoji: 'Pormjeni Emotikon',
            color: 'Pormjeni Boju',
            count: 'Pormjeni Broj',
            nsfw: {
                disable: 'Isključi NSFW',
                enable: 'Uključi NSFW'
            },
            selfReact: {
                disable: 'Isključi Samo-Reagiranje',
                enable: 'Uključi Samo-Reagiranje'
            },
            logging: {
                disable: 'Isključi Bilježenje',
                enable: 'Uključi Bilježenje'
            },
            reply: {
                disable: 'Sakrij Odgovor na',
                enable: 'Prikaži Odgovor na'
            },
            display: {
                title: 'Postavi izgled prikaza',
                selected: 'Odabrano',
                option: {
                    tag: 'Korisničko Tag',
                    username: 'Korisničko Ime',
                    nickname: 'Nadimak',
                    guildProfile: 'Profil Servera'
                }
            }
        },
        option: {
            channel: 'Kanal: {channel}',
            color: 'Boja: {color}',
            emoji: 'Emotikon: {emoji}',
            count: 'Broj: {count}',
            display: 'Prikaz: {profileType}',
            profileType: {
                tag: 'Korisničko Tag',
                username: 'Korisničko Ime',
                nickname: 'Nadimak',
                guildProfile: 'Profil Servera'
            }
        },
        page: {
            channel: {
                title: 'Kanal',
                name: 'Kanal Starboarda'
            },
            emoji: {
                title: 'Emotikon',
                name: 'Emotikon Starboarda',
            },
            color: {
                title: 'Boja',
                name: 'Boja Starboarda',
                description: 'Unesite HEX kod boje u razgovor.\nHEX kod boje možete dobiti sa [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'Kod boje nija valjan HEX code.\nHEX kod boje možete dobiti sa [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Broj',
                name: 'zahtjevan Broj',
                description: 'Pošaljite broj da poszavite minimalan zahtjev za broj {emote} reakcija.'
            }
        }
    },

    staff: {
        title: 'Upravljaj {name}',
        option: {
            premium: 'Premium: {tier}'
        },
        button: {
            premium: 'Pormijeni premium Razinu',
            data: 'Izvezi Infomacije'
        },
        page: {
            data: {
                title: 'Izvoz Infomacija',
                message: 'Infomacija sa {name} su prikazane ispod.',
                error: 'Ne mogu poslati poruku :/'
            },
            premium: {
                title: 'Konfiguriraj Premium',
                option: {
                    tier: 'Trenutna Razina: {tier}'
                },
                button: {
                    tier: 'Razina {tier}'
                }
            }
        }
    },

    exit: {
        title: 'Promjene su spremljene, izlaz iz konfiguracije.'
    }
};

// https://cdn.crni.xyz/r/1652026361.png