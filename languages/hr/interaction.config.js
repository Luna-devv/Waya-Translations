/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Potvrdnja podataka...',
    notAllowed: 'Ne možete koristiti ovaj izbornik.',
    global: {
        // will be the same everywhere
        none: 'prazno',
        useButtons: 'Odaberite opciju koju želite urediti pomoću gumba u nastavku.',
        developer: {
            bypass: 'Nemate `MANAGE_GUILD` za pristup ovoj ploči..\nŽelite li i dalje nastaviti?',
            choice: {
                access: 'Siguran sam, da',
                abord: 'Nema veze'
            },
            notice: 'oprezno - privilegije programera nametnute..'
        },
        permissions: 'Nedostaje: {perms}',
        placeholders: 'Predlošci',
        await: {
            channel: 'Spomenute kanal ili zalijepite ID kanala u chat.\nUpišite `none` da biste uklonili kanal.',
            category: 'Spomenute kategoriju ili zalijepite ID kategorije u chat.\nUpišite `none` da biste uklonili kategoriju.',
            role: 'Spomenute ulogu ili zalijepite ID uloge u chat.\nUpišite `none` da biste uklonili ulogu.',
            message: 'Pošaljite poruku koju treba koristiti kao {what}.',
            emote: 'Pošaljite emoji koji se treba koristiti kao {what}.'
        },
        success: {
            set: 'Uspješno postavljeno {what} na **{data}**',
            removed: 'Uspješno uklonjeno {what}.',
            fail: 'Ovo {what} ne postoji u ovom serveru..',
            lengthFail: '{what} je duži od {max} znakova! ({length} znakova, {relative} previše)',
            otherLengthFail: '{what} kraći je od {min} znakova! ({length} znakova, {relative} previše manje)',
            numberFail: '{what} nije broj između {a} i {b}!',
            roleFail: 'Ovom ulogom može upravljati samo Discord ili pripada korisniku bota.'
        },
        type: {
            text: 'Tekstualni kanal',
            category: 'Kanal kategorije',
            role: 'Uloga',
            emoji: 'Emote'
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
            dupaw: {
                // This is a name, can't be translated
                enable: 'Omogući dupaw',
                disable: 'Onemogući dupaw'
            }
        }
    },
    main: {
        title: 'Konfiguriraj {name}',
        option: {
            premium: {
                text: 'Enterprise Tier {tier}',
                buy: 'Kupite Enterprise'
            }
        },
        button: {
            logging: 'Evidentiranje',
            tickets: 'Ulaznice',
            moderation: 'Moderacija',
            starboard: 'Starboard',
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
            welcomer: 'Dobrodošlica',
            byer: 'Pozdrava'
        },
        page: {
            messages: {
                title: 'Poruka',
                name: 'Evidencija poruka',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način rada: {mode}'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal za evidenciju poruka'
                    }
                }
            },
            joins: {
                title: 'Ulazaka',
                name: 'Evidencija ulazaka',
                option: {
                    channel: 'Kanal: {channel}',
                    mode: 'Način rada: {mode}',
                    filter: 'Filter: {state}'
                },
                button: { filter: 'Filter' },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Evidencija ulazaka'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Dob okidač: **{trigger} dana**',
                            punishment: 'Kazna: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Kick',
                                timeout: 'Timeout',
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
                        command: 'Poruka: koristite `{command}`'
                    }
                },
                button: { message: 'Uredi poruku' },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal dobrodošlice'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Poruke dobrodošlice'
                    },
                    role: {
                        title: 'Uloga',
                        name: 'Uloga dobrodošlice'
                    }
                }
            },
            byer: {
                title: 'Pozdrav',
                name: 'Pozdrav',
                option: {
                    channel: 'Kanal: {channel}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristite `{command}`'
                    }
                },
                button: { message: 'Uredi poruku' },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal pozdrava'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Pozdravna poruka'
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
            }
        },
        button: {
            forceReason: {
                enable: 'Obavezan razlog',
                disable: 'Izborni razlog'
            },
            logging: {
                disable: 'Onemogući evidentiranje',
                enable: 'Omogući evidentiranje'
            },
            texts: 'Promijenite tekstove',
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
                title: 'Kategorija',
                name: 'Kategorija ulaznica'
            },
            role: {
                title: 'Uloga osoblja',
                name: 'Uloga osoblja za ulaznice'
            },
            descriptions: {
                title: 'Tekstovi',
                name: 'Opisi ulaznica',
                button: {
                    texts: 'Pregled ulaznice',
                    topic: 'Promijenite temu',
                    unclaimed: 'Promijenite nepotraživani tekst',
                    claimed: 'Promijenite deklarirani tekst'
                },
                page: {
                    unclaimed: {
                        title: 'Nepotraživano',
                        name: 'Opis nenajavljene karte'
                    },
                    claimed: {
                        title: 'Zatraženo',
                        name: 'Opis zatražene ulaznice'
                    },
                    topic: {
                        title: 'Tema',
                        name: 'Tema ulaznica'
                    }
                }
            },
            logging: {
                title: 'Evidentiranje',
                name: 'Evidencija ulaznica'
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
                name: 'Zaobilazna uloga'
            },
            logging: {
                title: 'Evidentiranje',
                name: 'Evidentiranje moderacije'
            },
            filter: {
                title: 'Filter',
                name: 'Moderacijski filter',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbrisati',
                        timeout: 'timeout'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    editWords: 'Uredite popis riječi',
                    message: 'Uredi poruku',
                    timeout: 'Trajanje timeout-a',
                    actions: {
                        title: 'Upravljajte akcijom',
                        selected: 'Odabran',
                        option: {
                            reply: 'Odgovor',
                            delete: 'Izbrisati',
                            timeout: 'Izbrisati'
                        }
                    }
                },
                page: {
                    words: {
                        title: 'Riječi',
                        name: 'Zabranjene riječi',
                        awaitMessage: 'Pošaljite jednu ili više riječi koje bi se trebale staviti na crnu listu.\nMolimo **koristite samo** znakove od `A-Z`\nRazdvojite riječi sa `, ` da biste dodali više riječi.',
                        bulkAdded: 'Uspješno dodano {amout} novih riječi na crnu listu.',
                        added: 'Uspješno dodana "`{word}`" kao nova riječ na crnoj listi.',
                        removed: 'Uspješno uklonjena "`{word}`" kao riječ s crne liste.'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Odgovor na zabranjenu riječ'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'Trajanje timeout-a',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Anti Scam moderacija',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbrisati',
                        timeout: 'timeout'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Timeout: {time}'
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
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'Anit Scam odgovor'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'Trajanje timeout-a',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'Anti Link moderacija',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    actionType: {
                        reply: 'odgovor',
                        delete: 'izbrisati',
                        timeout: 'timeout'
                    },
                    total: 'Ukupno: **{amount} riječi**',
                    timeout: 'Timeout: {time}'
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
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'Anit Scam odgovor'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'Trajanje timeout-a',
                        description: 'Korisnik će biti postavljen na Timeout za ovo vrijeme!\nUnos mora biti kraći od 18 dana.\nPrimjer: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Anti Link moderacija',
                option: {
                    message: 'Poruka: {message}',
                    actions: 'Akcije: {types}',
                    threshold: 'Okidač: **{threshold}poruka/5s**',
                    actionType: {
                        reply: 'odgovor',
                        timeout: 'timeout',
                        purge: 'izbriši'
                    },
                    timeout: 'Timeout: {time}'
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
                            timeout: 'Timeout',
                            purge: 'Izbriši'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Poruka',
                        name: 'Anit Scam odgovor'
                    },
                    timeout: {
                        title: 'Trajanje timeout-a',
                        name: 'Trajanje timeout-a',
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
            logging: {
                disable: 'Onemogući evidentiranje',
                enable: 'Omogući evidentiranje'
            },
            reply: {
                disable: 'Sakrij odgovor od',
                enable: 'Prikaži odgovor od'
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
                title: 'Channel',
                name: 'Starboard kanal'
            },
            emoji: {
                title: 'Emote',
                name: 'Starboard emote'
            },
            color: {
                title: 'Boja',
                name: 'Starboard Boja',
                description: 'Zalijepite HEX kod boje u chat.\nNabavite HEX kod boje s [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'Kod boje nije valjana HEX boja.\nNabavite HEX kod boje s [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Broj',
                name: 'potreban Broj',
                description: 'Pošaljite broj za postavljanje minimalnog zahtjeva za broj reakcija {emote}.'
            }
        }
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
                error: 'Cannot send message :/'
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