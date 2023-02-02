module.exports = {
    alreadyExists: 'Un message persistant existe déjà dans ce salon !',
    stickymessagesLimit: 'Vous avez atteint la limite par serveur de **{count}/{max} messages persistants** !',
    invalidStickymessage: 'Aucun message persistant n\'existe dans ce salon !',
    overview: {
        title: 'Configuration d\'un message persistant',
        message: 'Message',
        embed: 'Embed',
        note: 'Note du bouton',
        note_status: {
            show: 'Affiché',
            hide: 'Caché'
        },
        button: {
            exit: 'Enregistrer et quitter',
            color: {
                enabled: 'Veuillez sélectionner une couleur pour l\'embed',
                disabled: 'Utiliser un embed et sélectionner une couleur'
            },
            note: {
                show: 'Afficher la note',
                hide: 'Cacher la note'
            }
        }
    },
    form: {
        formName: '{name} message persistant',
        message: { content: 'Contenu' },
        embed: {
            title: 'Titre',
            description: 'Description',
            thumbnail: 'Icône',
            image: 'Image',
            footer: 'Texte de bas de page'
        }
    },
    success: {
        message: 'Votre message persistant a bien été ajouté dans {channel}.',
        try: 'Essayez en envoyant quelques messages dedans !'
    },
    list: {
        title: ';[message persistant, messages persistants]',
        none: 'pas de messages persistants'
    },
    deleted: 'Votre message persistant a bien été supprimé dans {channel}.'
};