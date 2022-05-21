/*
    \' is here to escape the character so the string doesn't end
    Do NOT edit things like {} since these are placeholders,
    \n are new lines
*/

module.exports = {
    validate: 'Validate data...',
    global: {   // will be the same everywhere
        none: 'none',
        useButtons: 'Select an option you want to edit using the buttons below.',
        developer: {
            bypass: 'You don\'t have the `MANAGE_GUILD` to access this panel..\nDo you still want to continue?',
            choice: {
                access: 'I\'m sure, yes',
                abord: 'Nevermind'
            },
            notice: 'carefull - developer privileges enforced..'
        },
        permissions: 'Missing: {perms}',
        await: {
            channel: 'Mention a Channel or paste the Channel Id into the chat.\nType `none` to remove the channel.',
            category: 'Mention a Category or paste the Category Id into the chat.\nType `none` to remove the category.',
            role: 'Mention a Role or paste the Role Id into the chat.\nType `none` to remove the role.',
            message: 'Send a Message which should be used as {what}.',
            emote: 'Send an Emoji which should be used as {what}.',
        },
        success: {
            set: 'Successfully set {what} to **{data}**',
            removed: 'Successfully removed the {what}.',
            fail: 'This {what} does not exist in this guild..',
            lengthFail: 'The {what} is longer than {max} characters! ({length} characters, {relative} too much)',
            otherLengthFail: 'The {what} is shorter than {min} characters! ({length} characters, {relative} too less)',
            numberFail: 'The {what} is not a number between {a} and {b}!',
            roleFail: 'This Role is only managable by either Discord or belongs to a bot user.'
        },
        type: {
            text: 'Text Channel',
            category: 'Category Channel',
            role: 'Role'
        },
        state: {
            enabled: 'Enabled',
            disabled: 'Disabled',
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
            dupaw: {    // This is a name, can't be translated
                enable: 'Enable dupaw',
                disable: 'Disable dupaw'
            }
        }
    },

    main: {
        title: 'Configure {name}',
        option: {
            premium: {
                text: 'Premium Tier {tier}',
                buy: 'Buy Premium'
            }
        },
        button: {
            logging: 'Logging',
            tickets: 'Ticketing',
            moderation: 'Moderation',
            starboard: 'Starboard',
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
            welcomer: 'Welcoming',
            byer: 'Bying'
        },
        page: {

            messages: {
                title: 'Messages',
                name: 'Message Logging',
                option: {
                    channel: 'Channel: {channel}',
                    mode: 'Mode: {mode}'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Message Logging channel'
                    }
                }
            },

            joins: {
                title: 'Joins',
                name: 'Join Logging',
                option: {
                    channel: 'Channel: {channel}',
                    mode: 'Mode: {mode}',
                    filter: 'Filter: {state}'
                },
                button: {
                    filter: 'Filter'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Join Logging'
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
                                description: 'If an account is younger than this age, they\'ll get punished!\nInput must be between 0 and 28 days.',
                            },
                            role: {
                                title: 'Role',
                                name: 'punishment role'
                            }
                        }
                    }
                }
            },

            welcomer: {
                title: 'Welcomer',
                name: 'Welcomer',
                option: {
                    channel: 'Channel: {channel}',
                    role: 'Role: {role}',
                    message: {
                        message: 'Message: {message}',
                        command: 'Message: use `{command}`'
                    }
                },
                button: {
                    message: 'Edit Message'
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
                    }
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
                },
                button: {
                    message: 'Edit Message'
                },
                page: {
                    channel: {
                        title: 'Channel',
                        name: 'Byer Channel'
                    },
                    message: {
                        title: 'Message',
                        name: 'Byer Message'
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
                disable: 'Optional Reason',
            },
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging',
            },
            texts: 'Change Texts',
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
                    unclaimed: 'Change unclaimed text',
                    claimed: 'Change claimed text'
                },
                page: {
                    unclaimed: {
                        title: 'Unclaimed',
                        name: 'Unclaimed Ticket description',
                    },
                    claimed: {
                        title: 'Claimed',
                        name: 'Claimed Ticket description',
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
        title: 'Moderation',
        option: {
            role: 'Bypass Role: {role}',
            logging: 'Logging: {channel}',
        },
        button: {
            filter: 'Blacklist',
            antiScam: 'Anti Scam',
            antiSpam: 'Anti Spam'
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
                    }
                },
                page: {
                    words: {
                        title: 'Words',
                        name: 'Blacklisted word',
                        awaitMessage: 'Send one or multiple words that should get blacklisted.\nPlease **only use** characters from `A-Z`\nSplit words with `, ` to bulk add words.',
                        bulkAdded: 'Successfully bulk added {amout} new words to the blacklist.',
                        added: 'Successfully added "`{word}`" as new blacklisted word.',
                        removed: 'Successfully removed "`{word}`" as new blacklisted word.'
                    },
                    message: {
                        title: 'Message',
                        name: 'Blacklisted word reply'
                    },
                    timeout: {
                        title: 'Timeout Duration',
                        name: 'Timeout duration',
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
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
                    total: 'Total: **{amount} words**',
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
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
                        delete: 'delete',
                        timeout: 'timeout'
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
                            pruge: 'Purge'
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
                        description: 'The user will be set on Timeout for this duration!\nInput must be between 0 and 1440 minutes.',
                    },
                    threshold: {
                        title: 'Threshold',
                        name: 'spam Threshold',
                        description: 'I will consider it as spam, when this amount gets reached within 5 seconds!\nInput must be between 1 and 99.',
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
            logging: {
                disable: 'Disable Logging',
                enable: 'Enable Logging'
            },
            reply: {
                disable: 'Hide Replied to',
                enable: 'Show Replied to'
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
                name: 'Starboard Emoji',
            },
            color: {
                title: 'Color',
                name: 'Starboard Color',
                description: 'Paste the HEX color code into the chat.\nGet a HEX color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!',
                invalid: 'The color code is not a valid HEX color.\nGet a HEX color code from [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker/)!'
            },
            count: {
                title: 'Count',
                name: 'requierd Count',
                description: 'Send a number to set the minimum {emote} reaction count requirement.'
            }
        }
    },

    staff: {
        title: 'Manage {name}',
        option: {
            premium: 'Premium: {tier}'
        },
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
                title: 'Configure Premium',
                option: {
                    tier: 'Current Teir: {tier}'
                },
                button: {
                    tier: 'Tier {tier}'
                }
            }
        }
    },

    exit: {
        title: 'Saved settings and exited config menu.'
    }
};