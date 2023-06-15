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
        upsell: 'Abonohu ​​për të marrë {count} më shumë',
        permissions: 'Mungon: {perms}',
        placeholders: 'Vendmbajtësi',
        await: {
            channel: 'Përmendni një kanal ose ngjisni Id-në e kanalit në bisedë.\nShkruani {string} për të hequr kanalin.',
            category: 'Përmendni një kategori ose ngjisni Id-në e kategorisë në bisedë.\nShkruani {string} për të hequr kategorinë.',
            role: 'Përmendni një rol ose ngjitni Id-në e rolit në bisedë.\nShkruani {string} për të hequr rolin.',
            message: 'Dërgoni një Mesazh i cili duhet të përdoret si {what}.',
            emote: 'Dërgo një Emoji i cili duhet të përdoret si {what}.\nShkruani {string} për të hequr emocionet.',
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
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Niveli i Abonimit {tier}',
                buy: 'Blej Abonimin'
            }
        },
        button: {
            logging: 'Logging',
            fun: 'Fun',
            tickets: 'Ticketat',
            moderation: 'Moderues',
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
            expressions: 'Sticker/Emojis',
            welcomer: 'Mikpritëse',
            byer: 'Pershendetjet'
        },
        page: {
            messages: {
                title: 'Mesazhet',
                name: 'message logging',
                option: {
                    channel: 'Kanali: {channel}',
                    mode: 'Modaliteti: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Aktivizo Snipe',
                        disable: 'Çaktivizo Snipe',
                        timeout: 'ndryshoni kohëzgjatjen e qartë të shapkës për mesazh'
                    }
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
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
                title: 'Bashkimet',
                name: 'join logging',
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
                        name: 'join logging'
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
                                name: 'CAPTCHA verified role'
                            },
                            unverifiedrole: {
                                title: 'Roli i paverifikuar',
                                name: 'CAPTCHA unverified role'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Roli',
                                name: 'roli i dështuar CAPTCHA'
                            },
                            color: {
                                title: 'Ngjyra e faqes',
                                name: 'page color',
                                description: 'Ngjitni një ngjyrë Hex në bisedën që dëshironi të përdorni.\nNe ju rekomandojmë të përdorni një ngjyrë afër të zezës me ngopje shumë të lartë.\nVini re se ngjyra në pasaportë do të duket gjithmonë më e ndritshme.\nMerr një kod ngjyre Hex nga [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'Kodi i ngjyrës nuk është një ngjyrë Hex e vlefshme.\nMerr një kod ngjyre Hex nga [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Mikpritës',
                name: 'welcomer',
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
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Roli',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Fshij automatikisht',
                        name: 'auto delete',
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
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Sfondi',
                                name: 'card background',
                                description: 'Lidhja duhet të jetë një **URL e imazhit të drejtpërdrejtë**, gjithashtu duhet të jetë një lidhje e tipit {scheme}.\nNe rekomandojmë një raport prej {ratio} dhe një rezolucion minimal prej {resolution}.'
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
                    dm: { title: 'Mesazh direkt' },
                    wavebtn: {
                        title: 'Përshëndetje',
                        option: {
                            send: 'Dërgo: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Labeli: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
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
                title: 'Byer',
                name: 'byer',
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
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Kanal/i',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Mesazh',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Fshij automatikisht',
                        name: 'auto delete',
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
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Roli i Stafit',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Tekste',
                name: 'ticket descriptions',
                button: {
                    texts: 'Parashikimi i Ticketes',
                    topic: 'Ndrysho Temën',
                    unclaimed: 'Ndrysho Embed të padeklaruar',
                    claimed: 'Ndrysho Embed të pretenduar',
                    closeEmote: 'Change Close Emote',
                    claimEmote: 'Change Claim Emote'
                },
                page: {
                    topic: {
                        title: 'Temë',
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
                name: 'bypass role'
            },
            logging: {
                title: 'Logging',
                name: 'moderation logs'
            },
            filter: {
                title: 'Filtër',
                name: 'moderation Filter',
                option: {
                    message: 'Mesazhi: {message}',
                    total: 'Gjithsej: **{amount} fjalë**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Pastro listën e fjalëve',
                    editWords: 'Redakto listën e fjalëve',
                    message: 'Redakto mesazhin',
                    timeout: 'Kohëzgjatja e Timeoutit',
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
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'U shtuan me sukses {amout} fjalë të reja në blacklist.',
                        added: 'U shtua me sukses "`{word}`" si fjalë e re në blacklist.',
                        removed: 'U hoq me sukses "`{word}`" si fjalë në blacklist.'
                    },
                    message: {
                        title: 'Mesazh',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'timeout duration',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'moderation anti scam',
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
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'timeout duration',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'moderation anti link',
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
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'timeout duration',
                        description: 'Përdoruesi do të vendoset në Timeout për këtë kohëzgjatje!\nHyrja duhet të jetë më pak se 18 ditë.\nShembull: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
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
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Kohëzgjatja e Timeoutit',
                        name: 'timeout duration',
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
    fun: {
        title: 'Configure Fun',
        button: {
            starboard: 'Starboard',
            counting: 'Counting'
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
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'starboard emoji'
            },
            color: {
                title: 'Ngjyrë',
                name: 'starboard color'
            },
            count: {
                title: 'Numërimi',
                name: 'requierd count',
                description: 'Dërgo një numër për të vendosur kërkesën minimale të numrit të reagimeve {emote}.'
            },
            blacklistedRole: {
                title: 'Roli Blacklist',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Kanalet e blacklist',
                name: 'blacklist channel list',
                description: 'Përmendni një kanal/kategori ose ngjitni ID-në e kanalit në bisedë.\nVendosni mesazhin me `+` për të shtuar ose `-` për të hequr kanalet.\nJu mund të dërgoni kanale të shumta të ndara me një hapësirë.\nShkruani `none` për të hequr të gjitha kanalet.',
                missingPrefix: 'Mesazhit duhet të parashtesohet me `+` për të shtuar ose `-` për të hequr kanalet.'
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
        title: 'Konfiguro sene të ndryshme',
        button: {
            embedMessages: 'Mesazhet Embed',
            levelRoles: 'Rolet e nivelit',
            leaderboards: 'Tabelat e klasifikimit',
            stickymessages: 'Mesazh ngjitës'
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
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Kanal/i',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'Roli i nivelit të ri',
                        limit: 'Ke arritur kufirin e grupit të **{count}/{max} roleve të nivelit**!',
                        alreadExists: 'Një rol shpërblimi për **{messages} mesazhe** tashmë është caktuar me rolin **{role}**.',
                        success: 'U shtua me sukses ky rol në nivel. Çdo përdorues që arrin **{messages} mesazhe** do të marrë rolin **{role}** tani!',
                        page: {
                            messageCount: {
                                title: 'Numri i mesazheve',
                                name: 'required message count',
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
                title: 'Mesazh ngjitës',
                button: {
                    timeout: 'Ndrysho kohëzgjatjen e timeout',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Ndiqni përditësimet e lajmeve',
        name: 'follow news'
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