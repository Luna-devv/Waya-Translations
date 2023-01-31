/*
    \' is here to escape the character so the string doesn't end
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
            set: '{what} je uspješno postavljeno na **{data}**.',
            add: 'Successfully add {what} to **{data}**.',
            setCodeblock: '{what} je uspješno postavljeno na {data}',
            removed: 'Uspješno uklonjeno {what}.',
            remove: 'Successfully remove {what} from **{data}**.',
            fail: 'Ovo {what} ne postoji u ovom serveru..',
            lengthFail: '{what} je duži od {max} znakova! ({length} znakova, {relative} previše)',
            otherLengthFail: '{what} kraći je od {min} znakova! ({length} znakova, {relative} previše manje)',
            numberFail: '{what} nije broj između {a} i {b}!',
            roleFail: 'Ovom ulogom može upravljati samo Discord ili pripada korisniku bota.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Message Web Edit',
            description: 'Open [this Website]({url}) to start editing the message & embed.',
            open: 'Open Web Edit'
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
            modeChange: {
                analyst: 'Set to Analyst',
                cozy: 'Set to Cozy'
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
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe'
                    }
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
                    filter: 'Filter: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filter',
                    captcha: 'CAPTCHA Verification'
                },
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
                                ban: 'Banaj',
                                kick: 'Izbaci',
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
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Verified Role: {role}',
                            unverifiedrole: 'Unverified Role: {role}',
                            channel: 'Logging: {channel}',
                            color: 'Color: {color}'
                        },
                        disclaimer: 'Continue with {command}',
                        button: {
                            verifiedrole: {
                                set: 'Set Verified Role',
                                edit: 'Edit Verified Role'
                            },
                            unverifiedrole: {
                                set: 'Set Unverified Role',
                                edit: 'Edit Unverified Role'
                            },
                            type: {
                                title: 'Set a CAPTCHA type',
                                selected: 'Selected'
                            },
                            color: 'Change Page Color'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Verified Role',
                                name: 'CAPTCHA verified Role'
                            },
                            unverifiedrole: {
                                title: 'Unverifiedrole Role',
                                name: 'CAPTCHA unverifiedrole Role'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging Channel'
                            },
                            role: {
                                title: 'Role',
                                name: 'failed CAPTCHA role'
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
                title: 'Dobrodošlica',
                name: 'Dobrodošlica',
                option: {
                    channel: 'Kanal: {channel}',
                    role: 'Roles: {role}',
                    message: {
                        message: 'Poruka: {message}',
                        command: 'Poruka: koristite `{command}`'
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
                warnings: {
                    afterleaveXautodelete: 'We don\'t recommend using **Auto Delete** and **Delete After Leave** simultaneously',
                    embedXcard: 'In embed card overwrites your custom embed image'
                },
                button: {
                    message: 'Uredi poruku',
                    imgcard: 'Edit Card',
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
                    dm_webedit: 'DM Message Embed Editor',
                    afterleave_webedit: 'After Leave Embed Editor'
                },
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
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'Auto Delete',
                        description: 'The Welcomer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    },
                    dm: { button: { disable: 'Disable DM message' } },
                    imgcard: {
                        title: 'Card',
                        option: { background: 'Background: {url}' },
                        button: {
                            background: {
                                set: 'Set Custom Background',
                                edit: 'Edit Custom Background'
                            },
                            deleteBackground: 'Delete Background',
                            inEmbed: {
                                enable: 'Show Image in Embed',
                                disable: 'Don\'t Show Image in Embed'
                            }
                        },
                        page: {
                            background: {
                                title: 'Background',
                                name: 'Card Background',
                                description: 'The link must be a **direct image URL**, it also must be a {scheme} type link.\nWe recommend a ratio of {ratio} and a min resolution of {resolution}.'
                            }
                        }
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
                    },
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                button: {
                    message: 'Uredi poruku',
                    autodelete: 'Postavite automatsko brisanje'
                },
                page: {
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal pozdrava'
                    },
                    message: {
                        title: 'Poruka',
                        name: 'Pozdravna poruka'
                    },
                    autodelete: {
                        title: 'Automatsko brisanje',
                        name: 'Automatsko brisanje',
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
            }
        },
        button: {
            forceReason: {
                enable: 'Obavezan razlog',
                disable: 'Izborni razlog'
            },
            logging: {
                edit: 'Set Logging Channel',
                set: 'Change Logging Channel'
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
            embeds: 'Change Embeds',
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
                    texts: 'Preview Ticket',
                    topic: 'Change Topic',
                    title: 'Promjena tekst naslova',
                    unclaimed: 'Change Unclaimed Embed',
                    claimed: 'Change Claimed Embed'
                },
                page: {
                    title: {
                        title: 'Naslov',
                        name: 'Naslov za ulaznicu'
                    },
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
                    deleteAll: 'Očisti popis riječi',
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
                    },
                    export: 'Show word list'
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
                        name: 'Anti Link odgovor'
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
            blacklistedChannels: 'Edit Blacklisted Channels',
            delete: {
                disable: 'Disable Delete <{reactions} Reactions',
                enable: 'Enable Delete <{reactions} Reactions'
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
                name: 'Starboard kanal'
            },
            emoji: {
                title: 'Emote',
                name: 'Starboard emote'
            },
            color: {
                title: 'Boja',
                name: 'Starboard Boja',
                description: 'Paste a Hex color into the chat you want to use.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Broj',
                name: 'potreban Broj',
                description: 'Pošaljite broj za postavljanje minimalnog zahtjeva za broj reakcija {emote}.'
            },
            blacklistedRole: {
                title: 'Zabrani Ulogu',
                name: 'zabranjena Uloga'
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
        title: 'Konfiguriraj Razno',
        button: {
            embedMessages: 'Embed Poruke',
            levelRoles: 'Level Uloge',
            leaderboards: 'Leaderboards'
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
                    roles_upsell: 'Pretplatite se da biste dobili {count}+',
                    channel: 'Kanal: {channel}',
                    channel_none: 'kanal poruka',
                    message: 'Poruka: {message}'
                },
                button: {
                    message: 'Uredi poruku',
                    addrole: 'Dodaj Level',
                    select: {
                        title: 'Chose a Level Role you want to edit',
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
                        name: 'Odgovor na višu razinu'
                    },
                    channel: {
                        title: 'Kanal',
                        name: 'Kanal za višu razinu'
                    },
                    addRole: {
                        title: 'Nova Uloga Razine',
                        limit: 'Dosegli ste ograničenje servera od **{count}/{max} uloga na razini**!',
                        alreadExists: 'Nagradbena uloga za **{messages} poruka** već je postavljena ulogom **{role}**.',
                        success: 'Uspješno ste dodali ovu ulogu razine. Svaki korisnik koji dođe do **{messages} poruka** sada će dobiti ulogu **{role}**!',
                        page: {
                            messageCount: {
                                title: 'Broj Poruka',
                                name: 'potreban broj poruka',
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
                title: 'Leaderboards',
                option: { blacklisted: 'Blacklisted: {channels}' },
                button: { blacklistedChannels: 'Edit Blacklisted Channels' }
            }
        }
    },
    followNews: {
        title: 'Pratite novosti',
        name: 'Pratite novosti'
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