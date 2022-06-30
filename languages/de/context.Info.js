module.exports = {
    messages: 'Nachrichten',
    name: 'Name',
    id: 'Id',
    created: 'Created',
    joined: 'Beigetreten',
    invited: 'Eingeladen',
    none: 'none',
    pronouns: {
        title: 'Pronouns',
        none: 'No pronouns set'
    },
    actions: {
        notAllowed: 'Du kannst dieses Menü nicht benutzten.',
        invalidTime: 'The duration cannot be less than a second!',
        otherInvalidTime: 'The duration cannot be more than 28 days!',
        placeholder: 'Wähle eine Aktion',
        option: {
            ban: 'User Bannen',
            kick: 'User Kicken',
            timeout: 'User Muten',
            role: 'Assign Role'
        },
        form: {
            reason: 'Grund',
            note: 'Moderator Note',
            duration: 'Duration'
        },
        success: {
            ban: '{user} wurde erfolgreich von {guild} gebannt.',
            kick: 'Successfully kicked {user} from {guild}.',
            timeout: 'Successfully timed {user} out in {guild}.'
        }
    }
};