module.exports = {
    confirm: {
        description: 'Bist du dir sicher, dass du **{type}** von **{user}** __zurücksetzen__ willst?',
        button: {
            delete: 'I\'m sure, delete',
            abord: 'Nevermind'
        }
    },
    delete: {
        invalidUser: 'User does not exist in the Database!',
        bulkInvalidUser: 'Keine User in der Datenbank!',
        reset: 'The **{type}** from **{user}** has been reset!',
        bulkReset: '**{type}** from **{user}** is in process of getting deleted!'
    },
    aborted: 'Aborted **{user}**\'s **{type}** deletion!'
};