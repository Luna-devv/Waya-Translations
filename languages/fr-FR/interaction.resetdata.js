module.exports = {
    confirm: {
        description: 'Êtes-vous sûr(e) de vouloir __réinitialiser__ les données **{type}** de **{user}** ?',
        button: {
            delete: 'Je suis sûr(e), supprimer',
            abord: 'Laisse tomber'
        }
    },
    delete: {
        invalidUser: 'Cet utilisateur n\'existe pas dans la base de données !',
        bulkInvalidUser: 'Aucun utilisateur dans la base de données !',
        reset: 'The **{type}** from **{user}** has been reset!',
        bulkReset: '**{type}** from **{user}** is in process of getting deleted!'
    },
    aborted: 'Aborted **{user}**\'s **{type}** deletion!'
};