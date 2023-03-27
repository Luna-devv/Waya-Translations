module.exports = {
    alreadyExists: 'A stickymessage in this channel already exists!',
    stickymessagesLimit: 'You have reached the guild limit of **{count}/{max} stickymessages**!',
    invalidstickymessage: 'No stickymessage exists in this channel!',
    overview: {
        title: 'Stickymessage Config',
        permissions: 'Missing: {perms}',
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
        formName: '{name}\'s Stickymessage',
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
        message: 'Successfully added a stickymessage in {channel}.',
        try: 'Essayez en envoyant quelques messages dedans !'
    },
    list: {
        title: ';[Stickymessage, Stickymessages]',
        none: 'pas de messages persistants'
    },
    deleted: 'Successfully deleted the stickymessage in {channel}.'
};