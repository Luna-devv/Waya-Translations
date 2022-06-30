module.exports = {
    alreadyExists: 'A Tag with this name already exists!',
    alreadyExistsDefault: 'A default Command with this name already exists!',
    invalidTag: 'A Tag with this name doesn\'t exist!',
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
        message: {
            content: 'Content'
        },
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
        disabled: '{amount} ;[tag is, tags are] hidden due to missing permissions'   // ;[singular, plural]
    },
    deleted: 'Successfully deleted the Tag **{name}**.'
};