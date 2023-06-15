/*
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/
module.exports = {
    validate: 'Validate data...',
    notAllowed: 'You cannot use this menu.',
    prefix: {
        name: 'Prefix',
        set: 'Successfully updated the guilds prefix to {prefix}!',
        noSpace: 'Please note that you cannot use spaces inside of the prefix! It\'s only allowed on the end.',
        disclaimer: 'This does NOT apply to "/" (Slash)-Commands'
    },
    global: {
        // will be the same everywhere
        none: 'none',
        useButtons: 'Select an option you want to edit using the buttons below.',
        upsell: 'Subscribe to get {count} more',
        permissions: 'Missing: {perms}',
        placeholders: 'Placeholders',
        await: {
            channel: 'Mention a Channel or paste the Channel Id into the chat.\nType {string} to remove the channel.',
            category: 'Mention a Category or paste the Category Id into the chat.\nType {string} to remove the category.',
            role: 'Mention a Role or paste the Role Id into the chat.\nType {string} to remove the role.',
            message: 'Send a Message which should be used as {what}.',
            emote: 'Send an Emoji which should be used as {what}.\nType {string} to remove the emotes.',
            color: 'Send a hex color code which should be used for {what}. Get a valid code at {url}.',
            patient: 'Enabling this might take a few seconds, please wait..'
        },
        success: {
            set: 'Successfully set {what} to **{data}**.',
            add: 'Successfully add {what} to **{data}**.',
            setCodeblock: 'Successfully set {what} to {data}',
            removed: 'Successfully removed the {what}.',
            remove: 'Successfully remove {what} from **{data}**.',
            fail: 'This {what} does not exist in this guild..',
            lengthFail: 'The {what} is longer than {max} characters! ({length} characters, {relative} too much)',
            otherLengthFail: 'The {what} is shorter than {min} characters! ({length} characters, {relative} too less)',
            numberFail: 'The {what} is not a number between {a} and {b}!',
            roleFail: 'This Role is only managable by either Discord or belongs to a bot user.',
            colorFail: 'No valid hex color code was provided. Get a valid code at {url}.',
            emoteFail: 'You have not sent any valid emotes. Only custom discord and default emojis are supported.'
        },
        webedit: {
            button: 'Embed Editor',
            title: 'Message Web Edit',
            description: 'Open [this Website]({url}) to start editing the message & embed.',
            open: 'Open Web Edit'
        },
        type: {
            text: 'Text Channel',
            category: 'Category Channel',
            role: 'Role',
            emoji: 'Emote'
        },
        state: {
            enabled: 'Enabled',
            disabled: 'Disabled'
        },
        option: {
            required: 'Required',
            optional: 'Optional'
        },
        button: {
            back: 'Back',
            disable: 'Disable',
            enable: 'Enable',
            channel: {
                set: 'Set Channel',
                edit: 'Edit Channel'
            },
            category: {
                set: 'Set Category',
                edit: 'Edit Category'
            },
            role: {
                set: 'Set Role',
                edit: 'Edit Role'
            },
            mode: {
                analyst: 'Analyst',
                cozy: 'Cozy'
            },
            modeChange: {
                analyst: 'Set to Analyst',
                cozy: 'Set to Cozy'
            },
            dupaw: {
                // This is a name, cannot be translated
                enable: 'Enable dupaw',
                disable: 'Disable dupaw'
            }
        }
    },
    main: {
        title: 'Configure {name}',
        option: {
            logging: 'Messages, Joins, Captcha, Welcoming',
            fun: 'Starboard, Counting',
            premium: {
                text: 'Enterprise Tier {tier}',
                buy: 'Buy Enterprise'
            }
        },
        button: {
            logging: 'Logging',
            fun: 'Fun',
            tickets: 'Ticketing',
            moderation: 'Moderation',
            misc: 'Miscs',
            followNews: 'Follow News',
            staff: 'Manage Guild',
            exit: 'Exit',
            help: 'Support'
        }
    },
    logging: {
        title: 'Configure Logging',
        button: {
            messages: 'Messages',
            joins: 'Joins',
            expressions: 'Sticker/Emojis',
            welcomer: 'Welcoming',
            byer: 'Bying'
        },
        page: {
            messages: {
                title: 'Messages',
                name: 'message logging',
                option: {
                    channel: 'Channel: {channel}',
                    mode: 'Mode: {mode}',
                    snipetimeout: 'Snipe: {time}'
                },
                button: {
                    snipe: {
                        enable: 'Enable Snipe',
                        disable: 'Disable Snipe',
                        timeout: 'change snipe clear duration per message'
                    }
                },
                page: {
                    channel: {
                        title: 'Channel',
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
                    channel: 'Channel: {channel}',
                    mode: 'Mode: {mode}',
                    filter: 'Filter: {state}',
                    captcha: 'CAPTCHA: {state}'
                },
                button: {
                    filter: 'Filter',
                    captcha: 'CAPTCHA Verification'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'join logging'
                    },
                    filter: {
                        title: 'Filter',
                        option: {
                            trigger: 'Age Trigger: **{trigger} days**',
                            punishment: 'Punishment: **{type}**',
                            punishmentType: {
                                ban: 'Ban',
                                kick: 'Kick',
                                timeout: 'Timeout',
                                role: 'Assign {role} role',
                                none: 'none'
                            }
                        },
                        button: {
                            dmNotification: {
                                disable: 'Disable DM notification',
                                enable: 'Enable DM notification'
                            },
                            trigger: {
                                set: 'Set Age Trigger',
                                edit: 'Edit Age Trigger'
                            },
                            punishment: {
                                title: 'Set a punishment',
                                current: 'Current',
                                option: {
                                    ban: 'Ban User',
                                    kick: 'Kick User',
                                    timeout: 'Timeout User',
                                    role: 'Assign Role'
                                }
                            }
                        },
                        page: {
                            trigger: {
                                title: 'Trigger',
                                name: 'age requirement',
                                description: 'If an account is younger than this age, they\'ll get punished!\nInput must be between 0 and 28 days.'
                            },
                            role: {
                                title: 'Role',
                                name: 'punishment role'
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
                                name: 'CAPTCHA verified role'
                            },
                            unverifiedrole: {
                                title: 'Unverified Role',
                                name: 'CAPTCHA unverified role'
                            },
                            logging: {
                                title: 'Logging',
                                name: 'CAPTCHA logging channel'
                            },
                            role: {
                                title: 'Role',
                                name: 'failed CAPTCHA role'
                            },
                            color: {
                                title: 'Page Color',
                                name: 'page color',
                                description: 'Paste a Hex color into the chat you want to use.\nWe recommend you using a color near to black with very high saturation.\nNote that the color on the Passport will always look brighter.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                                invalid: 'The color code is not a valid Hex color.\nGet a Hex color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
                            }
                        }
                    }
                }
            },
            welcomer: {
                title: 'Welcomer',
                name: 'welcomer',
                option: {
                    channel: 'Channel: {channel}',
                    role: 'Roles: {role}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
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
                    embedXcard: 'In embed card overwrites your custom embed image',
                    channelMissmatch: 'Channel of the wave webhook is different than the greet message'
                },
                button: {
                    nextpage: 'Next Page ({cur}/{total})',
                    message: 'Edit Message',
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
                    afterleave_webedit: 'After Leave Embed Editor',
                    wave: 'Wave Button',
                    reactions: 'Reactions'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'welcomer channel'
                    },
                    role: {
                        title: 'Role',
                        name: 'welcomer role'
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'auto delete',
                        description: 'The Welcomer message will be deleted after this time.\nWe recommend you to keep this time short (only few seconds).\nExample: `1m 3s`'
                    },
                    dm: { button: { disable: 'Disable DM message' } },
                    reactions: {
                        title: 'Reactions',
                        option: {
                            welcomer: 'Welcome Message Reactions: {emotes}',
                            firstmessage: 'First Message Reactions: {emotes}'
                        },
                        button: {
                            welcomer: 'Welcome Message',
                            firstmessage: 'First Member Message'
                        },
                        page: {
                            welcomer: {
                                title: 'Welcomer',
                                name: 'welcomer auto reaction'
                            },
                            firstmessage: {
                                title: 'First Message',
                                name: 'auto reaction'
                            }
                        }
                    },
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
                            },
                            color: 'Text Color'
                        },
                        page: {
                            background: {
                                title: 'Background',
                                name: 'card background',
                                description: 'The link must be a **direct image URL**, it also must be a {scheme} type link.\nWe recommend a ratio of {ratio} and a min resolution of {resolution}.'
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
                    dm: { title: 'Direct Message' },
                    wavebtn: {
                        title: 'Wave to say hi',
                        option: {
                            send: 'Send: {type}',
                            emoji: 'Emote: {emote}',
                            label: 'Label: {label}'
                        },
                        button: {
                            emoji: 'Change Button Emote',
                            label: 'Change Button Text',
                            ping: {
                                enable: 'Enable Ping',
                                disable: 'Disable Ping'
                            },
                            type: {
                                title: 'Select a response type',
                                option: {
                                    '0': 'Random Sticker',
                                    '1': 'Custom Message'
                                }
                            },
                            color: {
                                title: 'Select a color for the button',
                                option: {
                                    blurple: 'Blurple',
                                    // You may leave that
                                    grey: 'Grey',
                                    green: 'Green',
                                    red: 'Red'
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
                    autodelete: 'Set autodelete'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'byer channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'byer message'
                    },
                    autodelete: {
                        title: 'Auto Delete',
                        name: 'auto delete',
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
                enable: 'Force Reason',
                disable: 'Optional Reason'
            },
            logging: {
                set: 'Set Logging Channel',
                edit: 'Change Logging Channel'
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
                title: 'Category / Channel',
                name: 'tickets category'
            },
            role: {
                title: 'Staff Role',
                name: 'ticket staff role'
            },
            descriptions: {
                title: 'Texts',
                name: 'ticket descriptions',
                button: {
                    texts: 'Preview Ticket',
                    topic: 'Change Topic',
                    unclaimed: 'Change Unclaimed Embed',
                    claimed: 'Change Claimed Embed',
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
                title: 'Logging',
                name: 'ticket logging'
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
                name: 'bypass role'
            },
            logging: {
                title: 'Logging',
                name: 'moderation logs'
            },
            filter: {
                title: 'Filter',
                name: 'moderation Filter',
                option: {
                    message: 'Message: {message}',
                    total: 'Total: **{amount} words**',
                    timeout: 'Timeout: {time}'
                },
                button: {
                    deleteAll: 'Clear word list',
                    editWords: 'Edit word list',
                    message: 'Edit Message',
                    timeout: 'Timeout Duration',
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
                        name: 'blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nSplit words with `, ` to bulk add/remove words.\nPrefix the message with `-` to remove words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
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
                        name: 'anit scam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiLink: {
                title: 'Anti Link',
                name: 'moderation anti link',
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
                        name: 'anti link reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be less than 18 days.\nExample: `7d 4h 8m 3s`'
                    }
                }
            },
            antiSpam: {
                title: 'Anti Spam',
                name: 'moderation anti spam',
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
                        name: 'anti spam reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'timeout duration',
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
    fun: {
        title: 'Configure Fun',
        button: {
            starboard: 'Starboard',
            counting: 'Counting'
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
                name: 'starboard channel'
            },
            emoji: {
                title: 'Emoji',
                name: 'starboard emoji'
            },
            color: {
                title: 'Color',
                name: 'starboard color'
            },
            count: {
                title: 'Count',
                name: 'requierd count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            },
            blacklistedRole: {
                title: 'Blacklist Role',
                name: 'blacklisted role'
            },
            blacklistedChannels: {
                title: 'Blacklist Channels',
                name: 'blacklist channel list',
                description: 'Mention a Channel/Category or paste the Channel ID into the chat.\nPrefix the message with `+` to add or `-` to remove Channels.\nYou can send multiple Channels seperated with a space.\nType `none` to remove all Channels.',
                missingPrefix: 'The message must be prefixed with `+` to add or `-` to remove Channels.'
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
        title: 'Configure Miscellaneous',
        button: {
            embedMessages: 'Embed Messages',
            levelRoles: 'Level Roles',
            leaderboards: 'Leaderboards',
            stickymessages: 'Stickymessages'
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
                        name: 'level up reply'
                    },
                    channel: {
                        title: 'Channel',
                        name: 'level up Channel'
                    },
                    addRole: {
                        title: 'New Level Role',
                        limit: 'You have reached the guild limit of **{count}/{max} level roles**!',
                        alreadExists: 'A reward role for **{messages} messages** already has been set with the **{role} role**.',
                        success: 'Successfully added this Level Role. Each user who reaches **{messages} messages** will recieve the **{role} role** now!',
                        page: {
                            messageCount: {
                                title: 'Message Count',
                                name: 'required message count',
                                description: 'Send a number, that the user will required to have as in message count to get the selected role.'
                            },
                            role: {
                                title: 'Role',
                                name: 'present Role'
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
                title: 'Leaderboards',
                option: { blacklisted: 'Blacklisted: {channels}' },
                button: {
                    blacklistedChannels: 'Edit Blacklisted Channels',
                    reset: {
                        disable: 'Don\'t Reset Member Data on Leave',
                        enable: 'Reset Member Data on Leave'
                    },
                    roles: 'Reward Roles'
                },
                page: {
                    roles: {
                        title: 'Top Roles',
                        option: {
                            messages: 'Message Roles: {roles}',
                            voiceminutes: 'Voice Roles: {roles}'
                        },
                        warnings: {
                            order: 'Please select the #1st role first, then #2nd and then #3rd',
                            permsOrder: 'Please check that all roles are bellow the {bot} role'
                        },
                        button: {
                            messages: 'Top 3 messange roles',
                            voiceminutes: 'Top 3 voice minutes roles'
                        }
                    }
                }
            },
            stickymessages: {
                title: 'Stickymessages',
                button: {
                    timeout: 'Change the timeout duration',
                    typing: {
                        enable: 'Enable Typing',
                        disable: 'Disable Typing'
                    }
                }
            }
        }
    },
    followNews: {
        title: 'Follow News Updates',
        name: 'follow news'
    },
    staff: {
        title: 'Manage {name}',
        option: { premium: 'Enterprise: {tier}' },
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
                title: 'Configure Enterprise',
                option: { tier: 'Current Tier: {tier}' },
                button: { tier: 'Tier {tier}' }
            }
        }
    },
    exit: { title: 'Saved settings and exited config menu.' }
};