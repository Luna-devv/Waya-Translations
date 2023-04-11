module.exports = {
    alreadyExists: 'Un message persistant existe déjà dans ce salon !',
    stickymessagesLimit: 'Vous avez atteint la limite de **{count}/{max} messages persistants** par serveur !',
    invalidstickymessage: 'Aucun message persistant n\'existe dans ce salon !',
    overview: {
        title: 'Configuration des Messages Persistants',
        permissions: 'Manquantes : {perms}',
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
        formName: 'Message Persistent {name}',
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
        message: 'Votre Message Persistant a bien été ajouté dans {channel}.',
        try: 'Essayez en envoyant quelques messages dedans !'
    },
    list: {
        title: ';[Message Persistant, Messages Persistants]',
        none: 'pas de messages persistants'
    },
    deleted: 'Votre Message Persistant a bien été supprimé dans {channel}.'
};