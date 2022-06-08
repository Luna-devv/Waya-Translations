module.exports = {
    confirm: {
        description: 'Bist du dir sicher, dass du **{type}** von **{user}** __zurücksetzen__ willst?',
        button: {
            delete: 'Ja, bin ich',
            abord: 'Nein danke'
        }
    },
    delete: {
        invalidUser: 'User existiert nicht in der Datenbank!',
        bulkInvalidUser: 'Keine Users in der Datebank!',
        reset: '**{type}** von **{user}** wurde zurückgesetzt!',
        bulkReset: '**{type}** von **{user}** wird gerade zurückgesetzt!'
    },
    aborted: '**{user}**s **{type}** Zurücksetzung abgebrochen!'
};