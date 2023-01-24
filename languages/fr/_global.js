module.exports = {
    dms: 'Cette commande ne peut pas être utilisée en DM.',
    disabled: 'Vous êtes banni.',
    mention: 'Hey {user}, utilise **{emote} SlashCommands** pour me configurer !\nUtilise {command} pour plus d\'informations.',
    error: 'Un erreur s\'est produite en exécutant cette commande.\nVeuillez rejoindre le serveur Support and signaler cette erreur\navec l\'id {issue} !',
    premium: {
        required: 'abonnement requis',
        embeds: {
            title: 'Sorry but Subscription is required',
            title2: 'Sorry but the Subscriptions limit was reached',
            description: 'Pour pouvoir vous proposer un bot fiable, et parce que l\'argent ne pousse pas dans les arbres, les fonctions non essentielles sont restreintes par un abonnement.'
        },
        button: {
            subscribe: 'Subscribe',
            support: 'Contact Support'
        }
    },
    button: {
        add: 'Ajouter {name}',
        support: 'Support'
    },
    permissions: {
        user: {
            guild: 'La permission {perms} est requise pour effectuer cette action.',
            channel: 'La permission {perms} est requise pour effectuer cette action.',
            roles: {
                user: {
                    text: 'Vous ne pouvez pas effectuer cette action car cet utilisateur possède un rôle plus haut que les vôtres.',
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