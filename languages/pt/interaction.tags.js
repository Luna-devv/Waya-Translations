module.exports = {
    lengthFail: 'The Tag name cannot be longer than {max} characters!',
    alreadyExists: 'A Tag with this name already exists!',
    tagsLimit: 'You have reached the guild limit of **{count}/{max} tags**, please [Contact Support]({support})!',
    regexFail: 'Tag name validation failed for using SlashCommands!\nNote that special characters are not allowed.',
    alreadyExistsDefault: 'A default Command with this name already exists!',
    invalidTag: 'A Tag with this name doesn\'t exist!',
    info: {
        _title: '{name} Tag Info',
        title: {
            created: 'Created',
            author: 'Author',
            usesWeek: 'Uses a week',
            uses: 'Uses'
        },
        description: {
            uses: '{uses} total',
            usesWeek: 'average {uses} a week'
        }
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