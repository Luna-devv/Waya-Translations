module.exports = {
    alreadyExists: 'Ein Tag mit diesem Namen existiert bereits!',
    alreadyExistsDefault: 'Ein standard Befehl mit diesen Namen exestiert bereits!',
    invalidTag: 'Kein Tag mit diesen Namen gefunden!',
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
        formName: '{name} Tag',
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
        title: 'Tag liste',
        none: 'keine Tags',
        disabled: '{amount} ;[tag is, tags are] hidden due to missing permissions'    // ;[singular, plural]
    },
    deleted: '**{name}** wurde erfolgreich gelöscht.'
};