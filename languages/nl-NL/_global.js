module.exports = {
    dms: 'Dit commando kan niet gebruikt worden in privéberichten.',
    disabled: 'You have been disabled.',
    mention: 'Hey {user}, use **{emote} SlashCommands** to set me up!\nUse {command} for more informations.',
    error: 'An error occurred while executing this command.\nPlease join the support server and report this issue\nwith the id {issue}!',
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
        add: 'Voeg {name} toe',
        support: 'Support'
    },
    permissions: {
        user: {
            guild: 'Je kunt deze actie niet gebruiken. Je ontbreekt volgende permissies: {perms}.',
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
            guild: 'Ik kan deze actie niet uitvoeren omdat ik volgende permissies niet heb: {perms}.',
            channel: 'Ik kan deze actie niet uitvoeren omdat ik volgende permissies niet heb in dit kanaal: {perms}.',
            roles: {
                user: {
                    text: 'Ik kan deze actie niet uitvoeren omdat de hoogste rol van de gebruiker hoger is dan die van mij.',
                    user: 'Gebruiker: {u.role} @ index {u.index}',
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