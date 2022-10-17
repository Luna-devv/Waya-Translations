module.exports = {
    title: {
        text: 'Text ;[Command, Commands]',
        slash: 'Slash ;[Command, Commands]'
    },
    none: 'keine Tags',
    disabled: '{amount} ;[Tag, Tags] sind versteckt aufgrund fehlender rechte',
    // ;[singular, plural]
    amount: '{amount} tags • Use with {command}',
    errors: {
        overLimit: 'You have reached the guild limit of **{count}/{max} tags**!\n\nNote that this tag exceeds the limits and is disabled until you increase the limit again.',
        invalidTag: 'A Tag with this name doesn\'t exist!',
        ticketUse: 'This Tag is only available in tickets using {user}.'
    }
};