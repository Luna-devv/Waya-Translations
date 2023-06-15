module.exports = {
    alreadyExists: 'A stickymessage in this channel already exists!',
    stickymessagesLimit: 'You have reached the guild limit of **{count}/{max} stickymessages**!',
    invalidstickymessage: 'No stickymessage exists in this channel!',
    overview: {
        title: 'Stickymessage Config',
        state: 'Status: {state}',
        state_status: {
            enabled: 'Enabled',
            disabled: 'Disabled'
        },
        permissions: 'Missing: {perms}',
        message: 'Message',
        embed: 'Embed',
        note: 'Button Note',
        note_status: {
            show: 'Showing',
            hide: 'Hidden'
        },
        button: {
            state: {
                enable: 'Enable',
                disable: 'Disable'
            },
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
        formName: '{name}\'s Stickymessage',
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
        message: 'Successfully added a stickymessage in {channel}.',
        try: 'Try it out by sending a few messages there!'
    },
    list: {
        title: ';[Stickymessage, Stickymessages]',
        none: 'no sticky messages'
    },
    deleted: 'Successfully deleted the stickymessage in {channel}.'
};