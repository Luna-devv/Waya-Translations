module.exports = {
    confirm: {
        description: 'Bist du dir sicher das du **{type}** von **{user}** __zurücksetzen__ willst?',
        button: {
            delete: 'Ja, bin ich',
            abord: 'Nein danke'
        }
    },
    delete: {
        invalidUser: 'User exestiert nicht in der Datenbank!',
        bulkInvalidUser: 'Keine Users in der Datebank!',
        reset: '**{type}** von **{user}** wurde zurückgesetzt!',
        bulkReset: '**{type}** von **{user}** ist in arbeit zurückgesetzt zu werden!'
    },
    aborted: '**{user}**\'s **{type}** zurücksetung abgebrochen!'
};