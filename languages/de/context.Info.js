module.exports = {
    messages: 'Nachrichten',
    name: 'Name',
    id: 'Id',
    created: 'Erstellt',
    joined: 'Beigetreten',
    invited: 'Eingeladen',
    none: 'keine',
    pronouns: {
        title: 'Pronomen',
        none: 'Keine Pronomen ausgewählt'
    },
    actions: {
        notAllowed: 'Du kannst dieses Menü nicht benutzten.',
        invalidTime: 'Die Dauer kann nicht kleiner als eine Sekunde sein!',
        otherInvalidTime: 'Die Dauer kann nicht länger als 28 Tage sein!',
        placeholder: 'Wähle eine Aktion',
        option: {
            ban: 'User Bannen',
            kick: 'User Kicken',
            timeout: 'User Muten',
            role: 'Rolle Hinzufügen'
        },
        form: {
            reason: 'Grund',
            note: 'Moderator Notiz',
            duration: 'Länge'
        },
        success: {
            ban: '{user} wurde erfolgreich von {guild} gebannt.',
            kick: '{user} wurde erfolgreich von {guild} gekickt.',
            timeout: '{user} wurde erfolgreich von {guild} gemuted.'
        }
    }
};