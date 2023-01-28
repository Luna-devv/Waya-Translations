module.exports = {
    dms: 'Kjo komandë nuk mund të përdoret brenda mesazheve private.',
    disabled: 'Ju keni qenë të paaftë.',
    mention: 'Hej {user}, përdor **{emote} SlashCommands** për të më konfiguruar!\nPërdorni {command} për më shumë informacion.',
    error: 'Ndodhi një gabim gjatë ekzekutimit të kësaj komande.\nJu lutemi bashkohuni me serverin e mbështetjes dhe raportoni këtë problem\nme Id-në {issue}!',
    premium: {
        required: 'subscription required',
        embeds: {
            title: 'Sorry but Subscription is required',
            title2: 'Sorry but the Subscriptions limit was reached',
            description: 'In order we can provide a stable bot and money doesn\'t grow on trees, we have to lock non essential features behind a Subscription.'
        },
        button: {
            subscribe: 'Subscribe',
            support: 'Contact Support'
        }
    },
    button: {
        add: 'Add {name}',
        support: 'Support'
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
    },
    ad: {
        vote: 'Support Us!',
        help: 'Need Help?'
    }
};