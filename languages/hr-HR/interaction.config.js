/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Potvrdnja podataka...',
    notAllowed: 'Ne možete koristiti ovaj izbornik.',
    prefix: {
        name: 'Prefiks',
        set: 'Uspješno ažuriran prefiks servera na {prefix}!',
        noSpace: 'Imajte na umu da ne možete koristiti razmake unutar prefiksa! Dopušteno je samo na kraju.',
        disclaimer: 'Ovo se NE odnosi na "/" (slash) naredbe'
    },
    global: {
        // will be the same everywhere
        none: 'prazno',
        useButtons: 'Odaberite opciju koju želite urediti pomoću gumba u nastavku.',
        upsell: 'Pretplatite se da dobijete još {count}',
        permissions: 'Nedostaje: {perms}',
        placeholders: 'Predlošci',
        await: {
            channel: 'Spomenite kanal ili zalijepite Id kanala u chat.\nUpišite {string} za uklanjanje kanala.',
            category: 'Spomenite kategoriju ili zalijepite Id kategorije u chat.\nUpišite {string} za uklanjanje kategorije.',
            role: 'Spomenite ulogu ili zalijepite Id uloge u chat.\nUpišite {string} da biste uklonili ulogu.',
            message: 'Pošaljite poruku koju treba koristiti kao {what}.',
            emote: 'Pošaljite emoji koji bi se trebao koristiti kao {what}.\nUpišite {string} da biste uklonili emocije.',
            color: 'Pošaljite heksadecimalni kod boje koji bi se trebao koristiti za {what}. Dobijte važeći kod na {url}.',
            patient: 'Omogućavanje ovoga može potrajati nekoliko sekundi, pričekajte..'
        },
        success: {
            set: '{what} je uspješno postavljeno na **{data}**.',
            add: 'Uspješno dodan {what} u **{data}**.',
            setCodeblock: '{what} je uspješno postavljeno na {data}',
            removed: 'Uspješno uklonjeno {what}.',
            remove: 'Uspješno uklonjen {what} iz **{data}**.',
            fail: 'Ovo {what} ne postoji u ovom serveru..',
            lengthFail: '{what} je duži od {max} znakova! ({length} znakova, {relative} previše)',
            otherLengthFail: '{what} kraći je od {min} znakova! ({length} znakova, {relative} previše manje)',
            numberFail: '{what} nije broj između {a} i {b}!',
            roleFail: 'Ovom ulogom može upravljati samo Discord ili pripada korisniku bota.',
            colorFail: 'Nije dostavljen važeći heksadecimalni kod boje. Dobijte važeći kod na {url}.',
            emoteFail: 'Niste poslali nijedan valjan emoji. Podržani su samo prilagođeni discord i zadani emojiji.'
        },
        webedit: {
            button: 'Embed uređivač',
            title: 'Web Edit Poruke',
            description: 'Otvorite [ovo web mjesto]({url}) da biste započeli s uređivanjem poruke i embeda.',
            open: 'Otvorite Web Edit'
        },
        type: {
            text: 'Tekstualni kanal',
            category: 'Kanal kategorije',
            role: 'Uloga',
            emoji: 'Emoji'
        },
        state: {
            enabled: 'Omogućeno',
            disabled: 'Onemogućeno'
        },
        option: {
            required: 'Potrebno',
            optional: 'Izborno'
        },
        button: {
            back: 'Natrag',
            disable: 'Onemogući',
            enable: 'Omogući',
            channel: {
                set: 'Postavite kanal',
                edit: 'Uredi kanal'
            },
            category: {
                set: 'Postavite kategoriju',
                edit: 'Uredi kategoriju'
            },
            role: {
                set: 'Postavite ulogu',
                edit: 'Uredi ulogu'
            },
            mode: {
                analyst: 'Analitički',
                cozy: 'Udobno'
            },
            modeChange: {
                analyst: 'Postavite na Analitičar',
                cozy: 'Postavite na Ugodno'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Omogući dupaw',
                disable: 'Onemogući dupaw'
            }
        }
    },
    main: {
        title: 'Konfiguriraj {name}',
        option: {
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Enterprise Tir {tier}',
                buy: 'Kupite Enterprise'
            }
        },
        button: {
            logging: 'Evidentiranje',
            fun: 'Fun',
            tickets: 'Ulaznice',
            moderation: 'Moderacija',
            misc: 'Razno',
            followNews: 'Pratite Vijesti',
            staff: 'Upravljajte serverom',
            exit: 'Izlaz',
            help: 'Podrška'
        }
    },
    logging: {
        title: 'Konfigurirajte evidenciju',
        button: {
            messages: 'Poruka',
            joins: 'Ulazaka',
            expressions: 'Sticker/Emojis',
            welcomer: 'Dobrodošlica',
            byer: 'Pozdrava'
        },
        page: {
            messages: {
                title: 'Poruka',
                name: 'message logging',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način rada: {mode}',
                    snipetimeout: 'Snajper: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Omogući Snipe',
                        disable: 'Onemogući Snipe',
                        timeout: 'promijeniti trajanje čišćenja snajpera po poruci'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanal',
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
                title: 'Ulazaka',
                name: 'join logging',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način rada: {mode}',
                    filter: 'Filter: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filter',
                    captcha: 'CAPTCHA provjera'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'join logging'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Dob okidač: **{trigger} dana**',
                            punishment: 'Kazna: **{type}**',
                            punishmentType: {
                                ban: 'Banaj',
                                kick: 'Izbaci',
                                timeout: 'Pauza',
                                role: 'Dodijelite ulogu {role}',
                                none: 'prazno'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Onemogući DM obavijest',
                                enable: 'Omogući DM obavijest'
                            },
                            trigger: {
                                set: 'Postavite okidač za dob',
                                edit: 'Uredite okidač za dob'
                            },
                            punishment: {
                                title: 'Odredite kaznu',
                                current: 'Trenutno',
                                option: {
                                    ban: 'Ban-uj korisnika',
                                    kick: 'Kick-uj korisnika',
                                    timeout: 'Timeout-uj korisnika',
                                    role: 'Dodijelite ulogu'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Okidač',
                                name: 'dobni zahtjev',
                                description: 'Ako je račun mlađi od ove dobi, bit će kažnjen!\nUnos mora biti između 0 i 28 dana.'
                            },
                            role: {
                                title: 'Uloga',
                                name: 'kaznena uloga'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Potvrđena uloga: {role}',
                            unverifiedrole: 'Nepotvrđena uloga: {role}',
                            channel: 'Bilježenje: {channel}',
                            color: 'Color: {color}'
                        },
                        disclaimer: 'Nastavite s {command}',
                        button: {
                            verifiedrole: {
                                set: 'Postavite potvrđenu ulogu',
                                edit: 'Uredi potvrđenu ulogu'
                            },
                            unverifiedrole: {
                                set: 'Postavite neprovjerenu ulogu',
                                edit: 'Uredi neprovjerenu ulogu'
                            },
                            type: {
                                title: 'Postavite vrstu CAPTCHA',
                                selected: 'Odabrano'
                            },
                            color: 'Promjena boje stranice'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Potvrđena uloga',
                                name: 'CAPTCHA verified role'
                            },
                            unverifiedrole: {
                                title: 'Nepotvrđena uloga',
                                name: 'CAPTCHA unverified role'
                            },
                            logging: {
                                title: 'Bilježenje',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Uloga',
                                name: 'neuspješna CAPTCHA uloga'
                            },
                            color: {
                                title: 'Boja stranice',
                                name: 'page color',
                                description: 'Zalijepite Hex boju u chat koji želite koristiti.\nPreporučujemo da koristite boju blizu crne s vrlo visokom zasićenošću.\nImajte na umu da će boja na putovnici uvijek izgledati svjetlije.\nDobijte heksadecimalni kod boje s [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Šifra boje nije važeća heksadecimalna boja.\nDobijte heksadecimalni kod boje s [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Dobrodošlica',
                name: 'welcomer',
                option: {
                    channel: 'Kanal: {channel}',
                    role: 'Uloge: {role}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristite `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'AL poruka: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'AL poruka: koristite `{command}`'
                    },
                    pings: 'Pingovi: {channels}',
                    autodelete: 'Automatsko brisanje: **{time}**',
                    autodelete_never: 'nikada'
                },
                warnings: {
                    afterleaveXautodelete: 'Ne preporučujemo korištenje **Automatsko brisanje** i **Brisanje nakon odlaska** istovremeno',
                    embedXcard: 'U embed kartici prepisuje vašu prilagođenu ugrađenu sliku',
                    channelMissmatch: 'Kanal valovnog web-dojavnika razlikuje se od pozdravne poruke'
                },
                button: {
                    nextpage: 'Sljedeća stranica ({cur}/{total})',
                    message: 'Uredi poruku',
                    imgcard: 'Uredi karticu',
                    pings: 'Uredi Ping kanale',
                    autodelete: 'Postavite automatsko brisanje',
                    assignRolesAfterRejoin: {
                        enable: 'Ponovno dodijelite uloge nakon ponovnog pridruživanja',
                        disable: 'Onemogući ponovno dodjeljivanje uloga nakon ponovnog pridruživanja'
                    },
                    afterleave: {
                        title: 'Što bi se trebalo dogoditi s porukom ako član ode?',
                        selected: 'Odabrano',
                        option: {
                            nothing: 'Ništa',
                            edit: 'Uredi na dopustu',
                            delete: 'Brisanje na dopustu'
                        }
                    },
                    dm: 'DM poruka',
                    afterleave_webedit: 'Nakon napuštanja Embed uređivač',
                    wave: 'Gumb mahanja',
                    reactions: 'Reakcije'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Uloga',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Automatsko brisanje',
                        name: 'auto delete',
                        description: 'Poruka dobrodošlice bit će izbrisana nakon tog vremena.\nPreporučujemo da ovo vrijeme bude kratko (samo nekoliko sekundi).\nPrimjer: `1m 3s`'
                    },
                    dm: { button: { disable: 'Onemogući DM poruku' } },
                    reactions: {
                        title: 'Reakcije',
                        option: {
                            welcomer: 'Reakcije na poruku dobrodošlice: {emotes}',
                            firstmessage: 'Reakcije na prvu poruku: {emotes}'
                        },
                        button: {
                            welcomer: 'Poruka dobrodošlice',
                            firstmessage: 'Prva poruka za člana'
                        },
                        page: {
                            welcomer: {
                                title: 'Dobrodošlica',
                                name: 'dobrodošlica automatska reakcija'
                            },
                            firstmessage: {
                                title: 'Prva poruka',
                                name: 'auto reakcija'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Kartica',
                        option: { background: 'Pozadina: {url}' },
                        button: {
                            background: {
                                set: 'Postavite prilagođenu pozadinu',
                                edit: 'Uredi prilagođenu pozadinu'
                            },
                            deleteBackground: 'Izbriši pozadinu',
                            inEmbed: {
                                enable: 'Prikazuj sliku u Embed',
                                disable: 'Ne prikazuj sliku u Embedu'
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Pozadina',
                                name: 'card background',
                                description: 'Veza mora biti **izravni URL slike**, također mora biti veza tipa {scheme}.\nPreporučujemo omjer od {ratio} i minimalnu razlučivost od {resolution}.'
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
                    dm: { title: 'Direktna poruka' },
                    wavebtn: {
                        title: 'Mahnite da pozdravite',
                        option: {
                            send: 'Pošalji: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Oznaka: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Promjena teksta gumba',
                            ping: {
                                enable: 'Omogući Ping',
                                disable: 'Onemogući Ping'
                            },
                            type: {
                                title: 'Odaberite vrstu odgovora',
                                option: {
                                    '0': 'Nasumična naljepnica',
                                    '1': 'Prilagođena poruka'
                                }
                            },
                            color: {
                                title: 'Odaberite boju za gumb',
                                option: {
                                    blurple: 'Blurple',
                                    // You may leave that
                                    grey: 'Siva',
                                    green: 'Zelena',
                                    red: 'Crvena'
                                }
                            }
                        },
                        page: {
                            emoji: {
                                title: 'Emote',
                                name: 'button emote'
                            },
                            label: {
                                title: 'Oznaka',
                                name: 'button text'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Pozdrav',
                name: 'byer',
                option: {
                    channel: 'Kanal: {channel}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristite `{command}`'
                    },
                    autodelete: 'Automatsko brisanje: **{time}**',
                    autodelete_never: 'nikada'
                },
                button: {
                    message: 'Uredi poruku',
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Automatsko brisanje',
                        name: 'auto delete',
                        description: 'Poruka Byera bit će izbrisana nakon tog vremena.\nPreporučujemo da ovo vrijeme bude kratko (samo nekoliko sekundi).\nPrimjer: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Konfigurirajte ulaznice',
        option: {
            channel: 'Kategorija: {channel}',
            staff: 'Osoblje: {role}',
            logging: 'Evidentiranje: {channel}',
            forceReason: 'Razlog: {state}',
            naming: 'Imenovanje: {type}',
            namingType: {
                username: 'Korisničko ime',
                userid: 'ID korisnika',
                random: 'Nasumično'
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
                enable: 'Obavezan razlog',
                disable: 'Izborni razlog'
            },
            logging: {
                set: 'Postavite kanal bilježenja',
                edit: 'Promjena kanala za bilježenje'
            },
            transcript: {
                disable: 'Onemogući transkripte',
                enable: 'Spremi transkripte'
            },
            openReason: {
                disable: 'Onemogući Razlog Otvaranja',
                enable: 'Omogući Razlog Otvaranja'
            },
            leaveAutoclose: {
                disable: 'Onemogući Automatsko Zatvaranje na Izlasku',
                enable: 'Omogući Automatsko Zatvaranje na Izlasku'
            },
            embeds: 'Promjena embeda',
            naming: {
                title: 'Postavite vrstu imenovanja',
                current: 'Trenutno',
                option: {
                    username: 'Korisničko ime',
                    userid: 'ID korisnika',
                    random: 'Nasumični ID'
                }
            }
        },
        page: {
            category: {
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Uloga osoblja',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Tekstovi',
                name: 'ticket descriptions',
                button: {
                    texts: 'Pregled ulaznice',
                    topic: 'Promjena teme',
                    unclaimed: 'Promijenite Nezahtijevani Embed',
                    claimed: 'Promijenite Zahtijevani Embed',
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
                title: 'Evidentiranje',
                name: 'ticket logging'
            }
        }
    },
    moderation: {
        title: 'Konfigurirajte moderiranje',
        option: {
            role: 'Zaobićna uloga: {role}',
            logging: 'Evidentiranje: {channel}'
        },
        button: {
            filter: 'Crna lista',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Link',
            antiSpam: 'Anti Spam',
            bypassRole: {
                edit: 'Uredi zaobilaznu ulogu',
                set: 'Postavite zaobilaznu ulogu'
            },
            logging: {
                edit: 'Uredi kanal za evidenciju poruka',
                set: 'Postavi kanal za evidenciju poruka'
            }
        },
        page: {
            role: {
                title: 'Zaobilazna uloga',
                name: 'bypass role'
            },
            logging: {
                title: 'Evidentiranje',
                name: 'moderation logs'
            },
            filter: {
                title: 'Filter',
                name: 'moderation Filter',
                option: {
                    message: 'Poruka: {message}',
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Pauza: {time}'
                },
                button: {
                    deleteAll: 'Očisti popis riječi',
                    editWords: 'Uredite popis riječi',
                    message: 'Uredi poruku',
                    timeout: 'Trajanje timeout-a',
                    export: 'Prikaži popis riječi'
                },
                page: {
                    delete: {
                        title: 'Očisti popis riječi',
                        description: 'Jeste li sigurni da želite izbrisati sve riječi s crne liste?',
                        page: {
                            confirm: {
                                title: 'Potvrđeno',
                                description: 'Uspješno su izbrisane sve riječi s crne liste! Sada možete odbaciti ovu poruku.'
                            },
                            abord: {
                                title: 'Prekinuto',
                                description: 'Nisu poduzete nikakve radnje! Sada možete odbaciti ovu poruku.'
                            }
                        }
                    },
                    words: {
                        title: 'Riječi',
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'Uspješno dodano {amout} novih riječi na crnu listu.',
                        added: 'Uspješno dodana "`{word}`" kao nova riječ na crnoj listi.',
                        removed: 'Uspješno uklonjena "`{word}`" kao riječ s crne liste.'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'timeout duration',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'moderation anti scam',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbrisati',
                        timeout: 'pauza'
                    },
                    timeout: 'Pauza: {time}'
                },
                button: {
                    message: 'Uredi poruku',
                    timeout: 'Trajanje timeout-a',
                    actions: {
                        title: 'Upravljajte akcijom',
                        selected: 'Odabran',
                        option: {
                            reply: 'Odgovor',
                            delete: 'Izbrisati',
                            timeout: 'Pauza'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'timeout duration',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'moderation anti link',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbrisati',
                        timeout: 'pauza'
                    },
                    timeout: 'Pauza: {time}'
                },
                button: {
                    media: {
                        disable: 'Zabrani medije',
                        enable: 'Dozvoli medije'
                    },
                    message: 'Uredi poruku',
                    timeout: 'Trajanje timeout-a',
                    actions: {
                        title: 'Upravljajte akcijom',
                        selected: 'Odabran',
                        option: {
                            reply: 'Odgovor',
                            delete: 'Izbrisati',
                            timeout: 'Pauza'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'timeout duration',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    threshold: 'Okidač: **{threshold}poruka/5s**',
                    actionType: {
                        reply: 'odgovor',
                        timeout: 'pauza',
                        purge: 'izbriši'
                    },
                    timeout: 'Pauza: {time}'
                },
                button: {
                    threshold: 'Uredi okidač',
                    message: 'Uredi poruku',
                    timeout: 'Trajanje timeout-a',
                    actions: {
                        title: 'Upravljajte akcijom',
                        selected: 'Odabran',
                        option: {
                            reply: 'Odgovor',
                            timeout: 'Pauza',
                            purge: 'Izbriši'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'timeout duration',
                        description: 'Trajanje timeout-a'
                    },
                    threshold: {
                        title: 'Okidač',
                        name: 'spam okidač',
                        description: 'Smatrat ću to spamom, kada se taj iznos dosegne u roku od 5 sekundi!\nUnos mora biti između 1 i 99.'
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
        title: 'Konfigurirajte Starboard',
        button: {
            emoji: 'Promijenite emote',
            color: 'Promijenite boju',
            count: 'Promijenite broj',
            nsfw: {
                disable: 'Onemogućite NSFW',
                enable: 'Omogućite NSFW'
            },
            bots: {
                disable: 'Onemogući botove',
                enable: 'Omogući botove'
            },
            selfReact: {
                disable: 'Onemogućite samoreagiranje',
                enable: 'Omogućite samoreagiranje'
            },
            reply: {
                disable: 'Sakrij odgovor od',
                enable: 'Prikaži odgovor od'
            },
            edits: {
                disable: 'Onemogući uređivanja',
                enable: 'Omogući uređivanja'
            },
            logging: {
                disable: 'Onemogući evidentiranje',
                enable: 'Omogući evidentiranje'
            },
            blacklist: {
                set: 'Postavite zabranjenu ulogu',
                change: 'Uredite zabranjenu ulogu'
            },
            blacklistedChannels: 'Uredite kanale na crnoj listi',
            delete: {
                disable: 'Onemogući brisanje <{reactions} Reakcija',
                enable: 'Omogući brisanje <{reactions} Reakcija'
            },
            display: {
                title: 'Postavite stil prikaza',
                selected: 'Odabran',
                option: {
                    tag: 'Oznaka',
                    username: 'Korisničko ime',
                    nickname: 'Nadimak',
                    guildProfile: 'Profil Servera'
                }
            }
        },
        option: {
            channel: 'Kanal: {channel}',
            color: 'Boja: {color}',
            emoji: 'Emote: {emoji}',
            count: 'Broj: {count}',
            blacklistedRole: 'Zabranjeno: {role}',
            display: 'Prikaz: {profileType}',
            profileType: {
                tag: 'Oznaka',
                username: 'Korisničko ime',
                nickname: 'Nadimak',
                guildProfile: 'Profil Servera'
            }
        },
        page: {
            channel: {
                title: 'Kanal',
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emote',
                name: 'starboard emoji'
            },
            color: {
                title: 'Boja',
                name: 'starboard color'
            },
            count: {
                title: 'Broj',
                name: 'requierd count',
                description: 'Pošaljite broj za postavljanje minimalnog zahtjeva za broj reakcija {emote}.'
            },
            blacklistedRole: {
                title: 'Zabrani Ulogu',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Kanali na crnoj listi',
                name: 'blacklist channel list',
                description: 'Spomenite kanal/kategoriju ili zalijepite Id kanala u chat.\nDodajte ispred poruke `+` za dodavanje ili `-` za uklanjanje kanala.\nMožete poslati više kanala odvojenih razmakom.\nUpišite `none` za uklanjanje svih kanala.',
                missingPrefix: 'Poruka mora imati prefiks `+` za dodavanje ili `-` za uklanjanje kanala.'
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
        title: 'Konfiguriraj Razno',
        button: {
            embedMessages: 'Embed Poruke',
            levelRoles: 'Level Uloge',
            leaderboards: 'Ploče s najboljim rezultatima',
            stickymessages: 'Ljepljive poruke'
        },
        page: {
            embedMessages: {
                title: 'Embed Poruke',
                description: '**Što je ovo?**\nAko se šalje link poruke, {name} će odgovoriti sa sadržajem te poruke!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Dopustite drugim serverima da ugrađuju poruke odavde',
                        disable: 'Zabranite drugim serverima da ugrađuju poruke odavde'
                    },
                    color: 'Odaberite boju za Embed',
                    display: {
                        title: 'Odaberite stil prikaza autora',
                        selected: 'Odabrano',
                        option: {
                            message: 'Sadržaj Poruke',
                            author: 'Polje autora',
                            footer: 'Polje podnožja'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Level Uloge',
                option: {
                    roles: 'Uloge: **{count}/{max}**',
                    channel: 'Kanal: {channel}',
                    channel_none: 'kanal poruka',
                    message: 'Poruka: {message}'
                },
                button: {
                    message: 'Uredi poruku',
                    addrole: 'Dodaj Level',
                    select: {
                        title: 'Odaberite ulogu razine koju želite urediti',
                        editing: 'Uređivanje',
                        option: {
                            name: '{messages} poruka',
                            description: 'Uloga: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Kanal',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'Nova Uloga Razine',
                        limit: 'Dosegli ste ograničenje servera od **{count}/{max} uloga na razini**!',
                        alreadExists: 'Nagradbena uloga za **{messages} poruka** već je postavljena ulogom **{role}**.',
                        success: 'Uspješno ste dodali ovu ulogu razine. Svaki korisnik koji dođe do **{messages} poruka** sada će dobiti ulogu **{role}**!',
                        page: {
                            messageCount: {
                                title: 'Broj Poruka',
                                name: 'required message count',
                                description: 'Pošaljite broj koji će korisnik morati imati kao u broju poruka kako bi dobio odabranu ulogu.'
                            },
                            role: {
                                title: 'Uloga',
                                name: 'sadašnja uloga'
                            }
                        }
                    },
                    editRole: {
                        title: 'Uredi razinu uloge',
                        option: {
                            role: 'Uloga: {role}',
                            messages: 'Poruka: {messages}'
                        },
                        button: {
                            messages: 'Promjena broja poruka',
                            role: 'Promjena uloge',
                            delete: 'Izbrišite'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Ploče s najboljim rezultatima',
                option: { blacklisted: 'Na crnoj listi: {channels}' },
                button: {
                    blacklistedChannels: 'Uredite kanale na crnoj listi',
                    reset: {
                        disable: 'Ne poništavajte podatke o članu prilikom odlaska',
                        enable: 'Poništavanje podataka o članu nakon odlaska'
                    },
                    roles: 'Nagrađujuće uloge'
                },
                page: {
                    roles: {
                        title: 'Glavne uloge',
                        option: {
                            messages: 'Uloge poruka: {roles}',
                            voiceminutes: 'Glasovne uloge: {roles}'
                        },
                        warnings: {
                            order: 'Odaberite prvo #1. ulogu, zatim #2. i zatim #3',
                            permsOrder: 'Provjerite jesu li sve uloge ispod uloge {bot}'
                        },
                        button: {
                            messages: '3 najbolje uloge u porukama',
                            voiceminutes: '3 najbolje glasovne uloge'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Ljepljive poruke',
                button: {
                    timeout: 'Promijenite trajanje vremenskog ograničenja',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Pratite novosti',
        name: 'follow news'
    },
    staff: {
        title: 'Upravljaj {name}',
        option: { premium: 'Enterprise: {tier}' },
        button: {
            premium: 'Promijenite premium nivo',
            data: 'Izvoz podataka'
        },
        page: {
            data: {
                title: 'Izvoz podataka',
                message: 'Podaci od {name} prikazani su u nastavku.',
                error: 'Ne mogu poslati poruku :/'
            },
            premium: {
                title: 'Konfigurirajte Enterprise',
                option: { tier: 'Trenutna razina: {tier}' },
                button: { tier: 'Razina {tier}' }
            }
        }
    },
    exit: { title: 'Spremljene postavke i izlaz iz izbornika konfiguracije.' }
};