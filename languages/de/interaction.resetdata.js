module.exports = {
    confirm: {
        description: 'Bist du dir sicher, dass du **{type}** von **{user}** __zurücksetzen__ willst?',
        button: {
            delete: 'Ja, ich bin',
            abord: 'Nein danke'
        }
    },
    delete: {
        invalidUser: 'User existiert nicht in der Datenbank!',
        bulkInvalidUser: 'Keine User in der Datenbank!',
        reset: '**{type}** von **{user}** wurde zurückgesetzt!',
        bulkReset: '**{type}** von **{user}** ist im Prozess zurückgesetzt zu werden!'
    },
    aborted: '**{user}**s **{type}** Zurücksetzung wurde abgebrochen!'
};