module.exports = {
    noData: 'Impossibile trovare la gilda nel database!',
    noCategory: 'La categoria Ticket è stata eliminata. Si prega d\'informare un amministratore del server.',
    created: 'Il tuo ticket {channel} è stato creato!',
    form: {
        formTitle: 'Motivo di Apertura Biglietto',
        field: 'Perché vuoi aprire un Ticket?',
        placeholder: 'Ho bisogno di aiuto per..'
    },
    commands: { closerequest: 'Crea una richiesta di chiusura' },
    max: {
        category: 'You cannot create a Ticket at this time as this server reached [the max channel limit per category]({docs}) of {num}. Please tell the server admins to set the category channel to {string} to resolve this issue!\n\nHaving questions? {support}',
        guild: 'You cannot create a Ticket at this time as this server reached the max channel limit of {num}. Please tell the server admins to delete a few channels to resovle this issue!\n\nHaving questions? {support}'
    }
};