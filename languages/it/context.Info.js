module.exports = {
    messages: 'Messages',
    name: 'Name',
    id: 'Id',
    created: 'Created',
    joined: 'Joined',
    invited: 'Invited by',
    none: 'none',
    pronouns: {
        title: 'Pronouns',
        none: 'No pronouns set'
    },
    actions: {
        notAllowed: 'You can\'t use this menu.',
        invalidTime: 'The duration cannot be less than a second!',
        otherInvalidTime: 'The duration cannot be more than 28 days!',
        placeholder: 'Choose an action',
        option: {
            ban: 'Ban User',
            kick: 'Kick User',
            timeout: 'Timeout User',
            role: 'Assign Role'
        },
        form: {
            reason: 'Reason',
            note: 'Moderator Note',
            duration: 'Duration'
        },
        success: {
            ban: 'Successfully banned {user} from {guild}.',
            kick: 'Successfully kicked {user} from {guild}.',
            timeout: 'Successfully timed {user} out in {guild}.'
        }
    }
};