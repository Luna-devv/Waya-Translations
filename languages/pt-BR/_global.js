module.exports = {
    dms: 'Esse comando não pode ser usado em mensagens privadas.',
    disabled: 'Você foi banido do bot.',
    mention: 'Hey {user}, use **{emote} SlashCommands** to set me up!\nUse {command} for more informations.',
    error: 'Ocorreu um erro ao executar este comando.\nPor favor, entre no nosso servidor de suporte e relate este problema com o id {issue}!',
    premium: {
        required: 'é necessária uma assinatura',
        embeds: {
            title: 'Desculpe, mas a assinatura é necessária',
            title2: 'Desculpe, mas o limite de assinaturas foi atingido',
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
        help: 'Need Help?',
        notifyMe: 'Get social pings!'
    }
};