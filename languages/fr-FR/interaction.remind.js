module.exports = {
    error: {
        tooShort: 'Le délai ne peut être inférieur à **1 seconde**..',
        tooLong: 'Le délai ne peut être supérieur à **24 jours**..',
        cantFindId: 'Je ne trouve aucun rappel ayant l\'ID `{id}`'
    },
    reminder: 'Hey {user}, voici votre rappel.',
    remindSet: {
        created: 'Je vous le rappelle dans **{time}** !',
        id: 'Id'
    },
    remindView: {
        created: 'Créé',
        remindsIn: 'Rappels',
        message: 'Message',
        button: {
            delete: 'Supprimer',
            invite: 'Inviter {user}'
        },
        reminderCount: 'Vous avez {count} rappels',
        createFirst: 'Utilisez d\'abord {command} pour créer un rappel !'
    },
    remindDelete: { deleted: 'J\'ai supprimé votre rappel ayant l\'Id `{id}`' }
};