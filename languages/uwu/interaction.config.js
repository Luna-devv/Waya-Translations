/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Vawidate data...',
    notAllowed: 'U cannyot use this menyu. :ccc',
    prefix: {
        name: 'Pwefix',
        set: 'Successfuwwy updated the guiwds pwefix to {prefix}!',
        disclaimer: 'This does NyOT appwy to "/" (Swash)-Commands'
    },
    global: {
        // will be the same everywhere
        none: 'nyonye',
        useButtons: 'Sewect an option u want to edit using the buttons bewow.',
        developer: {
            bypass: 'u don\'t have the `MANAGE_GUILD` to access this panyew..\nDo u stiww want to continyue?',
            choice: {
                access: 'I\'m suwe, yes',
                abord: 'Nyevewmind'
            },
            notice: 'cawefuww - devewopew pwiviweges enfowced..'
        },
        permissions: 'Missing: {perms}',
        placeholders: 'Pwacehowdews',
        await: {
            channel: 'Mention a Channyew ow paste the Channyew ID into the chat.\nType `none` to wemuv the channyew.',
            category: 'Mention a Categowy ow paste the Categowy ID into the chat.\nType `none` to wemuv the categowy.',
            role: 'Mention a wowe ow paste the wowe ID into the chat.\nType `none` to wemuv the wowe.',
            message: 'Send a Message which shouwd be used as {what}.',
            emote: 'Send an Emoji which shouwd be used as {what}.'
        },
        success: {
            set: 'Successfuwwy set {what} to **{data}**',
            removed: 'Successfuwwy wemuvd the {what}.',
            fail: 'This {what} does nyot exist in this guiwd..',
            lengthFail: 'The {what} is wongew than {max} chawactews! ({length} chawactews, {relative} too much)',
            otherLengthFail: 'The {what} is showtew than {min} chawactews! ({length} chawactews, {relative} too wess)',
            numberFail: 'The {what} is nyot a nyumbew between {a} and {b}!',
            roleFail: 'This wowe is onwy manyagabwe by eithew Discowd ow bewongs to a bot usew.'
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
            back: 'Back',
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
            premium: {
                text: 'Entewpwise Tiew {tier}',
                buy: 'Buy Entewpwise'
            }
        },
        button: {
            logging: 'Wogging',
            tickets: 'Ticketing',
            moderation: 'Modewation',
            starboard: 'Stawboawd',
            staff: 'Manyage Guiwd',
            exit: 'Exit',
            help: 'Suppowt'
        }
    },
    logging: {
        title: 'Configuwe Wogging',
        button: {
            messages: 'Messages',
            joins: 'Joins',
            welcomer: 'Wewcoming',
            byer: 'Bying'
        },
        page: {
            messages: {
                title: 'Messages',
                name: 'Message Wogging',
                option: {
                    channel: 'Channyew: {channel}',
                    mode: 'Mode: {mode}'
                },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'Message Wogging channyew'
                    }
                }
            },
            joins: {
                title: 'Joins',
                name: 'Join Wogging',
                option: {
                    channel: 'Channyew: {channel}',
                    mode: 'Mode: {mode}',
                    filter: 'Fiwtew: {state}'
                },
                button: { filter: 'Fiwtew' },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'Join Wogging'
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
                    }
                }
            },
            welcomer: {
                title: 'Wewcomew',
                name: 'Wewcomew',
                option: {
                    channel: 'Channyew: {channel}',
                    role: 'Wowe: {role}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    }
                },
                button: { message: 'Edit Message' },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'Wewcomew Channyew'
                    },
                    message: {
                        title: 'Message',
                        name: 'Wewcomew Message'
                    },
                    role: {
                        title: 'Wowe',
                        name: 'Wewcomew Wowe'
                    }
                }
            },
            byer: {
                title: 'Byew',
                name: 'Byew',
                option: {
                    channel: 'Channyew: {channel}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    }
                },
                button: { message: 'Edit Message' },
                page: {
                    channel: {
                        title: 'Channyew',
                        name: 'Set Channyew'
                    },
                    message: {
                        title: 'Message',
                        name: 'Byew Message'
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
            }
        },
        button: {
            forceReason: {
                enable: 'Fowce weason',
                disable: 'Optionyaw Weason'
            },
            logging: {
                disable: 'Disabwe Wogging',
                enable: 'Enyabwe Wogging'
            },
            transcript: {
                disable: 'Disabwe Twanscwipts',
                enable: 'Save Twanscwipts'
            },
            openReason: {
                disable: 'Disabwe Open Weason',
                enable: 'Enyabwe Open Weason'
            },
            texts: 'Change Texts',
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
                title: 'Categowy',
                name: 'Tickets Categowy'
            },
            role: {
                title: 'Staff Wowe',
                name: 'Ticket Staff wowe'
            },
            descriptions: {
                title: 'Texts',
                name: 'Ticket descwiptions',
                button: {
                    texts: 'Pweview ticket',
                    topic: 'Change topic',
                    unclaimed: 'Change uncwaimed text',
                    claimed: 'Change cwaimed text'
                },
                page: {
                    unclaimed: {
                        title: 'Uncwaimed',
                        name: 'Uncwaimed Ticket descwiption'
                    },
                    claimed: {
                        title: 'Cwaimed',
                        name: 'Cwaimed Ticket descwiption'
                    },
                    topic: {
                        title: 'Topic',
                        name: 'Tickets Topic'
                    }
                }
            },
            logging: {
                title: 'Wogging',
                name: 'Ticket Wogging'
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
                name: 'Bypass wowe'
            },
            logging: {
                title: 'Wogging',
                name: 'Modewation wogs'
            },
            filter: {
                title: 'Fiwtew',
                name: 'Modewation Fiwtew',
                option: {
                    message: 'Message: {message}',
                    actions: 'Actions: {types}',
                    actionType: {
                        reply: 'wepwy',
                        delete: 'dewete',
                        timeout: 'timeout'
                    },
                    total: 'Totaw: **{amount} wowds**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    editWords: 'Edit wowd wist',
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
                    words: {
                        title: 'Wowds',
                        name: 'Bwackwisted wowd',
                        awaitMessage: 'Send onye ow muwtipwe wowds that shouwd get bwackwisted.\nPwease **onwy use** chawactews fwom `A-Z`\nSpwit wowds with `, ` to buwk add wowds.',
                        bulkAdded: 'Successfuwwy buwk added {amout} nyew wowds to the bwackwist.',
                        added: 'Successfuwwy added "`{word}`" as nyew bwackwisted wowd.',
                        removed: 'Successfuwwy wemuvd "`{word}`" as bwackwisted wowd.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Bwackwisted wowd'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'Timeout Duwation',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiScam: {
                title: 'Anti Scam',
                name: 'Modewation Anti Scam',
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
                        name: 'Anyit Scam wepwy'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'Timeout Duwation',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Wink',
                name: 'Modewation Anti Wink',
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
                        name: 'Anyit wink wepwy'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'Timeout duwation',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 28 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'Modewation Anti Spam',
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
                        name: 'Anyit Scam wepwy'
                    },
                    timeout: {
                        title: 'Timeout Duwation',
                        name: 'Timeout duwation',
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
            logging: {
                disable: 'Disabwe Wogging',
                enable: 'Enyabwe Wogging'
            },
            blacklist: {
                set: 'Set Bwackwisted wowe',
                change: 'Edit Bwackwisted wowe'
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
                name: 'Stawboawd Channyew'
            },
            emoji: {
                title: 'Emoji',
                name: 'Stawboawd Emoji'
            },
            color: {
                title: 'Cowow',
                name: 'Stawboawd Cowow',
                description: 'Paste the HEX cowow code into the chat.\nGet a HEX cowow code fwom [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The cowow code is nyot a vawid HEX cowow.\nGet a HEX cowow code fwom [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Count',
                name: 'wequiewd Count',
                description: 'Send a nyumbew to set the minyimum {emote} weaction count wequiwement.'
            },
            blacklistedRole: {
                title: 'Bwackwisted Wowe',
                name: 'bwackwisted Wowe'
            }
        }
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