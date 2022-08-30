module.exports = {
    error: {
        tooShort: 'Zeit kann nicht kürzer als **eine Sekunde** sein..',
        tooLong: 'Zeit kann nicht mehr als **24 Tage** sein..',
        cantFindId: 'Ich kann keine aktive Erinnerung mit der Id `{id}` finden'
    },
    reminder: 'Hey, {user}, hier ist deine Erinnerung.',
    remindSet: {
        created: 'Ich werde dich in **{time}** erinnern!',
        id: 'Id'
    },
    remindView: {
        created: 'Erstellt',
        remindsIn: 'Erinnert',
        message: 'Nachricht',
        button: {
            delete: 'Löschen',
            invite: '{user} Einladen'
        },
        reminderCount: 'Du hast {count} Erinnerungen',
        createFirst: 'Use {command} first to create a reminder!'
    },
    remindDelete: { deleted: 'Ich habe deine Erinnerung mit der Id `{id}` gelöscht.' }
};