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
                    text: 'Vous ne pouvez pas effectuer cette action, car cet utilisateur possède un rôle plus haut que tous les vôtres.',
                    user: 'Utilisateur : {u.role} @ index {u.index}',
                    you: 'Vous : {y.role} @ index {y.index}'
                },
                role: {
                    text: 'Vous ne pouvez pas effectuer cette action, car votre rôle le plus haut n\'est pas plus haut que le rôle sélectionné.',
                    user: 'Rôle : {u.role} @ index {u.index}',
                    you: 'Vous : {y.role} @ index {y.index}'
                }
            }
        },
        me: {
            guild: 'J\'ai besoin des permissions {perms} pour effectuer cette action.',
            channel: 'J\'ai besoin des permissions {perms} pour effectuer cette action ici.',
            roles: {
                user: {
                    text: 'Je ne peux pas effectuer cette action, car cet utilisateur possède un rôle plus haut que le mien.',
                    user: 'Utilisateur : {u.role} @ index {u.index}',
                    bot: 'Moi : {b.role} @ index {b.index}'
                },
                role: {
                    text: 'Je ne peux pas effectuer cette action, car mon rôle le plus haut est plus haut que le rôle sélectionné.',
                    user: 'Rôle : {u.role} @ index {u.index}',
                    bot: 'Moi : {b.role} @ index {b.index}'
                }
            }
        }
    },
    ad: {
        vote: 'Soutenez-nous !',
        help: 'Besoin d\'aide ?'
    }
};