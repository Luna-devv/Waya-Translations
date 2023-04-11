module.exports = {
    noData: 'Impossible de trouver ce serveur dans la base de données !',
    noCategory: 'La catégorie tickets a été supprimé. Veuillez en informer un administrateur.',
    created: 'Votre ticket {channel} a bien été créé !',
    form: {
        formTitle: 'Raison d\'ouverture du Ticket',
        field: 'Pourquoi voulez-vous ouvrir un Ticket ?',
        placeholder: 'J\'ai besoin d\'aide pour ça..'
    },
    commands: { closerequest: 'Faire une demande de fermeture' },
    max: {
        category: 'Vous ne pouvez pas créer de Ticket pour le moment, car ce serveur a atteint [le nombre de salons maximum par catégorie]({docs}) de {num}. Veuillez informer les administrateurs qu\'ils doivent définir la catégorie sur {string} pour résoudre ce problème !\n\nVous avez des questions ? {support}',
        guild: 'Vous ne pouvez pas créer de Ticket pour le moment, car ce serveur a atteint le nombre de salons maximum de {num}. Veuillez informer les administrateurs qu\'ils doivent supprimer quelques salons pour résoudre ce problème !\n\nVous avez des questions ? {support}'
    }
};