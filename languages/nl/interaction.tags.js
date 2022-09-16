module.exports = {
    lengthFail: 'The Tag name cannot be longer than {max} characters!',
    alreadyExists: 'A Tag with this name already exists!',
    tagsLimit: 'You have reached the guild limit of **{count}/{max} tags**, please [Contact Support]({support})!',
    regexFail: 'Tag name validation failed for using SlashCommands!\nNote that special characters are not allowed.',
    alreadyExistsDefault: 'A default Command with this name already exists!',
    invalidTag: 'A Tag with this name doesn\'t exist!',
    info: {
        title: {
            created: 'Created',
            author: 'Author',
            usesWeek: 'Uses a week',
            uses: 'Uses',
            last: 'Last Used',
            name: 'Tag Name',
            slash: 'Slash Command',
            channels: 'Channels',
            tags: 'Tags',
            totalUses: 'Total Uses',
            totalTags: 'Total Tags',
            totalChannels: 'Total Channels'
        },
        description: {
            usesWeek: '{number}/wk',
            // wk: week;; example: 43/wk
            slash: {
                true: 'active',
                false: 'not active'
            },
            channelUses: '{number} ;[use, uses]'
        },
        noData: 'no data'
    },
    overview: {
        title: 'Tag Config',
        message: 'Message',
        embed: 'Embed',
        placeholder: 'Useable Placeholders',
        button: {
            exit: 'Save & Exit',
            permission: 'Select a permission the user needs',
            color: {
                enabled: 'Select a color for the Embed',
                disabled: 'Use Embeds and select a color'
            },
            group: {
                ticket: {
                    disable: 'Disable Ticket Tag',
                    enable: 'Enable Ticket Tag'
                }
            },
            permissions: {
                Administrator: 'Administrator',
                ManageChannels: 'Manage Channels',
                ManageGuild: 'Manage Guild',
                ManageMessages: 'Manage Messages',
                ManageNicknames: 'Manage Nicknames',
                ManageRoles: 'Manage Roles',
                ManageWebhooks: 'Manage Webhooks',
                ManageEmojisAndStickers: 'Manage Emojis & Stickers',
                ManageEvents: 'Manage Events',
                ManageThreads: 'Manage Threads',
                none: 'None'
            }
        }
    },
    form: {
        formName: '{name} tag',
        message: { content: 'Content' },
        embed: {
            title: 'Title',
            description: 'Description',
            thumbnail: 'Thumbnail',
            image: 'Image',
            footer: 'Footer'
        }
    },
    success: {
        message: 'Successfully added the Tag {name}.',
        command: 'Try it out with {command}'
    },
    list: {
        title: 'Tag list',
        none: 'no tags',
        disabled: '{amount} ;[tag is, tags are] hidden due to missing permissions'
    },
    deleted: 'Successfully deleted the Tag **{name}**.'
};