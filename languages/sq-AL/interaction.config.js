/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Verifiko të dhënat...',
    notAllowed: 'Ju nuk mund ta përdorni këtë menu.',
    prefix: {
        name: 'Prefiks/i',
        set: 'U përditësua me sukses prefiksi i Serverit në {prefix}!',
        noSpace: 'Ju lutemi vini re se nuk mund të përdorni hapësira brenda prefiksit! Lejohet vetëm në fund.',
        disclaimer: 'Kjo NUK vlen për komandat "/" (Slash)'
    },
    global: {
        // will be the same everywhere
        none: 'asnje',
        useButtons: 'Zgjidhni një opsion që dëshironi të modifikoni duke përdorur butonat më poshtë.',
        developer: {
            bypass: 'Ju nuk keni "MANAGE_GUILD" për të hyrë në këtë panel..\nDëshironi të vazhdoni akoma?',
            choice: {
                access: 'Jam i sigurt, po',
                abord: 'Jo'
            },
            notice: 'kujdes - zbatohen privilegjet e zhvilluesit..'
        },
        upsell: 'Abonohu ​​për të marrë {count} më shumë',
        permissions: 'Mungon: {perms}',
        placeholders: 'Vendmbajtësi',
        await: {
            channel: 'Përmendni një kanal ose ngjisni Id-në e kanalit në bisedë.\nShkruani {string} për të hequr kanalin.',
            category: 'Përmendni një kategori ose ngjisni Id-në e kategorisë në bisedë.\nShkruani {string} për të hequr kategorinë.',
            role: 'Përmendni një rol ose ngjitni Id-në e rolit në bisedë.\nShkruani {string} për të hequr rolin.',
            message: 'Dërgoni një Mesazh i cili duhet të përdoret si {what}.',
            emote: 'Send an Emoji which should be used as {what}.\nType {string} to remove the emotes.',
            color: 'Dërgo një kod ngjyrë hex i cili duhet të përdoret për {what}. Merrni një kod të vlefshëm në {url}.',
            patient: 'Aktivizimi i kësaj mund të zgjasë disa sekonda, ju lutemi prisni..'
        },
        success: {
            set: 'U vendos me sukses {what} në **{data}**.',
            add: 'Shtoni me sukses {what} te **{data}**.',
            setCodeblock: 'U caktua me sukses {what} në {data}',
            removed: 'U hoq me sukses {what}.',
            remove: 'Hiq me sukses {what} nga **{data}**.',
            fail: 'Kjo {what} nuk ekziston në këtë Server..',
            lengthFail: '{what} është më i gjatë se {max} karaktere! ({length} karaktere, {relative} shumë)',
            otherLengthFail: '{what} është më i shkurtër se {min} karaktere! ({length} karaktere, {relative} shumë më pak)',
            numberFail: '{what} nuk është një numër midis {a} dhe {b}!',
            roleFail: 'Ky rol është i menaxhueshëm vetëm nga Discord ose i përket një përdoruesi bot.',
            colorFail: 'Nuk u dha asnjë kod i vlefshëm ngjyrash gjashtëkëndor. Merrni një kod të vlefshëm në {url}.',
            emoteFail: 'Nuk ke dërguar emocione të vlefshme. Mbështeten vetëm mosmarrëveshjet e personalizuara dhe emoji-të e paracaktuar.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Redaktimi në ueb i mesazheve',
            description: 'Hapni [këtë faqe interneti]({url}) për të filluar redaktimin dhe futjen e mesazhit.',
            open: 'Hapni Redaktimin e Uebit'
        },
        type: {
            text: 'Kanali i tekstit',
            category: 'Kanali i kategorisë',
            role: 'Roli',
            emoji: 'Emote'
        },
        state: {
            enabled: 'Aktivizuar',
            disabled: 'E çaktivizuar'
        },
        option: {
            required: 'E nevojshme',
            optional: 'Fakultative'
        },
        button: {
            back: 'Mbrapa',
            disable: 'Çaktivizo',
            enable: 'Aktivizo',
            channel: {
                set: 'Cakto kanalin',
                edit: 'Redakto kanalin'
            },
            category: {
                set: 'Cakto kategorinë',
                edit: 'Redakto Kategorinë'
            },
            role: {
                set: 'Vendosja e rolit',
                edit: 'Redakto rolin'
            },
            mode: {
                analyst: 'Analist',
                cozy: 'Komode'
            },
            modeChange: {
                analyst: 'Cakto në Analist',
                cozy: 'Cakto në Komode'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Aktivizo dupaw',
                disable: 'Çaktivizo dupaw'
            }
        }
    },
    main: {
        title: 'Konfiguro {name}',
        option: {
            premium: {
                text: 'Niveli i Abonimit {tier}',
                buy: 'Blej Abonimin'
            }
        },
        button: {
            logging: 'Logging',
            tickets: 'Ticketat',
            moderation: 'Moderues',
            starboard: 'Starboard',
            misc: 'Të ndryshme',
            followNews: 'Ndiqni Lajmet',
            staff: 'Menaxho Serverin',
            exit: 'Dilni',
            help: 'Mbështetja'
        }
    },
    logging: {
        title: 'Konfiguro Logging',
        button: {
            messages: 'Mesazhet',
            joins: 'Bashkimet',
            welcomer: 'Mikpritëse',
            byer: 'Pershendetjet'
        },
        page: {
            messages: {
                title: 'Mesazhet',
                name: 'Logging i mesazheve',
                option: {
                    channel: 'Kanali: {channel}',
                    mode: 'Modaliteti: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Aktivizo Snipe',
                        disable: 'Çaktivizo Snipe',
                        timeout: 'change snipe clear duration per message'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
                        name: 'Kanali i Logging të mesazheve'
                    }
                }
            },
            joins: {
                title: 'Bashkimet',
                name: 'Logging i Bashkimeve',
                option: {
                    channel: 'Kanali: {channel}',
                    mode: 'Modaliteti: {mode}',
                    filter: 'Filtri: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filtër',
                    captcha: 'Verifikimi CAPTCHA'
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
                        name: 'Logging i Bashkimeve'
                    },
                    filter: {
                        title: 'Filtër',
                        option: {
                            trigger: 'Shkaktësi i moshës: **{trigger} ditë**',
                            punishment: 'Dënimi: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Kick',
                                timeout: 'Timeout',
                                role: 'Cakto rolin {role}',
                                none: 'asnje'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Çaktivizo njoftimin DM',
                                enable: 'Aktivizo njoftimin DM'
                            },
                            trigger: {
                                set: 'Cakto këmbëzën e moshës',
                                edit: 'Modifiko nxitjen e moshës'
                            },
                            punishment: {
                                title: 'Vendosni një dënim',
                                current: 'Aktuale',
                                option: {
                                    ban: 'Ban përdoruesin',
                                    kick: 'Kick përdoruesin',
                                    timeout: 'Timeout përdoruesin',
                                    role: 'Cakto rol'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Shkaktësi',
                                name: 'kërkesa e moshës',
                                description: 'Nëse një account është më e re se kjo moshë, ata do të ndëshkohen!\nHyrja duhet të jetë nga 0 deri në 28 ditë.'
                            },
                            role: {
                                title: 'Roli',
                                name: 'roli i ndëshkimit'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Roli i verifikuar: {role}',
                            unverifiedrole: 'Roli i paverifikuar: {role}',
                            channel: 'Logging: {channel}',
                            color: 'Ngjyra: {color}'
                        },
                        disclaimer: 'Vazhdo me {command}',
                        button: {
                            verifiedrole: {
                                set: 'Cakto rolin e verifikuar',
                                edit: 'Redakto rolin e verifikuar'
                            },
                            unverifiedrole: {
                                set: 'Cakto rolin e paverifikuar',
                                edit: 'Redakto rolin e paverifikuar'
                            },
                            type: {
                                title: 'Cakto një lloj CAPTCHA',
                                selected: 'Zgjedhur'
                            },
                            color: 'Ndrysho ngjyrën e faqes'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Roli i verifikuar',
                                name: 'Roli i verifikuar nga CAPTCHA'
                            },
                            unverifiedrole: {
                                title: 'Roli i paverifikuar',
                                name: 'Roli i paverifikuar nga CAPTCHA'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'Kanali i Logging të CAPTCHA'
                            },
                            role: {
                                title: 'Roli',
                                name: 'roli i dështuar CAPTCHA'
                            },
                            color: {
                                title: 'Ngjyra e faqes',
                                name: 'Ngjyra e faqes',
                                description: 'Ngjitni një ngjyrë Hex në bisedën që dëshironi të përdorni.\nNe ju rekomandojmë të përdorni një ngjyrë afër të zezës me ngopje shumë të lartë.\nVini re se ngjyra në pasaportë do të duket gjithmonë më e ndritshme.\nMerr një kod ngjyre Hex nga [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Kodi i ngjyrës nuk është një ngjyrë Hex e vlefshme.\nMerr një kod ngjyre Hex nga [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Mikpritës',
                name: 'Mikpritës',
                option: {
                    channel: 'Kanali: {channel}',
                    role: 'Rolet: {role}',
                    message: {
                        message: 'Mesazhi: {message}',
                        command: 'Mesazhi: përdorni `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'Mesazhi AL: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'Mesazhi AL: përdorni `{command}`'
                    },
                    pings: 'Ping: {channels}',
                    autodelete: 'Fshij automatikisht: **{time}**',
                    autodelete_never: 'kurrë'
                },
                warnings: {
                    afterleaveXautodelete: 'Ne nuk rekomandojmë përdorimin e **Fshij automatik** dhe **Fshi pas largimit** njëkohësisht',
                    embedXcard: 'Karta në embed mbishkruan imazhin tuaj të personalizuar të ngulitjes',
                    channelMissmatch: 'Kanali i rrjetës së valës është i ndryshëm nga mesazhi i përshëndetjes'
                },
                button: {
                    nextpage: 'Faqja tjetër ({cur}/{total})',
                    message: 'Redakto mesazhin',
                    imgcard: 'Modifiko kartën',
                    pings: 'Redakto Kanalet Ping',
                    autodelete: 'Fshirja automatike',
                    assignRolesAfterRejoin: {
                        enable: 'Ricakto rolet pas Ribashkimit',
                        disable: 'Çaktivizo Ricaktimin e roleve pas Ribashkimit'
                    },
                    afterleave: {
                        title: 'Çfarë duhet të ndodhë me mesazhin nëse anëtari largohet?',
                        selected: 'Zgjedhur',
                        option: {
                            nothing: 'Asgjë',
                            edit: 'Redakto në larghim',
                            delete: 'Fshij në larghim'
                        }
                    },
                    dm: 'Mesazh DM',
                    afterleave_webedit: 'Pas largimit nga Redaktori i Embed',
                    wave: 'Butoni i valës',
                    reactions: 'Reagimet'
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
                        name: 'Kanali i mirepritur'
                    },
                    message: {
                        title: 'Mesazh',
                        name: 'Mesazh Mirëpritës'
                    },
                    role: {
                        title: 'Roli',
                        name: 'Roli i mirëseardhjes'
                    },
                    autodelete: {
                        title: 'Fshij automatikisht',
                        name: 'Fshij automatikisht',
                        description: 'Mesazhi i Mirëpritësit do të fshihet pas kësaj kohe.\nNe ju rekomandojmë ta mbani këtë kohë të shkurtër (vetëm disa sekonda).\nShembull: `1m 3s`'
                    },
                    dm: { button: { disable: 'Çaktivizo mesazhin DM' } },
                    reactions: {
                        title: 'Reagimet',
                        option: {
                            welcomer: 'Reagimet e mesazhit të mirëseardhjes: {emotes}',
                            firstmessage: 'Reagimet e mesazhit të parë: {emotes}'
                        },
                        button: {
                            welcomer: 'Mesazh Mirëpritës',
                            firstmessage: 'Mesazhi i Anëtarit të Parë'
                        },
                        page: {
                            welcomer: {
                                title: 'Mirëpritsi',
                                name: 'reagimi automatik i mirëseardhjes'
                            },
                            firstmessage: {
                                title: 'Mesazh i par',
                                name: 'reagim automatik'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Kartë',
                        option: { background: 'Sfondi: {url}' },
                        button: {
                            background: {
                                set: 'Vendos Sfond personalizuar',
                                edit: 'Redakto sfondin e personalizuar'
                            },
                            deleteBackground: 'Fshi sfondin',
                            inEmbed: {
                                enable: 'Shfaq imazhin në Embed',
                                disable: 'Mos e shfaq imazhin në Embed'
                            }
                        },
                        page: {
                            background: {
                                title: 'Sfondi',
                                name: 'Sfondi i kartës',
                                description: 'Lidhja duhet të jetë një **URL e imazhit të drejtpërdrejtë**, gjithashtu duhet të jetë një lidhje e tipit {scheme}.\nNe rekomandojmë një raport prej {ratio} dhe një rezolucion minimal prej {resolution}.'
                            }
                        }
                    },
                    dm: { title: 'Mesazh direkt' },
                    wavebtn: {
                        title: 'Përshëndetje',
                        option: {
                            send: 'Dërgo: {type}',
                            label: 'Labeli: {label}'
                        },
                        button: {
                            label: 'Ndrysho tekstin e butonit',
                            ping: {
                                enable: 'Aktivizo Ping',
                                disable: 'Çaktivizo Ping'
                            },
                            type: {
                                title: 'Zgjidhni një lloj përgjigjeje',
                                option: {
                                    '0': 'Sticker e rastësishme',
                                    '1': 'Mesazh i personalizuar'
                                }
                            },
                            color: {
                                title: 'Zgjidhni një ngjyrë për Butonin',
                                option: {
                                    blurple: 'Blu/vjollcë',
                                    // You may leave that
                                    grey: 'Gri',
                                    green: 'Jeshil',
                                    red: 'Kuq'
                                }
                            }
                        },
                        page: {
                            label: {
                                title: 'Label',
                                name: 'Tekst i butonit'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Byer',
                name: 'Byer',
                option: {
                    channel: 'Kanali: {channel}',
                    message: {
                        message: 'Mesazhi: {message}',
                        command: 'Mesazhi: përdorni `{command}`'
                    },
                    autodelete: 'Fshij automatikisht: **{time}**',
                    autodelete_never: 'kurrë'
                },
                button: {
                    message: 'Redakto mesazhin',
                    autodelete: 'Fshirja automatike'
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
                        name: 'Kanali Byer'
                    },
                    message: {
                        title: 'Mesazh',
                        name: 'Mesazhi Byer'
                    },
                    autodelete: {
                        title: 'Fshij automatikisht',
                        name: 'Fshij automatikisht',
                        description: 'Mesazhi Byer do të fshihet pas kësaj kohe.\nNe ju rekomandojmë ta mbani këtë kohë të shkurtër (vetëm disa sekonda).\nShembull: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Konfiguro Ticketa',
        option: {
            channel: 'Kategoria: {channel}',
            staff: 'Stafi: {role}',
            logging: 'Logging: {channel}',
            forceReason: 'Arsyeja: {state}',
            naming: 'Emërtimi: {type}',
            namingType: {
                username: 'Emri i përdoruesit',
                userid: 'ID-ja e përdoruesit',
                random: 'E rastësishme'
            }
        },
        button: {
            forceReason: {
                enable: 'Arsyeja e forcës',
                disable: 'Arsyeja Fakultative'
            },
            logging: {
                set: 'Cakto kanalin e Logging',
                edit: 'Ndrysho kanalin e Logging'
            },
            transcript: {
                disable: 'Çaktivizo transkriptet',
                enable: 'Ruaj transkriptet'
            },
            openReason: {
                disable: 'Çaktivizoni arsyen e hapur',
                enable: 'Aktivizo arsyen e hapur'
            },
            leaveAutoclose: {
                disable: 'Çaktivizo mbylljen automatike të largimit',
                enable: 'Aktivizo mbylljen automatike të largimit'
            },
            embeds: 'Ndrysho Embeds',
            naming: {
                title: 'Vendosni një lloj emërtimi',
                current: 'Aktuale',
                option: {
                    username: 'Emri i përdoruesit',
                    userid: 'ID-të e përdoruesve',
                    random: 'Id i rastësishëm'
                }
            }
        },
        page: {
            category: {
                title: 'Kategoria',
                name: 'Kategoria e Ticketav'
            },
            role: {
                title: 'Roli i Stafit',
                name: 'Roli i stafit të Ticketav'
            },
            descriptions: {
                title: 'Tekste',
                name: 'Përshkrimet e Ticketave',
                button: {
                    texts: 'Parashikimi i Ticketes',
                    topic: 'Ndrysho Temën',
                    unclaimed: 'Ndrysho Embed të padeklaruar',
                    claimed: 'Ndrysho Embed të pretenduar'
                },
                page: {
                    unclaimed: {
                        title: 'E pamëtuar',
                        name: 'Përshkrimi i biletës së pakërkuar'
                    },
                    claimed: {
                        title: 'E pretenduar',
                        name: 'Përshkrimi i Ticketes së pretenduar'
                    },
                    topic: {
                        title: 'Temë',
                        name: 'Tema e Ticketave'
                    }
                }
            },
            logging: {
                title: 'Logging',
                name: 'Logging e Ticketave'
            }
        }
    },
    moderation: {
        title: 'Konfiguro Moderimin',
        option: {
            role: 'Roli i anashkalimit: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Lista e Zezë',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Link',
            antiSpam: 'Anti Spam',
            bypassRole: {
                edit: 'Redakto rolin e anashkalimit',
                set: 'Cakto rolin e anashkalimit'
            },
            logging: {
                edit: 'Redakto kanalin e Logging',
                set: 'Cakto kanalin e Logging'
            }
        },
        page: {
            role: {
                title: 'Roli i anashkalimit',
                name: 'Roli i anashkalimit'
            },
            logging: {
                title: 'Logging',
                name: 'Logs e moderimit'
            },
            filter: {
                title: 'Filtër',
                name: 'Filtri i Moderimit',
                option: {
                    message: 'Mesazhi: {message}',
                    actions: 'Veprimet: {types}',
                    actionType: {
                        reply: 'përgjigje',
                        delete: 'fshij',
                        timeout: 'timeout'
                    },
                    total: 'Gjithsej: **{amount} fjalë**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Pastro listën e fjalëve',
                    editWords: 'Redakto listën e fjalëve',
                    message: 'Redakto mesazhin',
                    timeout: 'Kohëzgjatja e Timeoutit',
                    actions: {
                        title: 'Menaxhoni një veprim',
                        selected: 'Zgjedhur',
                        option: {
                            reply: 'Përgjigje',
                            delete: 'Fshij',
                            timeout: 'Timeout'
                        }
                    },
                    export: 'Shfaq listën e fjalëve'
                },
                page: {
                    delete: {
                        title: 'Pastro listën e fjalëve',
                        description: 'Jeni i sigurt se doni të pastroni të gjitha fjalët në blacklist?',
                        page: {
                            confirm: {
                                title: 'Konfirmuar',
                                description: 'U fshi me sukses të gjitha fjalët në blacklist! Tani mund ta heqësh këtë mesazh.'
                            },
                            abord: {
                                title: 'I abortuar',
                                description: 'Asnjë veprim nuk është ndërmarrë! Tani mund ta heqësh këtë mesazh.'
                            }
                        }
                    },
                    words: {
                        title: 'Fjalët',
                        name: 'Fjalë në blacklist',
                        awaitMessage: 'Dërgoni një ose disa fjalë që duhet të futen në blacklist.\nJu lutem **përdorni** vetëm karaktere nga "A-Z".\nNdani fjalët me `,` për të shtuar fjalë në masë.',
                        bulkAdded: 'U shtuan me sukses {amout} fjalë të reja në blacklist.',
                        added: 'U shtua me sukses "`{word}`" si fjalë e re në blacklist.',
                        removed: 'U hoq me sukses "`{word}`" si fjalë në blacklist.'
                    },
                    message: {
                        title: 'Mesazh',
                        name: 'Përgjigje fjalësh në blacklist'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'Kohëzgjatja e Timeoutit',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Moderimi kundër Scam',
                option: {
                    message: 'Mesazh: {message}',
                    actions: 'Veprimet: {types}',
                    actionType: {
                        reply: 'përgjigje',
                        delete: 'fshij',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    message: 'Redakto mesazhin',
                    timeout: 'Kohëzgjatja e Timeoutit',
                    actions: {
                        title: 'Menaxhoni një veprim',
                        selected: 'Zgjedhur',
                        option: {
                            reply: 'Përgjigje',
                            delete: 'Fshij',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Mesazh',
                        name: 'Përgjigje Anti Scam'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'Kohëzgjatja e Timeoutit',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'Moderimi kundër Link',
                option: {
                    message: 'Mesazh: {message}',
                    actions: 'Veprimet: {types}',
                    actionType: {
                        reply: 'përgjigje',
                        delete: 'fshij',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Mos lejo media',
                        enable: 'Lejo media'
                    },
                    message: 'Redakto mesazhin',
                    timeout: 'Kohëzgjatja e Timeoutit',
                    actions: {
                        title: 'Menaxhoni një veprim',
                        selected: 'Zgjedhur',
                        option: {
                            reply: 'Përgjigje',
                            delete: 'Fshij',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Mesazh',
                        name: 'Përgjigje Anti Link'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'Kohëzgjatja e Timeoutit',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Moderimi kundër Spam',
                option: {
                    message: 'Mesazh: {message}',
                    actions: 'Veprimet: {types}',
                    threshold: 'Pragu: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'përgjigje',
                        timeout: 'timeout',
                        purge: 'spastroji'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Redakto pragun',
                    message: 'Redakto mesazhin',
                    timeout: 'Kohëzgjatja e Timeoutit',
                    actions: {
                        title: 'Menaxhoni një veprim',
                        selected: 'Zgjedhur',
                        option: {
                            reply: 'Përgjigje',
                            timeout: 'Timeout',
                            purge: 'Spastroji'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Mesazh',
                        name: 'Përgjigje Anti Spam'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'Kohëzgjatja e Timeoutit',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Pragu',
                        name: 'Pragu i spamit',
                        description: 'Unë do ta konsideroj atë si spam, kur kjo shumë të arrihet brenda 5 sekondave!\nHyrja duhet të jetë midis 1 dhe 99.'
                    }
                }
            }
        }
    },
    starboard: {
        title: 'Konfiguro Starboard',
        button: {
            emoji: 'Ndrysho Emoji',
            color: 'Ndrysho ngjyrën',
            count: 'Ndrysho numërimin',
            nsfw: {
                disable: 'Çaktivizo NSFW',
                enable: 'Aktivizo NSFW'
            },
            bots: {
                disable: 'Çaktivizo robotët',
                enable: 'Aktivizo robotët'
            },
            selfReact: {
                disable: 'Çaktivizo Vetë Reagimin',
                enable: 'Aktivizo Vetë-Reagimin'
            },
            reply: {
                disable: 'Fshih Përgjigjja tek',
                enable: 'Shfaq Përgjigjur në'
            },
            edits: {
                disable: 'Mos lejo modifikimet',
                enable: 'Lejo modifikimet'
            },
            logging: {
                disable: 'Çaktivizo Logging',
                enable: 'Aktivizo Logging'
            },
            blacklist: {
                set: 'Cakto rolin në blacklist',
                change: 'Redakto rolin në blacklist'
            },
            blacklistedChannels: 'Redaktoni kanalet në blacklist',
            delete: {
                disable: 'Çaktivizo fshij <{reactions} Reagime',
                enable: 'Aktivizo fshij <{reactions} Reagime'
            },
            display: {
                title: 'Vendosni një stil ekrani',
                selected: 'Zgjedhur',
                option: {
                    tag: 'Etiketë',
                    username: 'Emri i përdoruesit',
                    nickname: 'Pseudonimi',
                    guildProfile: 'Profili i serverit'
                }
            }
        },
        option: {
            channel: 'Kanali: {channel}',
            color: 'Ngjyra: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Numërimi: {count}',
            blacklistedRole: 'Blacklist: {role}',
            display: 'Shfaqë: {profileType}',
            profileType: {
                tag: 'Etiketë',
                username: 'Emri i përdoruesit',
                nickname: 'Pseudonimi',
                guildProfile: 'Profili i serverit'
            }
        },
        page: {
            channel: {
                title: 'Kanal/i',
                name: 'Kanali Starboard'
            },
            emoji: {
                title: 'Emoji',
                name: 'Emoji Starboard'
            },
            color: {
                title: 'Ngjyrë',
                name: 'Ngjyra e Starboard'
            },
            count: {
                title: 'Numërimi',
                name: 'Numri i kërkuar',
                description: 'Dërgo një numër për të vendosur kërkesën minimale të numrit të reagimeve {emote}.'
            },
            blacklistedRole: {
                title: 'Roli Blacklist',
                name: 'Roli blacklist'
            },
            blacklistedChannels: {
                title: 'Kanalet e blacklist',
                name: 'Lista e kanaleve në blacklist',
                description: 'Përmendni një kanal/kategori ose ngjitni ID-në e kanalit në bisedë.\nVendosni mesazhin me `+` për të shtuar ose `-` për të hequr kanalet.\nJu mund të dërgoni kanale të shumta të ndara me një hapësirë.\nShkruani `none` për të hequr të gjitha kanalet.',
                missingPrefix: 'Mesazhit duhet të parashtesohet me `+` për të shtuar ose `-` për të hequr kanalet.'
            }
        }
    },
    misc: {
        title: 'Konfiguro sene të ndryshme',
        button: {
            embedMessages: 'Mesazhet Embed',
            levelRoles: 'Rolet e nivelit',
            leaderboards: 'Tabelat e klasifikimit',
            stickymessages: 'Stickymessages'
        },
        page: {
            embedMessages: {
                title: 'Mesazhet Embed',
                description: '**Cfare eshte kjo?**\nNëse një lidhje mesazhi po dërgohet, {name} do të përgjigjet me përmbajtjen e atij mesazhi!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Lejo Guilds të tjera të ngulitin mesazhe nga këtu',
                        disable: 'Mos lejo Guilds të tjera për të futur mesazhe nga këtu'
                    },
                    color: 'Zgjidhni një ngjyrë për Embed',
                    display: {
                        title: 'Zgjidhni stilin e shfaqjes së autorit',
                        selected: 'Zgjedhur',
                        option: {
                            message: 'Përmbajtja e mesazhit',
                            author: 'Fusha e autorit',
                            footer: 'Fusha e Fundit'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Rolet e nivelit',
                option: {
                    roles: 'Rolet: **{count}/{max}**',
                    channel: 'Kanali: {channel}',
                    channel_none: 'kanal mesazhesh',
                    message: 'Mesazh: {message}'
                },
                button: {
                    message: 'Redakto mesazhin',
                    addrole: 'Shto nivelin',
                    select: {
                        title: 'Zgjidhni një rol të nivelit që dëshironi të modifikoni',
                        editing: 'Redaktimi',
                        option: {
                            name: '{messages} mesazhet',
                            description: 'Rolet: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Mesazh',
                        name: 'Përgjigja e nivelit lart'
                    },
                    channel: {
                        title: 'Kanal/i',
                        name: 'Kanali i nivelit lart'
                    },
                    addRole: {
                        title: 'Roli i nivelit të ri',
                        limit: 'Ke arritur kufirin e grupit të **{count}/{max} roleve të nivelit**!',
                        alreadExists: 'Një rol shpërblimi për **{messages} mesazhe** tashmë është caktuar me rolin **{role}**.',
                        success: 'U shtua me sukses ky rol në nivel. Çdo përdorues që arrin **{messages} mesazhe** do të marrë rolin **{role}** tani!',
                        page: {
                            messageCount: {
                                title: 'Numri i mesazheve',
                                name: 'numri i kërkuar i mesazheve',
                                description: 'Dërgoni një numër që përdoruesi do të duhet ta ketë si në numërimin e mesazheve për të marrë rolin e zgjedhur.'
                            },
                            role: {
                                title: 'Roli',
                                name: 'roli i pranishëm'
                            }
                        }
                    },
                    editRole: {
                        title: 'Redakto rolin e nivelit',
                        option: {
                            role: 'Rolet: {role}',
                            messages: 'Mesazhet: {messages}'
                        },
                        button: {
                            messages: 'Ndrysho numrin e mesazheve',
                            role: 'Ndryshoni rol',
                            delete: 'Fshij'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Tabelat e klasifikimit',
                option: { blacklisted: 'Në listën e zezë: {channels}' },
                button: {
                    blacklistedChannels: 'Redaktoni kanalet në listën e zezë',
                    reset: {
                        disable: 'Mos i rivendosni të dhënat e anëtarëve gjatë larghimit',
                        enable: 'Rivendos të dhënat e anëtarëve në larghim'
                    },
                    roles: 'Rolet e shpërblimit'
                },
                page: {
                    roles: {
                        title: 'Rolet kryesore',
                        option: {
                            messages: 'Rolet e mesazhit: {roles}',
                            voiceminutes: 'Rolet e kanalit zanor: {roles}'
                        },
                        warnings: {
                            order: 'Ju lutemi zgjidhni së pari rolin # 1, pastaj # 2 dhe më pas # 3',
                            permsOrder: 'Ju lutemi kontrolloni që të gjitha rolet janë nën rolin {bot}'
                        },
                        button: {
                            messages: '3 rolet kryesore të mesazheve',
                            voiceminutes: '3 rolet kryesore të minutave zanore'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Stickymessages',
                button: { timeout: 'Change the timeout duration' }
            }
        }
    },
    followNews: {
        title: 'Ndiqni përditësimet e lajmeve',
        name: 'Ndiqni Lajmet'
    },
    staff: {
        title: 'Menaxho {name}',
        option: { premium: 'Abonimi: {tier}' },
        button: {
            premium: 'Ndrysho nivelin premium',
            data: 'Eksporto të dhënat'
        },
        page: {
            data: {
                title: 'Eksporti i të dhënave',
                message: 'Të dhënat nga {name} shfaqen më poshtë.',
                error: 'Nuk mund te dergoj mesazh :/'
            },
            premium: {
                title: 'Konfiguro Abonimin',
                option: { tier: 'Niveli aktual: {tier}' },
                button: { tier: 'Niveli {tier}' }
            }
        }
    },
    exit: { title: 'Cilësimet e ruajtura dhe dola nga menyja e konfigurimit.' }
};