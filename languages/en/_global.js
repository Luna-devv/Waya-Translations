module.exports = {
    disabled: 'You have been disabled.',
    button: {
        add: 'Add {name}',
    },
    permissions: {
        user: {
            guild: 'You cannot run this action since you\'re missing the {perms} permissions.',
            channel: 'You cannot run this action since you\'re missing the {perms} permissions in this channel.',
            roles: {
                user: {
                    text: 'You cannot perform this action since the highest role of that user is higher than yours.',
                    user: 'User: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'You cannot perform this action since your highest role is lower than the role to manage.',
                    user: 'Role: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'I cannot run this action since I\'m missing the {perms} permissions.',
            channel: 'I cannot run this action since I\'m missing the {perms} permissions in this channel.',
            roles: {
                user: {
                    text: 'I cannot perform this action since the highest role of that user is higher than mine.',
                    user: 'User: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                },
                role: {
                    text: 'I cannot perform this action since my highest role is higher than the role to manage.',
                    user: 'Role: {u.role} @ index {u.index}',
                    bot: 'Me: {b.role} @ index {b.index}'
                }
            }
        }
    }
};
