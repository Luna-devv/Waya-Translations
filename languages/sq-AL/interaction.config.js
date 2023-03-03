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
        permissions: 'Mungon: {perms}',
        placeholders: 'Vendmbajtësi',
        await: {
            channel: 'Përmendni një kanal ose ngjisni Id-në e kanalit në bisedë.\nShkruani {string} për të hequr kanalin.',
            category: 'Përmendni një kategori ose ngjisni Id-në e kategorisë në bisedë.\nShkruani {string} për të hequr kategorinë.',
            role: 'Përmendni një rol ose ngjitni Id-në e rolit në bisedë.\nShkruani {string} për të hequr rolin.',
            message: 'Dërgoni një Mesazh i cili duhet të përdoret si {what}.',
            emote: 'Dërgo një Emoji i cili duhet të përdoret si {what}.'
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
            roleFail: 'Ky rol është i menaxhueshëm vetëm nga Discord ose i përket një përdoruesi bot.'
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
                    mode: 'Modaliteti: {mode}'
                },
                button: {
                    snipe: {
                        enable: 'Aktivizo Snipe',
                        disable: 'Çaktivizo Snipe'
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
                    embedXcard: 'Karta në embed mbishkruan imazhin tuaj të personalizuar të ngulitjes'
                },
                button: {
                    message: 'Redakto mesazhin',
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
                    dm: 'DM Message',
                    afterleave_webedit: 'After Leave Embed Editor'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Welcomer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Welcomer Message'
                    },
                    role: {
                        title: 'Role',
                        name: 'Welcomer Role'
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
                    },
                    dm: { title: 'Direct Message' }
                }
            },
            byer: {
                title: 'Byer',
                name: 'Byer',
                option: {
                    channel: 'Channel: {channel}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    },
                    autodelete: 'Auto delete: **{time}**',
                    autodelete_never: 'never'
                },
                button: {
                    message: 'Edit Message',
                    autodelete: 'Set Autodelete'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Byer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Byer Message'
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
        title: 'Configure Ticketing',
        option: {
            channel: 'Category: {channel}',
            staff: 'Staff: {role}',
            logging: 'Logging: {channel}',
            forceReason: 'Reason: {state}',
            naming: 'Naming: {type}',
            namingType: {
                username: 'Username',
                userid: 'UserId',
                random: 'Random'
            }
        },
        button: {
            forceReason: {
                enable: 'Force Reason',
                disable: 'Optional Reason'
            },
            logging: {
                edit: 'Set Logging Channel',
                set: 'Change Logging Channel'
            },
            transcript: {
                disable: 'Disable Transcripts',
                enable: 'Save Transcripts'
            },
            openReason: {
                disable: 'Disable Open Reason',
                enable: 'Enable Open Reason'
            },
            leaveAutoclose: {
                disable: 'Disable Leave Autoclose',
                enable: 'Enable Leave Autoclose'
            },
            embeds: 'Change Embeds',
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
                    texts: 'Preview Ticket',
                    topic: 'Change Topic',
                    title: 'Change title text',
                    unclaimed: 'Change Unclaimed Embed',
                    claimed: 'Change Claimed Embed'
                },
                page: {
                    title: {
                        title: 'Title',
                        name: 'Ticket embed title'
                    },
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket description'
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket description'
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
        title: 'Configure Moderation',
        option: {
            role: 'Bypass Role: {role}',
            logging: 'Logging: {channel}'
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Link',
            antiSpam: 'Anti Spam',
            bypassRole: {
                edit: 'Edit bypass Role',
                set: 'Set bypass Role'
            },
            logging: {
                edit: 'Edit logging Channel',
                set: 'Set logging Channel'
            }
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
                    deleteAll: 'Clear word list',
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
                    },
                    export: 'Show word list'
                },
                page: {
                    delete: {
                        title: 'Clear Word List',
                        description: 'Are you sure that you want to clear out all blacklisted words?',
                        page: {
                            confirm: {
                                title: 'Confirmed',
                                description: 'Successfully cleared out all blacklisted words! You can now dismiss this message.'
                            },
                            abord: {
                                title: 'Aborded',
                                description: 'No actions have been taken! You can now dismiss this message.'
                            }
                        }
                    },
                    words: {
                        title: 'Words',
                        name: 'Blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nPlease **only use** characters from `A-Z`\nSplit words with `, ` to bulk add words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'Moderation Anti Link',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'reply',
                        delete: 'delete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Disallow Media',
                        enable: 'Allow Media'
                    },
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
                        name: 'Anit Link reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Moderation Anti Spam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    threshold: 'Threshold: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'reply',
                        timeout: 'timeout',
                        purge: 'purge'
                    },
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
                            purge: 'Purge'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Threshold',
                        name: 'spam Threshold',
                        description: 'I will consider it as spam, when this amount gets reached within 5 seconds!\nInput must be between 1 and 99.'
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
            bots: {
                disable: 'Disable Bots',
                enable: 'Enable Bots'
            },
            selfReact: {
                disable: 'Disable Self Reaction',
                enable: 'Enable Self Reaction'
            },
            reply: {
                disable: 'Hide Replied to',
                enable: 'Show Replied to'
            },
            edits: {
                disable: 'Disalow Edits',
                enable: 'Allow Edits'
            },
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging'
            },
            blacklist: {
                set: 'Set Blacklisted Role',
                change: 'Edit Blacklisted Role'
            },
            blacklistedChannels: 'Edit Blacklisted Channels',
            delete: {
                disable: 'Disable Delete <{reactions} Reactions',
                enable: 'Enable Delete <{reactions} Reactions'
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
            blacklistedRole: 'Blacklisted: {role}',
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
                name: 'Starboard Emoji'
            },
            color: {
                title: 'Color',
                name: 'Starboard Color',
                description: 'Paste a Hex color into the chat you want to use.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Count',
                name: 'requierd Count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            },
            blacklistedRole: {
                title: 'Blacklist Role',
                name: 'blacklisted Role'
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
        title: 'Configure Miscellaneous',
        button: {
            embedMessages: 'Embed Messages',
            levelRoles: 'Level Roles',
            leaderboards: 'Leaderboards'
        },
        page: {
            embedMessages: {
                title: 'Embed Messages',
                description: '**What\'s This?**\nIf a message link is being send, {name} will reply with the content of that message!',
                button: {
                    allowOtherGuilds: {
                        enable: 'Allow other Guilds to Embed Messages from here',
                        disable: 'Disalow other Guilds to Embed Messages from here'
                    },
                    color: 'Choose a Color for the Embed',
                    display: {
                        title: 'Choose a Author display style',
                        selected: 'Selected',
                        option: {
                            message: 'Message Content',
                            author: 'Author Field',
                            footer: 'Footer Field'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Level Roles',
                option: {
                    roles: 'Roles: **{count}/{max}**',
                    roles_upsell: 'Subscribe to get {count}+',
                    channel: 'Channel: {channel}',
                    channel_none: 'message channel',
                    message: 'Message: {message}'
                },
                button: {
                    message: 'Edit Message',
                    addrole: 'Add Level',
                    select: {
                        title: 'Chose a Level Role you want to edit',
                        editing: 'Editing',
                        option: {
                            name: '{messages} messages',
                            description: 'Role: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'Level Up reply'
                    },
                    channel: {
                        title: 'Channel',
                        name: 'Level Up Channel'
                    },
                    addRole: {
                        title: 'New Level Role',
                        limit: 'You have reached the guild limit of **{count}/{max} level roles**!',
                        alreadExists: 'A reward role for **{messages} messages** already has been set with the **{role} role**.',
                        success: 'Successfully added this Level Role. Each user who reaches **{messages} messages** will recieve the **{role} role** now!',
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
                        title: 'Edit Level Role',
                        option: {
                            role: 'Role: {role}',
                            messages: 'Messages: {messages}'
                        },
                        button: {
                            messages: 'Change Message Count',
                            role: 'Change Role',
                            delete: 'Delete'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Tabelat e klasifikimit',
                option: { blacklisted: 'Në listën e zezë: {channels}' },
                button: { blacklistedChannels: 'Redaktoni kanalet në listën e zezë' }
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