module.exports = {
    messages: 'Messages',
    name: 'Name',
    created: 'Created',
    joined: 'Joined',
    invites: 'Invites',
    voice: 'Voice',
    none: 'none',
    timeout: 'on Timeout for {time}',
    pronouns: {
        title: 'Pronouns',
        none: 'No pronouns set'
    },
    button: {
        guildAvatar: 'Per-Guild Avatar URL',
        avatar: 'Avatar URL',
        banner: 'Banner URL'
    },
    actions: {
        notAllowed: 'You cannot use this menu.',
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
            timeout: 'Successfully timed {user} out in {guild}.',
        }
    },
    likes: {
        add: 'Like',
        remove: 'Dislike',

        added: 'You have liked {user}\'s profile. They now have {num} ;[like, likes] :3',
        removed: 'You no longer like {user}\'s profile.',

        dm: '{emote} Congratulations, {name}!\n\nWe have some fantastic news to share with you! Your {bot} profile has reached an incredible {num} likes! You\'re clearly doing something right because people just can\'t get enough of you!\n\nSo let\'s keep the momentum going and spread the love! Tell everyone to invite {bot} by sending them {link} and make sure to use the {command} followed by your username to heart 💖 your profile!\n\nThank you for being such a fantastic part of our community!\n\nCheers,\n{bot} '
    }
};
