module.exports = {
    lengthFail: 'OH nyoo babe, the Tag nyame cannyot be wongew than {max} chawactews! >~<',
    alreadyExists: 'A Tag with this nyame awweady exists!',
    tagsLimit: 'You have reached the guild limit of **{count}/{max} tags**!',
    regexFail: 'Tag nyame vawidation faiwed fow using SwashCommands! ://///\nNyote that speciaw chawactews r nyot awwowed. 😔',
    alreadyExistsDefault: 'A defauwt Command with this nyame awweady exists!',
    invalidTag: 'A Tag with this nyame doesn\'t exist!',
    info: {
        title: {
            created: 'Cweated',
            author: 'Authoww',
            usesWeek: 'Uses a Week',
            uses: 'Uses',
            last: 'Wast Used',
            name: 'Tag Nyame',
            slash: 'Swash Command',
            channels: 'Channyews',
            tags: 'Tags',
            totalUses: 'Totaw Uses',
            totalTags: 'Totaw Tags',
            totalChannels: 'Totaw Channyews'
        },
        description: {
            usesWeek: '{number}/wk',
            // wk: week;; example: 43/wk
            slash: {
                true: 'active',
                false: 'nyot active'
            },
            channelUses: '{number} ;[use, uses]'
        },
        noData: 'nyo data'
    },
    overview: {
        title: 'Tag Config',
        message: 'Message',
        embed: 'Embed',
        placeholder: 'Useabwe Pwacehowdews',
        button: {
            exit: 'Save & Exit',
            permission: 'Sewect a pewmission the usew nyeeds',
            color: {
                enabled: 'Sewect a cowow fow the Embed',
                disabled: 'Use Embeds and sewect a cowow'
            },
            group: {
                ticket: {
                    disable: 'Disabwe Ticket Tag',
                    enable: 'Enyabwe Ticket Tag'
                }
            },
            permissions: {
                Administrator: 'Adminyistwatow',
                ManageChannels: 'Manyage Channyews',
                ManageGuild: 'Manyage Guiwd',
                ManageMessages: 'Manyage Messages',
                ManageNicknames: 'Manyage Nyicknyames',
                ManageRoles: 'Manyage Wowes',
                ManageWebhooks: 'Manyage Webhooks',
                ManageEmojisAndStickers: 'Manyage Emojis & Stickews',
                ManageEvents: 'Manyage Events',
                ManageThreads: 'Manyage Thweads',
                none: 'Nyonye'
            }
        }
    },
    form: {
        formName: '{name} tag',
        message: { content: 'Content' },
        embed: {
            title: 'Titwe',
            description: 'Descwiption',
            thumbnail: 'Thumbnyaiw',
            image: 'Image',
            footer: 'Footew'
        }
    },
    success: {
        message: 'Successfuwwy added the Tag {name}.',
        command: 'Twy it out with {command}'
    },
    list: {
        title: 'Tag wist',
        none: 'nyo tags',
        disabled: '{amount} ;[tag is, tags r] hidden cuz u r missing pewmissions'
    },
    deleted: 'Successfuwwy uwu deweted the Tag **{nyame}**. >.<'
};