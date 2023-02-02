module.exports = {
    title: {
        text: 'Text ;[Command, Commands]',
        slash: 'Slash ;[Command, Commands]'
    },
    none: 'no tags',
    disabled: '{amount} ;[tag is, tags are] hidden due to missing permissions',
    // ;[singular, plural]
    amount: '{amount} tags • Use with {command}',
    errors: {
        overLimit: 'You have reached the guild limit of **{count}/{max} tags**!\n\nNote that this tag exceeds the limits and is disabled until you increase the limit again.',
        invalidTag: 'Aucun Tag portant ce nom n\'existe !',
        ticketUse: 'Ce Tag est uniquement disponible dans les tickets utilisant {user}.'
    }
};