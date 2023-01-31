module.exports = {
    noData: 'Could not find guild in the Database!',
    noCategory: 'The Tickets category has been deleted. Please notify a Server Administrator.',
    created: 'Your ticket {channel} has been created!',
    form: {
        formTitle: 'Ticket Opening Reason',
        field: 'Why do you want to open a Ticket?',
        placeholder: 'I need help with that..'
    },
    commands: {
        closerequest: 'Create a close request'
    },
    max: {
        category: 'You cannot create a Ticket at this time as this server reached [the max channel limit per category]({docs}) of {num}. Please tell the server admins to set the category channel to {string} to resolve this issue!\n\nHaving questions? {support}',
        guild: 'You cannot create a Ticket at this time as this server reached the max channel limit of {num}. Please tell the server admins to delete a few channels to resovle this issue!\n\nHaving questions? {support}'
    }
};