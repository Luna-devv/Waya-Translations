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
        reset: 'Les données **{type}** de **{user}** ont été réinitialisées !',
        bulkReset: '**{type}** de **{user}** sont en cours de suppression !'
    },
    aborted: 'Suppression des données **{type}** de **{user}** annulée !'
};