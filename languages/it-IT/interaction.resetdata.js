module.exports = {
    confirm: {
        description: 'Sei sicuro di voler __reset__ i dati **{type}** da **{user}**?',
        button: {
            delete: 'Sono sicuro/a, elimina',
            abord: 'Lascia stare'
        }
    },
    delete: {
        invalidUser: 'Questo utente non esiste nel database!',
        bulkInvalidUser: 'Nessun utente esiste nel database!',
        reset: 'Il **{type}** da **{user}** è stato resettato!',
        bulkReset: '**{type}** da **{user}** è in corso di eliminazione!'
    },
    aborted: 'Annullato l\'eliminazion **{type}** di **{user}**!'
};