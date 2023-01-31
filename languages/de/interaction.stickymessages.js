module.exports = {
    alreadyExists: 'A Sticky Message in this channel already exists!',
    stickymessagesLimit: 'You have reached the guild limit of **{count}/{max} Sticky Messages**!',
    invalidStickymessage: 'No Sticky Message exists in this channel!',
    overview: {
        title: 'Sticky Message Config',
        message: 'Message',
        embed: 'Embed',
        note: 'Button Note',
        note_status: {
            show: 'Showing',
            hide: 'Hidden'
        },
        button: {
            exit: 'Save & Exit',
            color: {
                enabled: 'Select a color for the Embed',
                disabled: 'Use Embeds and select a color'
            },
            note: {
                show: 'Show Note',
                hide: 'Hide Note'
            }
        }
    },
    form: {
        formName: '{name} sticky message',
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
        message: 'Successfully added a Sticky Message in {channel}.',
        try: 'Try it out by sending a few messages there!'
    },
    list: {
        title: 'Sticky ;[Message, Messages]',
        none: 'no sticky messages'
    },
    deleted: 'Successfully deleted the Sticky Message in {channel}.'
};