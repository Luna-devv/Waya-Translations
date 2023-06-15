/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Vawidate data...',
    notAllowed: 'U cannyot use this menyu. :ccc',
    prefix: {
        name: 'Pwefix',
        set: 'Successfuwwy updated the guiwds pwefix to {prefix}!',
        noSpace: 'BAbe, pwease nyote that u cannyot use spaces inside of the pwefix... >.< It\'s onwy awwowed on the end giwwwy',
        disclaimer: 'This does NyOT appwy to "/" (Swash)-Commands >~<'
    },
    global: {
        // will be the same everywhere
        none: 'nyonye',
        useButtons: 'Sewect an option u want to edit using the buttons bewow, babe. 😘',
        upsell: 'Subscwibe to get {count} mowe',
        permissions: 'Missing: {perms}',
        placeholders: 'Pwacehowdews',
        await: {
            channel: 'Mention a Channyew ow paste the Channyew Id into the chat.\nType {string} to wemuv the channyew.',
            category: 'Mention a Categowy ow paste the Categowy Id into the chat.\nType {string} to wemuv the categowy.',
            role: 'Mention a wowe ow paste the wowe Id into the chat.\nType {string} to wemuv the wowe.',
            message: 'Send a Message which shouwd be used as {what}.',
            emote: 'Send an Emoji which shouwd be used as {what}.\nType {string} to wemuv the emotes. :>',
            color: 'Send a hex cowow code which shouwd be used fow {what}. Get a vawid code at {url}.',
            patient: 'Enyabwing this might take a few seconds, pwease wait..'
        },
        success: {
            set: 'Successfuwwy set {what} to **{data}** qwq',
            add: 'Successfuwwy add {what} to **{data}** qwq',
            setCodeblock: 'Successfuwwy set {what} to {data}',
            removed: 'Successfuwwy wemuvd the {what}.',
            remove: 'Successfuwwy wemuv {what} to **{data}** :///',
            fail: 'This {what} does nyot exist in this guiwd.. ;////',
            lengthFail: 'The {what} is wongew than {max} chawactews! ({length} uwu chawactews, {relative} too much) :////',
            otherLengthFail: 'The {what} is showtew than {min} chawactews! ({length} uwu chawactews, {relative} too wess)  :////',
            numberFail: 'BABE, The {what} is nyot a nyumbew >.< between {a} and {b}! ;-;;;     ',
            roleFail: 'This (^³^) wowe :3 is onwy manyagabwe by ://// eithew Discowd ;-;;; ow bewongs to a bot usew.    ',
            colorFail: 'Nyo vawid hex cowow code was pwovided. Get a vawid code at {url}.',
            emoteFail: 'u have nyot sent any vawid emotes. Onwy custom discowd and defauwt emojis r suppowted. ;///'
        },
        webedit: {
            button: 'Embed Editow',
            title: 'Message Weeb~ Edit\n',
            description: 'Open [this Weebsite]({uww}) to stawt editing the message & embed :;3',
            open: 'Open Weeeb Edit\n'
        },
        type: {
            text: 'Text Channyew',
            category: 'Categowy Channyew',
            role: 'Wowe',
            emoji: 'Emote'
        },
        state: {
            enabled: 'Enyabwed',
            disabled: 'Disabwed'
        },
        option: {
            required: 'Wequiwed',
            optional: 'Optionyaw'
        },
        button: {
            back: 'GO AWAY',
            disable: 'Disabwe',
            enable: 'Enyabwe',
            channel: {
                set: 'Set Channyew',
                edit: 'Edit Channyew'
            },
            category: {
                set: 'Set Categowy',
                edit: 'Edit Categowy'
            },
            role: {
                set: 'Set Wowe',
                edit: 'Edit Wowe'
            },
            mode: {
                analyst: 'Anyawyst',
                cozy: 'Cozy'
            },
            modeChange: {
                analyst: 'Set to Anyawyst',
                cozy: 'Set to Cozy'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Enyabwe dupaw',
                disable: 'Disabwe dupaw'
            }
        }
    },
    main: {
        title: 'Configuwe {name}',
        option: {
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Entewpwise Tiew {tier}',
                buy: 'Buy Entewpwise'
            }
        },
        button: {
            logging: 'Wogging',
            fun: 'Fun',
            tickets: 'Ticketing',
            moderation: 'Modewation',
            misc: 'Miscs',
            followNews: 'Fowwow Nyews',
            staff: 'Manyage Guiwd',
            exit: 'GOO PWEASE',
            help: 'Suppowt'
        }
    },
    logging: {
        title: 'Configuwe Wogging',
        button: {
            messages: 'Messages',
            joins: 'Joins',
            expressions: 'Sticker/Emojis',
            welcomer: 'Wewcoming',
            byer: 'Bying'
        },
        page: {
            messages: {
                title: 'Messages',
                name: 'message logging',
                option: {
                    channel: 'Channyew: {channel}',
                    mode: 'Mode: {mode}',
                    snipetimeout: 'Snyipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Enyabwe Snyipe',
                        disable: 'Disabwe Snyipe',
                        timeout: 'change snyipe cweaw duwation pew message'
                    }
                },
                page: {
                    channel: {
                        title: 'Channyew',
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
                title: 'Joins',
                name: 'join logging',
                option: {
                    channel: 'Channyew: {channel}',
                    mode: 'Mode: {mode}',
                    filter: 'Fiwtew: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Fiwtew',
                    captcha: 'CAPTCHA Cati~fication'
                },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'join logging'
                    },
                    filter: {
                        title: 'Fiwtew',
                        option: {
                            trigger: 'Age Twiggew: **{trigger} days**',
                            punishment: 'Punyishment: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Kick',
                                timeout: 'Timeout',
                                role: 'Assign {role} wowe',
                                none: 'nyonye'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Disabwe DM nyotification',
                                enable: 'Enyabwe DM nyotification'
                            },
                            trigger: {
                                set: 'Set Age Twiggew',
                                edit: 'Edit Age Twiggew'
                            },
                            punishment: {
                                title: 'Set a punyishment',
                                current: 'Cuwwent',
                                option: {
                                    ban: 'Ban Usew',
                                    kick: 'Kick Usew',
                                    timeout: 'Timeout Usew',
                                    role: 'Assign Wowe'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Twiggew',
                                name: 'age wequiwement',
                                description: 'If an account is ungew than this age, they\'ww get punyished!\nInput must be between 0 and 28 days.'
                            },
                            role: {
                                title: 'Wowe',
                                name: 'punyishment wowe'
                            }
                        }
                    },
                    captcha: {
                        title: 'CAPTCHA',
                        name: 'CAPTCHA',
                        option: {
                            verifiedrole: 'Vewified Wowe: {role}',
                            unverifiedrole: 'Unvewified Wowe: {role}',
                            channel: 'Wogging: {channel}',
                            color: 'Cowow: {color}'
                        },
                        disclaimer: 'Continyue with {command}',
                        button: {
                            verifiedrole: {
                                set: 'Set Vewified Wowe',
                                edit: 'Edit Vewified Wowe'
                            },
                            unverifiedrole: {
                                set: 'Set Unvewified Wowe',
                                edit: 'Edit Unvewified Wowe'
                            },
                            type: {
                                title: 'Set a CAPTCHA type',
                                selected: 'Sewected'
                            },
                            color: 'Change Page Cowow'
                        },
                        page: {
                            verifiedrole: {
                                title: 'Vewified Wowe',
                                name: 'CAPTCHA verified role'
                            },
                            unverifiedrole: {
                                title: 'Unvewified Wowe',
                                name: 'CAPTCHA unverified role'
                            },
                            logging: {
                                title: 'Wogging',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Wowe',
                                name: 'faiwed CAPTCHA wowe'
                            },
                            color: {
                                title: 'Page Cowow',
                                name: 'page color',
                                description: 'Paste a Hex cowow into the chat u want to use.\nWe wecommend u using a cowow nyeaw to bwack with vewy high satuwation.\nNyote that the cowow on the Passpowt wiww awways wook bwightew.\nGet a Hex cowow code fwom [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'The cowow code is nyot a vawid Hex cowow.\nGet a Hex cowow code fwom [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Wewcomew',
                name: 'welcomer',
                option: {
                    channel: 'Channyew: {channel}',
                    role: 'Wowes: {role}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    },
                    afterleaveMessage: {
                        message: 'AW Message: {message}',
                        // AL: After Leave - just use the first letters of your language :)
                        command: 'AW Message: use `{command}`'
                    },
                    pings: 'Pings: {channels}',
                    autodelete: 'Auto dewete: **{time}**',
                    autodelete_never: 'nyevew'
                },
                warnings: {
                    afterleaveXautodelete: 'We dont wecommend using **Auto Dewete** and **Dewete Aftew weave** simuwtanyeouswy',
                    embedXcard: 'In embed cawd uvwwwites ur custom embed image',
                    channelMissmatch: 'Channyew of the wave webhook is diffewent than the gweet message'
                },
                button: {
                    nextpage: 'Nyext Page ({cur}/{total})',
                    message: 'Edit Message',
                    imgcard: 'Edit Cawd',
                    pings: 'Edit Ping-Pong Channyews',
                    autodelete: 'Set Autodewete',
                    assignRolesAfterRejoin: {
                        enable: 'Weassign Wowes aftew Wejoin',
                        disable: 'Disabwe Weassign Wowes aftew Wejoin'
                    },
                    afterleave: {
                        title: 'What shouwd happen with the message if the membew weaves?',
                        selected: 'Sewected',
                        option: {
                            nothing: 'Nyothing',
                            edit: 'Edit on weave',
                            delete: 'Dewete on weave'
                        }
                    },
                    dm: 'DM Message',
                    afterleave_webedit: 'Aftew Weave Embed Editow',
                    wave: 'Wave Button',
                    reactions: 'Weactions'
                },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Wowe',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Auto Dewete',
                        name: 'auto delete',
                        description: 'The Wewcomew message wiww be deweted aftew this time.\nWe wecommend u to keep this time showt (onwy few seconds).\nExampwe: `1m 3s`'
                    },
                    dm: { button: { disable: 'Disabwe DM message' } },
                    reactions: {
                        title: 'Weactions',
                        option: {
                            welcomer: 'Wewcome Message Weactions: {emotes} ',
                            firstmessage: 'Fiwst Message Weactions: {emotes}'
                        },
                        button: {
                            welcomer: 'Wewcome Message',
                            firstmessage: 'Fiwst Membew Message'
                        },
                        page: {
                            welcomer: {
                                title: 'Wewcomew',
                                name: 'wewcomew auto weaction'
                            },
                            firstmessage: {
                                title: 'Fiwst Message',
                                name: 'auto weaction'
                            }
                        }
                    },
                    imgcard: {
                        title: 'Cawd',
                        option: { background: 'Backgwound: {url}' },
                        button: {
                            background: {
                                set: 'Set Custom Backgwound',
                                edit: 'Edit Custom Backgwound'
                            },
                            deleteBackground: 'Dewete Backgwound',
                            inEmbed: {
                                enable: 'Show Image in Embed',
                                disable: 'Dont Show Image in Embed'
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Backgwound',
                                name: 'card background',
                                description: 'The wink must be a **diwect image Uww**, it awso must be a {scheme} type wink.\nWe wecommend a watio of {ratio} and a min wesowution of {resolution}.'
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
                    dm: { title: 'Diwect Message' },
                    wavebtn: {
                        title: 'Wave to say heyy',
                        option: {
                            send: 'Send: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Wabew: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Change Button Text',
                            ping: {
                                enable: 'Enyabwe Ping',
                                disable: 'Enyabwe Ping'
                            },
                            type: {
                                title: 'Sewect a wesponse type',
                                option: {
                                    '0': 'Wandom Stickew',
                                    '1': 'Custom Message'
                                }
                            },
                            color: {
                                title: 'Sewect a cowow fow the button',
                                option: {
                                    blurple: 'Bwuwpwe',
                                    // You may leave that
                                    grey: 'Gwey',
                                    green: 'Gween',
                                    red: 'Wed'
                                }
                            }
                        },
                        page: {
                            emoji: {
                                title: 'Emote',
                                name: 'button emote'
                            },
                            label: {
                                title: 'Wabew',
                                name: 'button text'
                            }
                        }
                    }
                }
            },
            byer: {
                title: 'Byew',
                name: 'byer',
                option: {
                    channel: 'Channyew: {channel}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    },
                    autodelete: 'Auto dewete: **{time}**',
                    autodelete_never: 'nyevew'
                },
                button: {
                    message: 'Edit Message',
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Auto Dewete',
                        name: 'auto delete',
                        description: 'The Wewcomew message wiww be deweted aftew this time.\nWe wecommend u to keep this time showt (onwy few seconds).\nExampwe: `1m 3s`'
                    }
                }
            }
        }
    },
    tickets: {
        title: 'Configuwe Ticketing',
        option: {
            channel: 'Categowy: {channel}',
            staff: 'Staff: {role}',
            logging: 'Wogging: {channel}',
            forceReason: 'Weason: {state}',
            naming: 'Nyaming: {type}',
            namingType: {
                username: 'Usewnyame',
                userid: 'UsewId',
                random: 'Wandom'
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
                enable: 'Fowce weason',
                disable: 'Optionyaw Weason'
            },
            logging: {
                set: 'Set Wogging Channyew',
                edit: 'Change Wogging Channyew'
            },
            transcript: {
                disable: 'Disabwe Twanscwipts',
                enable: 'Save Twanscwipts'
            },
            openReason: {
                disable: 'Disabwe Open Weason',
                enable: 'Enyabwe Open Weason'
            },
            leaveAutoclose: {
                disable: 'Disabwe Weave Autocwose',
                enable: 'Enyabwe Weave Autocwose'
            },
            embeds: 'Change Embeds',
            naming: {
                title: 'Set a nyaming type',
                current: 'Cuwwent',
                option: {
                    username: 'Usewnyame',
                    userid: 'Usew Id',
                    random: 'Wandom Id'
                }
            }
        },
        page: {
            category: {
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Staff Wowe',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Texts',
                name: 'ticket descriptions',
                button: {
                    texts: 'Pweview Ticket',
                    topic: 'Change Topic',
                    unclaimed: 'Change Uncwaimed Embed',
                    claimed: 'Change Cwaimed Embed',
                    closeEmote: 'Change Close Emote',
                    claimEmote: 'Change Claim Emote'
                },
                page: {
                    topic: {
                        title: 'Topic',
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
                title: 'Wogging',
                name: 'ticket logging'
            }
        }
    },
    moderation: {
        title: 'Configuwe Modewation',
        option: {
            role: 'Bypass Wowe: {role}',
            logging: 'Wogging: {channel}'
        },
        button: {
            filter: 'Bwackwist',
            antiScam: 'Anti Scam',
            antiLink: 'Anti Wink',
            antiSpam: 'Anti Spam',
            bypassRole: {
                edit: 'Edit bypass Wowe',
                set: 'Set bypass Wowe'
            },
            logging: {
                edit: 'Edit wogging Channyew',
                set: 'Set wogging Channyew'
            }
        },
        page: {
            role: {
                title: 'Bypass Wowe',
                name: 'bypass role'
            },
            logging: {
                title: 'Wogging',
                name: 'moderation logs'
            },
            filter: {
                title: 'Fiwtew',
                name: 'moderation Filter',
                option: {
                    message: 'Message: {message}',
                    total: 'Totaw: **{amount} wowds**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Cweaw wowd wist',
                    editWords: 'Edit wowd wist',
                    message: 'Edit Message',
                    timeout: 'Timeout Duwation',
                    export: 'Show wowd wist'
                },
                page: {
                    delete: {
                        title: 'Cweaw Wowd Wist',
                        description: 'r u suwe babe that u :3 want to cweaw out aww bwackwisted wowds? :////',
                        page: {
                            confirm: {
                                title: 'Confiwmed',
                                description: 'I\'ve successfuwwy cweawed out aww bwackwisted wowds baby giww! u can nyow dismiss this message qwq'
                            },
                            abord: {
                                title: 'Abowded',
                                description: 'i didnt do anything ok babe? u can nyow dismiss this message.. >.<'
                            }
                        }
                    },
                    words: {
                        title: 'Wowds',
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'Successfuwwy buwk added {amout} nyew wowds to the bwackwist.',
                        added: 'Successfuwwy added "`{word}`" as nyew bwackwisted wowd.',
                        removed: 'Successfuwwy wemuvd "`{word}`" as bwackwisted wowd.'
                    },
                    message: {
                        title: 'Message',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'moderation anti scam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'wepwy',
                        delete: 'dewete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    message: 'Edit Message',
                    timeout: 'Timeout Duwation',
                    actions: {
                        title: 'Manyage an action',
                        selected: 'Sewected',
                        option: {
                            reply: 'Wepwy',
                            delete: 'Dewete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Wink',
                name: 'moderation anti link',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'wepwy',
                        delete: 'dewete',
                        timeout: 'timeout'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    media: {
                        disable: 'Disawwow Media',
                        enable: 'Awwow Media'
                    },
                    message: 'Edit Message',
                    timeout: 'Timeout Duwation',
                    actions: {
                        title: 'Manyage an action',
                        selected: 'Sewected',
                        option: {
                            reply: 'Wepwy',
                            delete: 'Dewete',
                            timeout: 'Timeout'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    threshold: 'Thweshowd: **{threshold}msgs/5s**',
                    actionType: {
                        reply: 'wepwy',
                        timeout: 'timeout',
                        purge: 'puwge'
                    },
                    timeout: 'Timeout: {time}'
                },
                button: {
                    threshold: 'Edit Thweshowd',
                    message: 'Edit Message',
                    timeout: 'Timeout Duwation',
                    actions: {
                        title: 'Manyage an action',
                        selected: 'Sewected',
                        option: {
                            reply: 'Wepwy',
                            timeout: 'Timeout',
                            purge: 'Puwge'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    },
                    threshold: {
                        title: 'Thweshowd',
                        name: 'spam Thweshowd',
                        description: 'I wiww considew it as spam, when this amount gets weached within 5 seconds!\nInput must be between 1 and 99.'
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
        title: 'Configuwe Stawboawd',
        button: {
            emoji: 'Change Emoji',
            color: 'Change Cowow',
            count: 'Change Count',
            nsfw: {
                disable: 'Disabwe NSFW',
                enable: 'Enyabwe NSFW'
            },
            bots: {
                disable: 'Disabwe Bots',
                enable: 'Enyabwe Bots'
            },
            selfReact: {
                disable: 'Disabwe Sewf weaction',
                enable: 'Enyabwe Sewf weaction'
            },
            reply: {
                disable: 'Hide wepwied to',
                enable: 'Show wepwied to'
            },
            edits: {
                disable: 'Disawwow Edits',
                enable: 'Awwow Edits'
            },
            logging: {
                disable: 'Disabwe Wogging',
                enable: 'Enyabwe Wogging'
            },
            blacklist: {
                set: 'Set Bwackwisted wowe',
                change: 'Edit Bwackwisted wowe'
            },
            blacklistedChannels: 'Edit Bwackwisted Channyews',
            delete: {
                disable: 'Disabwe Dewete <{reactions} weactions',
                enable: 'Enyabwe Dewete <{reactions} weactions'
            },
            display: {
                title: 'Set a dispway stywe',
                selected: 'Sewected',
                option: {
                    tag: 'Tag',
                    username: 'Usewnyame',
                    nickname: 'Nyicknyame',
                    guildProfile: 'Guiwd Pwofiwe'
                }
            }
        },
        option: {
            channel: 'Channyew: {channel}',
            color: 'Cowow: {color}',
            emoji: 'Emoji: {emoji}',
            count: 'Count: {count}',
            blacklistedRole: 'Bwackwisted: {role}',
            display: 'Dispway: {profileType}',
            profileType: {
                tag: 'Tag',
                username: 'Usewnyame',
                nickname: 'Nyicknyame',
                guildProfile: 'Guiwd Pwofiwe'
            }
        },
        page: {
            channel: {
                title: 'Channyew',
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'starboard emoji'
            },
            color: {
                title: 'Cowow',
                name: 'starboard color'
            },
            count: {
                title: 'Count',
                name: 'requierd count',
                description: 'Send a nyumbew to set the minyimum {emote} weaction count wequiwement.'
            },
            blacklistedRole: {
                title: 'Bwackwisted Wowe',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Bwackwist Channyews',
                name: 'blacklist channel list',
                description: 'Mention a Channyew/Categowy ow paste the Channyew ID into the chat.\nPwefix the message with `+` to add ow `-` to wemuv Channyews.\nU can send muwtipwe Channyews sepewated with a space.\nType `none` to wemuv aww Channyews.',
                missingPrefix: 'The message must be pwefixed with `+` to add ow `-` to wemuv Channyews.'
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
        title: 'Configuwe Miscewwanyeous',
        button: {
            embedMessages: 'Wevew Wowes',
            levelRoles: 'Wevew Wowes',
            leaderboards: 'Weadewboawds',
            stickymessages: 'Stickymessages'
        },
        page: {
            embedMessages: {
                title: 'Embed Messages',
                description: '**What\'s This? <a:OwOWhatsThis:658170466703245315>**\nIf a message wink is being send, {name} wiww wepwy with the content of that message ^^',
                button: {
                    allowOtherGuilds: {
                        enable: 'Awwow othew Guiwds to Embed Messages fwom hewe',
                        disable: 'Disawow othew Guiwds to Embed Messages fwom hewe'
                    },
                    color: 'Choose a Cowow fow the Embed',
                    display: {
                        title: 'Choose a Authow dispway stywe',
                        selected: 'Sewected',
                        option: {
                            message: 'Message Content',
                            author: 'Authow Fiewd',
                            footer: 'Footew Fiewd'
                        }
                    }
                }
            },
            levelRoles: {
                title: 'Wevew Wowes',
                option: {
                    roles: 'Wowes: **{count}/{max}**',
                    channel: 'Channyew: {channel}',
                    channel_none: 'message channyew',
                    message: 'Message: {message}'
                },
                button: {
                    message: 'Edit Message',
                    addrole: 'Add Wevew',
                    select: {
                        title: 'Chose a Wevew Wowe u want to edit',
                        editing: 'Editing',
                        option: {
                            name: '{messages} messages',
                            description: 'Wowe: {role}'
                        }
                    }
                },
                page: {
                    message: {
                        title: 'Message',
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Channyew',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'Nyew Wevew Wowe',
                        limit: 'Babe, U have weached the guiwd wimit of **{count}/{max} wevew wowes**! >~<\n',
                        alreadExists: 'A wewawd wowe fow **{messages} messages** awweady has been set with the **{role} wowe** >.>',
                        success: 'Successfuwwy added this Wevew Wowe. Each usew who weaches **{messages} messages** wiww wecieve the **{role} wowe** nyow! 🎉',
                        page: {
                            messageCount: {
                                title: 'Message Count',
                                name: 'required message count',
                                description: 'Babe, can u send a nyumbew, that the usew wiww wequiwed to have as in message count to get the sewected wowe?'
                            },
                            role: {
                                title: 'Wowe',
                                name: 'pwesent Wowe'
                            }
                        }
                    },
                    editRole: {
                        title: 'Edit Wevew Wowe',
                        option: {
                            role: 'Wowe: {role}',
                            messages: 'Messages: {messages}'
                        },
                        button: {
                            messages: 'Change Message Count',
                            role: 'Change Wowe',
                            delete: 'Dewete'
                        }
                    }
                }
            },
            leaderboards: {
                title: 'Weadewboawds',
                option: { blacklisted: 'Bwackwisted: {channels}' },
                button: {
                    blacklistedChannels: 'Edit Bwackwisted Channyews',
                    reset: {
                        disable: 'Don\'t Weset Membew Data on Weave',
                        enable: 'Weset Membew Data on Weave'
                    },
                    roles: 'Wewawd Wowes'
                },
                page: {
                    roles: {
                        title: 'Top Wowes',
                        option: {
                            messages: 'Message Wowes: {roles}',
                            voiceminutes: 'Voice Wowes: {roles}'
                        },
                        warnings: {
                            order: 'Pwease sewect the #1st wowe fiwst, then #2nd and then #3wd',
                            permsOrder: 'Pwease check that aww wowes r bewwow the {bot} wowe'
                        },
                        button: {
                            messages: 'Top 3 messange wowes',
                            voiceminutes: 'Top 3 voice minyutes wowes'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Stickymessages',
                button: {
                    timeout: 'Change the timeout duwation',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Fowwow Nyews Updates',
        name: 'follow news'
    },
    staff: {
        title: 'Manyage {name}',
        option: { premium: 'Entewpwise: {tier}' },
        button: {
            premium: 'Change pwemium Tiew',
            data: 'Expowt Data'
        },
        page: {
            data: {
                title: 'Data Expowt',
                message: 'The data fwom {name} is dispwayed bewow.',
                error: 'Cannyot send message :/'
            },
            premium: {
                title: 'Configuwe Entewpwise',
                option: { tier: 'Cuwwent Tiew: {tier}' },
                button: { tier: 'Tiew {tier}' }
            }
        }
    },
    exit: { title: 'Saved settings and exited config menyu. >~<' }
};