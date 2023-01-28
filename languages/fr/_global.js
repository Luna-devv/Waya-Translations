module.exports = {
    dms: 'Cette commande ne peut pas être utilisée en DM.',
    disabled: 'Vous êtes banni.',
    mention: 'Hey {user}, utilise **{emote} SlashCommands** pour me configurer !\nUtilise {command} pour plus d\'informations.',
    error: 'Un erreur s\'est produite lors de l\'exécution de cette commande.\nVeuillez rejoindre le serveur de support et signaler cette erreur\navec l\'id {issue} !',
    premium: {
        required: 'abonnement requis',
        embeds: {
            title: 'Désolé, l\'abonnement est requis',
            title2: 'Désolé, la limite d\'abonnement est atteinte',
            description: 'Pour pouvoir vous proposer un bot fiable, et parce que l\'argent ne pousse pas dans les arbres, les fonctions non essentielles sont restreintes par un abonnement.'
        },
        button: {
            subscribe: 'S\'abonner',
            support: 'Contacter le support'
        }
    },
    button: {
        add: 'Ajouter {name}',
        support: 'Support'
    },
    permissions: {
        user: {
            guild: 'Les permissions {perms} sont requises pour effectuer cette action.',
            channel: 'Les permissions {perms} sont requises pour effectuer cette action ici.',
            roles: {
                user: {
                    text: 'Vous ne pouvez pas effectuer cette action, car cet utilisateur possède un rôle plus haut que les vôtres.',
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
            guild: 'J\'ai besoin des permissions {perms} pour effectuer cette action.',
            channel: 'J\'ai besoin des permissions {perms} pour effectuer cette action ici.',
            roles: {
                user: {
                    text: 'Vous ne pouvez pas effectuer cette action, car cet utilisateur possède un rôle plus haut que le mien.',
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