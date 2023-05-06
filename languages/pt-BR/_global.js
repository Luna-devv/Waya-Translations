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
            description: 'Para podermos fornecer um bot estável e como dinheiro não cresce em árvores, temos que bloquear os recursos não essenciais por trás de uma Assinatura.'
        },
        button: {
            subscribe: 'Subscribe',
            support: 'Contact Support'
        }
    },
    button: {
        add: 'Adicionar {name}',
        support: 'Suporte'
    },
    permissions: {
        user: {
            guild: 'Você não pode executar essa ação porque você não tem as permissões {perms}.',
            channel: 'Você não pode executar esta ação porque não tem as permissões {perms} neste canal.',
            roles: {
                user: {
                    text: 'Você não pode executar esta ação, pois o cargo mais alto desse usuário é maior que o seu.',
                    user: 'User: {u.role} @ index {u.index}',
                    you: 'You: {y.role} @ index {y.index}'
                },
                role: {
                    text: 'Você não pode executar esta ação, pois seu cargo mais alto é inferior ao cargo a ser gerenciado.',
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
                    text: 'Eu não posso executar esta ação porque o cargo mais alto desse usuário é mais alto do que o meu.',
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